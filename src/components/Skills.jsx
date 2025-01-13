import React from 'react';
import { CodeBracketIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Skills() {
  const skills = [
    {
      icon: CodeBracketIcon,
      title: "Backend Development",
      description: "Expert in Node.js and GoLang, building high-performance server-side applications and RESTful APIs."
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description: "Experienced in GCP, Kubernetes, Docker, and implementing CI/CD pipelines using Jenkins and Spinnaker."
    },
    {
      icon: CpuChipIcon,
      title: "Microservices",
      description: "Skilled in designing and maintaining microservices architecture for scalable applications."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <skill.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}