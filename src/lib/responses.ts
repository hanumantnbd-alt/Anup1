/**
 * API Response helper functions
 */

export const successResponse = <T>(data: T, message: string = 'Success', status = 200) => {
  return new Response(
    JSON.stringify({
      success: true,
      message,
      data,
    }),
    { status, headers: { 'Content-Type': 'application/json' } }
  )
}

export const errorResponse = (message: string, status = 400, error?: any) => {
  return new Response(
    JSON.stringify({
      success: false,
      message,
      error: error?.message || error,
    }),
    { status, headers: { 'Content-Type': 'application/json' } }
  )
}

export const notFoundResponse = () => {
  return errorResponse('Not found', 404)
}

export const unauthorizedResponse = () => {
  return errorResponse('Unauthorized', 401)
}

export const forbiddenResponse = () => {
  return errorResponse('Forbidden', 403)
}

export const validationErrorResponse = (errors: any) => {
  return new Response(
    JSON.stringify({
      success: false,
      message: 'Validation error',
      errors,
    }),
    { status: 422, headers: { 'Content-Type': 'application/json' } }
  )
}
