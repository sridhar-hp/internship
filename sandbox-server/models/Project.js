import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  language: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  }
});

const projectSchema = new mongoose.Schema({
  files: [fileSchema]
});

const Project = mongoose.model("Project", projectSchema);

export default Project;