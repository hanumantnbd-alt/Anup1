/**
 * Authentication utilities
 */

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH

/**
 * Generate JWT token
 */
export const generateToken = (payload: any, expiresIn = '7d'): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

/**
 * Verify JWT token
 */
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

/**
 * Hash password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

/**
 * Compare password
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash)
}

/**
 * Verify admin credentials
 */
export const verifyAdminCredentials = async (email: string, password: string): Promise<boolean> => {
  if (email !== ADMIN_EMAIL) return false
  if (!ADMIN_PASSWORD_HASH) return false
  return comparePassword(password, ADMIN_PASSWORD_HASH)
}

/**
 * Extract token from request
 */
export const extractTokenFromRequest = (req: Request): string | null => {
  const authHeader = req.headers.get('authorization')
  if (!authHeader) return null

  const parts = authHeader.split(' ')
  if (parts.length === 2 && parts[0] === 'Bearer') {
    return parts[1]
  }

  return null
}
