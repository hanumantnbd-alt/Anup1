import { NextRequest } from 'next/server'
import connectDB from '@/lib/db'
import { adminLoginSchema } from '@/lib/validators'
import { verifyAdminCredentials, generateToken } from '@/lib/auth'
import { successResponse, errorResponse, validationErrorResponse } from '@/lib/responses'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const validationResult = adminLoginSchema.safeParse(body)
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error.errors)
    }

    const { email, password } = validationResult.data

    // Verify credentials
    const isValid = await verifyAdminCredentials(email, password)
    if (!isValid) {
      return errorResponse('Invalid email or password', 401)
    }

    // Generate token
    const token = generateToken({ email, role: 'admin' })

    return successResponse(
      { token, email, role: 'admin' },
      'Login successful'
    )
  } catch (error: any) {
    console.error('Login error:', error)
    return errorResponse('Internal server error', 500, error.message)
  }
}
