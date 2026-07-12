import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import Experience from '@/models/Experience'
import { experienceSchema } from '@/lib/validators'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

// GET all experience
export async function GET() {
  try {
    await connectDB()
    const experience = await Experience.find().sort({ startDate: -1 })
    return successResponse(experience, 'Experience retrieved successfully')
  } catch (error: any) {
    console.error('Error fetching experience:', error)
    return errorResponse('Failed to fetch experience', 500, error.message)
  }
}

// POST create experience
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    // Validate input
    const validationResult = experienceSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const exp = await Experience.create(validationResult.data)
    return successResponse(exp, 'Experience created successfully', 201)
  } catch (error: any) {
    console.error('Error creating experience:', error)
    return errorResponse('Failed to create experience', 500, error.message)
  }
}
