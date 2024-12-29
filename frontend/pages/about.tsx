// pages/about.tsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex">
      <h1 className="mt-4 text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">
        This project was created to track racing results for the Jasper Cup, a competition made in honor of Andres' beloved cat, Jasper. The team behind this project includes:
        </p>
        <ul className="mt-4 text-lg list-disc list-inside">
        <li><strong>Ana Huerta</strong> - Designer</li>
        <li><strong>Andrew Li</strong> - DevOps</li>
        <li><strong>Miles Hilado</strong> - Lead Programmer</li>
        </ul>
        <p className="mt-4 text-xl">
        Our goal is to provide an easy-to-use platform for tracking race results, celebrating the spirit of friendly competition and honoring the memory of Jasper.
        </p>
    </div>
  );
};

export default About;
