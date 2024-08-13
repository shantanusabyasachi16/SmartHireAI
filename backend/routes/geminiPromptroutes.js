import express from "express";

import generateCoverLetter from  "../geminiApi.js";

const router = express.Router();

router.post("/ai-generation", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    // Parse the prompt string into an object more flexibly
    const jobDetails = {};
    prompt.split(',').forEach(item => {
      const [key, ...valueParts] = item.split(':').map(s => s.trim());
      const value = valueParts.join(':').trim();  // Rejoin in case there were colons in the value
      
      switch (key.toLowerCase()) {
        case "job title":
          jobDetails.jobTitle = value;
          break;
        case "company name":
          jobDetails.companyName = value;
          break;
        case "your name":
        case "name":
          jobDetails.name = value;
          break;
        case "your key skills":
        case "key skills":
        case "skills":
          jobDetails.skills = value;
          break;
        case "years of experience":
        case "experience":
          jobDetails.experience = value;
          break;
      }
    });

    // Check if all required fields are present
    const requiredFields = ['jobTitle', 'companyName', 'name', 'skills', 'experience'];
    const missingFields = requiredFields.filter(field => !jobDetails[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: "Missing required fields", 
        missingFields 
      });
    }

    const coverLetter = await generateCoverLetter(jobDetails);
    res.json({ coverLetter });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    res.status(500).json({
      error: "Failed to generate cover letter",
      details: error.message
    });
  }
});

export default router;