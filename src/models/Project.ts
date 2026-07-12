import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    video: String,
    github: String,
    liveDemo: String,
    technologies: [String],
    completionDate: Date,
    client: String,
    tags: [String],
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['completed', 'in-progress', 'planned'],
      default: 'completed',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Project || mongoose.model('Project', projectSchema)
