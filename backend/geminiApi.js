import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
};

const initialPrompt = `You are a Cover letter generator, you need to generate cover letter in the specific format provided. Any unrelated prompt should be denied by you.

Generate a professional cover letter for a job seeker applying for the position of [JOB TITLE] at [COMPANY NAME]. Use the following details:

Job seeker's name: NAME
Job seeker's key skills: SKILL 1, SKILL 2, SKILL 3
Job seeker's years of experience: YEARS

The cover letter should:
1. Be addressed to the hiring manager
2. Express enthusiasm for the role and company
3. Highlight how the job seeker's skills and experience match the job requirements
4. Include a brief example of a relevant accomplishment
5. Close with a call to action for an interview
6. Be approximately 300-400 words long

Please write the cover letter now.`;

export default async function generateCoverLetter(jobDetails) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: initialPrompt }],
      },
    ],
  });

  const prompt = `
Generate a cover letter for the following:
Job Title: ${jobDetails.jobTitle || 'Not specified'}
Company Name: ${jobDetails.companyName || 'Not specified'}
Job seeker's name: ${jobDetails.name || 'Not specified'}
Job seeker's key skills: ${jobDetails.skills || 'Not specified'}
Job seeker's years of experience: ${jobDetails.experience || 'Not specified'}

Please write the complete cover letter now, following the guidelines provided earlier.
  `;

  const result = await chatSession.sendMessage(prompt);
  let coverLetter = result.response.text();
  
  // Post-processing to remove any remaining markdown or unwanted formatting
  coverLetter = coverLetter
    .replace(/^#+\s/gm, '')  // Remove any remaining markdown headers
    .replace(/\*\*/g, '')    // Remove bold markdown
    .replace(/\*/g, '')      // Remove italic markdown
    .replace(/`/g, '')       // Remove code ticks
    .replace(/^\s*[-*]\s/gm, '') // Remove list markers
    .replace(/\n{3,}/g, '  ')  // Replace multiple newlines with double newlines
    .trim();  // Remove leading/trailing whitespace

  return coverLetter;
 
}