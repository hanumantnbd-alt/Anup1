/**
 * Input validation schemas using Zod
 */

import { z } from 'zod'

// Admin Login
export const adminLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type AdminLoginInput = z.infer<typeof adminLoginSchema>

// Project Creation/Update
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string().url('Invalid image URL')),
  video: z.string().url('Invalid video URL').optional(),
  github: z.string().url('Invalid GitHub URL').optional(),
  liveDemo: z.string().url('Invalid demo URL').optional(),
  technologies: z.array(z.string()),
  completionDate: z.coerce.date(),
  client: z.string().optional(),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
})

export type ProjectInput = z.infer<typeof projectSchema>

// Skill Creation/Update
export const skillSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  proficiency: z.number().min(0).max(100),
  icon: z.string().optional(),
})

export type SkillInput = z.infer<typeof skillSchema>

// Service Creation/Update
export const serviceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  icon: z.string().optional(),
  price: z.number().optional(),
})

export type ServiceInput = z.infer<typeof serviceSchema>

// Experience Creation/Update
export const experienceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  current: z.boolean().default(false),
})

export type ExperienceInput = z.infer<typeof experienceSchema>

// Education Creation/Update
export const educationSchema = z.object({
  degree: z.string().min(1, 'Degree is required'),
  institution: z.string().min(1, 'Institution is required'),
  field: z.string().min(1, 'Field is required'),
  year: z.number().min(1950).max(new Date().getFullYear() + 5),
})

export type EducationInput = z.infer<typeof educationSchema>

// Contact Form
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
