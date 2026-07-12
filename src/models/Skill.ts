import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 50,
    },
    icon: String,
  },
  { timestamps: true }
)

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema)
