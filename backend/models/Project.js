import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveUrl: { type: String },
    githubUrl: { type: String, required: true },
    techStacks: [{ type: String }],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
