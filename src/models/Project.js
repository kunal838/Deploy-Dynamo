import mongoose from "mongoose";


const { Schema } = mongoose;
const projectSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    projects: [{
      link: {
        type: String,
        required: true,
      },
     
    }],
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);