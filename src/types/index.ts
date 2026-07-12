/**
 * Type definitions
 */

export interface User {
  id: string
  email: string
  role: 'admin'
}

export interface Project {
  _id?: string
  title: string
  description: string
  category: string
  images: string[]
  video?: string
  github?: string
  liveDemo?: string
  technologies: string[]
  completionDate: Date
  client?: string
  tags: string[]
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  createdAt?: Date
  updatedAt?: Date
}

export interface Skill {
  _id?: string
  name: string
  category: string
  proficiency: number
  icon?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Service {
  _id?: string
  title: string
  description: string
  icon?: string
  price?: number
  createdAt?: Date
  updatedAt?: Date
}

export interface Experience {
  _id?: string
  title: string
  company: string
  description: string
  startDate: Date
  endDate?: Date
  current: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface Education {
  _id?: string
  degree: string
  institution: string
  field: string
  year: number
  createdAt?: Date
  updatedAt?: Date
}

export interface Profile {
  _id?: string
  name: string
  bio: string
  email: string
  phone?: string
  image?: string
  location?: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
  createdAt?: Date
  updatedAt?: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}
