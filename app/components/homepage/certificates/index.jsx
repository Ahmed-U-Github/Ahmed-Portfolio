// @flow strict
import React from 'react';

function Certificates() {
  const certificates = [
    {
      id: 1,
      file: '/certifications/aws-certified-security-specialty.png',
      display: 'AWS CERTIFIED SECURITY SPECIALTY',
      credlyUrl: 'https://www.credly.com/badges/c7d6313a-7a94-4ec9-801a-fadb8419187d/public_url'
    },
    {
      id: 2,
      file: '/certifications/cka-certified-kubernetes-administrator.png',
      display: 'CERTIFIED KUBERNETES ADMINISTRATOR',
      credlyUrl: 'https://www.credly.com/badges/4f971a76-8429-48a2-94c4-9f4d9248b1df/public_url'
    },
    {
      id: 3,
      file: '/certifications/aws-partner-technical-accredited.png',
      display: 'AWS PARTNER TECHNICAL ACCREDITED',
      credlyUrl: 'https://www.credly.com/badges/12d09d0a-99f3-44b8-94c9-d29ce34f60b1/public_url'
    },
    {
      id: 4,
      file: '/certifications/pagerduty-foundational-practitioner-certification.png',
      display: 'PAGERDUTY FOUNDATIONAL PRACTITIONER',
      credlyUrl: 'https://www.credly.com/badges/a2f78568-05e6-4fdc-b3d5-b916b734e4ef/public_url'
    },
    {
      id: 5,
      file: '/certifications/incident-management-certification.png',
      display: 'INCIDENT MANAGEMENT CERTIFICATION',
      credlyUrl: 'https://www.credly.com/badges/3c173eae-8832-4447-b53a-1a4442f7fae0/public_url'
    },
    {
      id: 6,
      file: '/certifications/pagerduty-event-intelligence-certification.png',
      display: 'PAGERDUTY EVENT INTELLIGENCE CERTIFICATION',
      credlyUrl: 'https://www.credly.com/badges/2cecc9c8-32eb-4995-b620-5eae3ae0a1c7/public_url'
    }
  ];

  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer hover:no-underline"
          >
            <div className="bg-platinum relative overflow-hidden rounded-lg">
              <img
                src={cert.file}
                height={200}
                width={200}
                alt={cert.display}
                className="transition-all duration-300 mix-blend-multiply group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-base md:text-lg font-medium text-center text-cyan-400 max-w-[250px] opacity-90 group-hover:opacity-100">
              {cert.display}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;

