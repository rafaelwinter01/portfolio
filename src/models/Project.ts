import mongoose from "mongoose";

/* Projects Schema */
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  picture: String,
  link: String,
  repository: String,
  techs: [],
});

export const ProjectModel =
  mongoose?.models?.Projects || mongoose.model("Projects", projectSchema);
