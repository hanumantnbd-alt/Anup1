import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import Education from '@/models/Education'
import { educationSchema } from '@/lib/validators'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

// GET all education
export async function GET() {
  try {
    await connectDB()
    const education = await Education.find().sort({ year: -1 })
    return successResponse(education, 'Education retrieved successfully')
  } catch (error: any) {
    console.error('Error fetching education:', error)
    return errorResponse('Failed to fetch education', 500, error.message)
  }
}

// POST create education
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    // Validate input
    const validationResult = educationSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const edu = await Education.create(validationResult.data)
    return successResponse(edu, 'Education created successfully', 201)
  } catch (error: any) {
    console.error('Error creating education:', error)
    return errorResponse('Failed to create education', 500, error.message)
  }
}
