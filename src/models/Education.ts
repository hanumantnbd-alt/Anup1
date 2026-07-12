import mongoose from 'mongoose'

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Education || mongoose.model('Education', educationSchema)
