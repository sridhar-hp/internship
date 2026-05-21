import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/save", async (req, res) => {

  try {

    const { files } = req.body;

    const existingProject = await Project.findOne();

    if (existingProject) {

      existingProject.files = files;

      await existingProject.save();

      return res.json({
        success: true,
        message: "Project Updated"
      });

    }

    const newProject = new Project({
      files
    });

    await newProject.save();

    res.json({
      success: true,
      message: "Project Saved"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

router.get("/load", async (req, res) => {

  try {

    const project = await Project.findOne();

    res.json({
      success: true,
      project
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

export default router;