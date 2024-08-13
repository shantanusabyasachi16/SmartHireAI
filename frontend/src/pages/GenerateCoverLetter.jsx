import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // Adjust the path as necessary

const GenerateCoverLetter = () => {
  const [userInput, setUserInput] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const generateCoverLetter = () => {
    // Simulate cover letter generation (replace with actual AI logic if available)
    const generatedLetter = `
      Dear Hiring Manager,

      I am excited to apply for the position at your company. My name is [Your Name], and I have experience in [relevant field or skill].

      ${userInput}

      Thank you for considering my application.

      Sincerely,
      [Your Name]
    `;
    setCoverLetter(generatedLetter);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter).then(() => {
      alert("Cover letter copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h1 className="font-bold text-2xl mb-4">Generate Cover Letter</h1>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
        rows="6"
        placeholder="Enter details about yourself here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        onClick={generateCoverLetter}
        className="mt-4 bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600 text-white transition-all duration-300"
      >
        Generate Cover Letter
      </Button>

      {coverLetter && (
        <div className="mt-6">
          <h2 className="font-bold text-xl mb-2">Generated Cover Letter:</h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
            rows="10"
            readOnly
            value={coverLetter}
          />
          <Button
            onClick={copyToClipboard}
            className="mt-4 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white transition-all duration-300"
          >
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
};

export default GenerateCoverLetter;
