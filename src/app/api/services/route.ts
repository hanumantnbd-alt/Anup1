import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import Service from '@/models/Service'
import { serviceSchema } from '@/lib/validators'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

// GET all services
export async function GET() {
  try {
    await connectDB()
    const services = await Service.find()
    return successResponse(services, 'Services retrieved successfully')
  } catch (error: any) {
    console.error('Error fetching services:', error)
    return errorResponse('Failed to fetch services', 500, error.message)
  }
}

// POST create service
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    // Validate input
    const validationResult = serviceSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const service = await Service.create(validationResult.data)
    return successResponse(service, 'Service created successfully', 201)
  } catch (error: any) {
    console.error('Error creating service:', error)
    return errorResponse('Failed to create service', 500, error.message)
  }
}
