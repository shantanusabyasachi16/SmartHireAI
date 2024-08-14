import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"; 

const GenerateCoverLetter = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [error, setError] = useState('');

  const generateCoverLetter = async () => {
    if (!jobTitle || !companyName || !name || !skills || !experience) {
      setError('All fields are required to generate the cover letter.');
      return;
    }

    try {
      const prompt = `job title: ${jobTitle}, company name: ${companyName}, your name: ${name}, your key skills: ${skills}, years of experience: ${experience}`;

      const response = await axios.post('http://localhost:8000/api/ai-generation', { prompt });
      setCoverLetter(response.data.coverLetter);
      setError('');
    } catch (error) {
      console.error('Error generating cover letter:', error);
      setError('Failed to generate cover letter.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h1 className="font-bold text-2xl mb-4">Generate Cover Letter</h1>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
          placeholder="Key Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-100"
          placeholder="Years of Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

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
            onClick={() => navigator.clipboard.writeText(coverLetter)}
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
