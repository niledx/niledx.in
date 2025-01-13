import React from 'react';
import { BriefcaseIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Experience() {
  const experiences = [
    {
      company: "Tata Consultancy Services - Lloyds Banking Group",
      role: "Backend Developer",
      period: "May 2023 - Current",
      achievements: [
        "Designed and implemented high-performance server-side applications using GoLang",
        "Spearheaded deployments on GKE and Docker, improving scalability",
        "Built CI/CD pipelines reducing deployment time by 30%",
        "Developed microservices architecture enhancing efficiency by 15%"
      ]
    },
    {
      company: "Tata Consultancy Services - Bank of America",
      role: "Software Engineer",
      period: "July 2021 - April 2023",
      achievements: [
        "Engineered data processing pipelines reducing processing times by 20%",
        "Developed RESTful APIs for banking data integration",
        "Optimized PostgreSQL databases for improved performance",
        "Deployed applications on GCP with Docker and Kubernetes"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                {index === 0 ? (
                  <BriefcaseIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                ) : (
                  <BuildingOfficeIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                )}
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600 mb-4">{exp.company} | {exp.period}</p>
                  <ul className="space-y-2 text-gray-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">·</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}