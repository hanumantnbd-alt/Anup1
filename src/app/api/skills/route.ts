import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import Skill from '@/models/Skill'
import { skillSchema } from '@/lib/validators'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

// GET all skills
export async function GET() {
  try {
    await connectDB()
    const skills = await Skill.find().sort({ category: 1, name: 1 })
    return successResponse(skills, 'Skills retrieved successfully')
  } catch (error: any) {
    console.error('Error fetching skills:', error)
    return errorResponse('Failed to fetch skills', 500, error.message)
  }
}

// POST create skill
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    // Validate input
    const validationResult = skillSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const skill = await Skill.create(validationResult.data)
    return successResponse(skill, 'Skill created successfully', 201)
  } catch (error: any) {
    console.error('Error creating skill:', error)
    return errorResponse('Failed to create skill', 500, error.message)
  }
}
