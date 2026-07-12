import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import Project from '@/models/Project'
import { projectSchema } from '@/lib/validators'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

// GET all projects
export async function GET() {
  try {
    await connectDB()
    const projects = await Project.find().sort({ completionDate: -1 })
    return successResponse(projects, 'Projects retrieved successfully')
  } catch (error: any) {
    console.error('Error fetching projects:', error)
    return errorResponse('Failed to fetch projects', 500, error.message)
  }
}

// POST create project
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    // Validate input
    const validationResult = projectSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const project = await Project.create(validationResult.data)
    return successResponse(project, 'Project created successfully', 201)
  } catch (error: any) {
    console.error('Error creating project:', error)
    return errorResponse('Failed to create project', 500, error.message)
  }
}
