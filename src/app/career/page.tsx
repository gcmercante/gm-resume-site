'use client';

import { verboseDate } from "@/utils/date-helpers";
import { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Galp',
        startDate: '01-2025',
        endDate: '09-2026',
        description: `
            • Developed a core email and SMS delivery platform using Node.js with TypeScript and Kafka, centralizing all company email and SMS traffic, reducing operational expenses by replacing unnecessary third-party tools with internal solutions.\n
            • Developed and contributed to the deployment of multiple APIs supporting a wide range of business functionalities, including a QR code generation API that reduced the need for lengthy paper invoices while enabling customers to access their invoices digitally.\n
            • Contributed to the modernization and replacement of a legacy product management platform developed by external teams, delivering a faster and more reliable in-house solution that reduced bugs, improved performance, and simplified ongoing maintenance and evolution.\n
            • Led the development of an internal back-office platform for email and SMS services, significantly improving observability and reducing response times for service-related issues and support tickets. Defined the architecture and key technical decisions while mentoring an intern developer, supporting both successful delivery and technical growth.
        `,
        stack: ['Nest.js (TypeScript)', 'MongoDB', 'Kafka', 'AWS', 'Next.js', 'MySQL', 'Redis', 'Jest', 'Eslint', 'Agile']
    },
    {
        title: 'Software Engineer',
        company: 'bolttech',
        startDate: '11-2022',
        endDate: '12-2024',
        description: `
            • Development and maintenance of integrations with external partners using RESTful APIs and sFTP protocols, ensuring efficiency and reliability in data exchange.\n
            • Creation and maintenance of orchestration flows to coordinate multiple services and systems, ensuring aligned and well-structured processes.\n 
            • Migration of legacy services and integrations to new solutions, ensuring system continuity and modernization.\n
            • Writing unit tests to validate the functionality and consistency of integrations with partner systems.\n
            • Ensuring the quality of integrations and flows, focusing on scalability and alignment with partner and business needs.
        `,
        stack: ['Nest.js (TypeScript)', 'Java (Kogito)', 'MongoDB', 'RabbitMQ', 'Docker', 'Jest', 'Eslint', 'Agile']
    },
    {
        title: 'Backend Engineer',
        company: 'pontaltech',
        startDate: '01-2019',
        endDate: '11-2022',
        description: `
            • Development and maintenance of PHP scripts for reading and processing files in various formats, ensuring efficient integration with internal and external systems.\n
            • Creation and maintenance of responsive and optimized landing pages for marketing campaigns and lead generation.\n 
            • Migration of legacy PHP services to an event-driven architecture using Node.js, improving scalability and performance. \n
            • Implementation of custom logic for generating detailed reports, meeting both client and internal business needs.\n
            • Collaboration with multidisciplinary teams to optimize workflows, implement best development practices, and continuously improve code structure.
        `,
        stack: ['Node.js (TypeScript/JavaScript)', 'PHP 7', 'RabbitMQ', 'MongoDB', 'MySQL', 'Redis', 'Angular.js', 'HTML', 'CSS', 'AWS (S3, SQS, EC2)', 'Jest', 'Eslint', 'Agile']
    }
]

export default function Career() {
    const sortedExperiences = experiences.sort((a, b) => {
        const [aMonth, aYear] = a.startDate.split('-').map(Number);
        const [bMonth, bYear] = b.startDate.split('-').map(Number);
    
        if (aYear !== bYear) {
            return bYear - aYear;
        }

        return bMonth - aMonth;
    });
    
    const [selectedCompany, setSelectedCompany] = useState(sortedExperiences[0].company);

    function handleExperienceClick(company: string) {
        setSelectedCompany(company);
    }

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col md:p-4 gap-8 text-text max-w-[960px] w-full">
                <h1 className="text-title text-xl font-bold leading-tight">My Experiences</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <div>
                        <div className="flex flex-row overflow-x-auto md:flex-col border-b-[1px] border-b-yellow md:border-b-0 md:border-l-[1px] md:border-l-yellow">
                            {
                                sortedExperiences.map(({ company }) => (
                                    <div 
                                        key={company} 
                                        onClick={() => handleExperienceClick(company)} 
                                        className={`p-4 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 border-transparent hover:border-yellow ${selectedCompany === company ? 'border-yellow' : ''}`}>
                                        <h2 className="text-base">{company}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {
                            sortedExperiences.map(({ title, company, startDate, endDate, description, stack }, index) => (
                                <div key={company + index} className={`flex flex-col md:flex-row gap-8 ${selectedCompany !== company ? 'hidden' : ''}`}>
                                    <div>
                                        <h2 className="text-base font-bold">{title} @ {company}</h2>
                                        <p className="text-sm mb-5">{verboseDate(startDate)} - {verboseDate(endDate)}</p>
                                        <div>
                                            {
                                                description.split('\n').map((line, index) => (
                                                    <p key={line + index} className="text-sm md:text-justify">{line}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold">Stack</h2>
                                        <div className="flex flex-col gap-1">
                                            {
                                                stack.map((tech, index) => (
                                                    <p key={tech + index} className="flex flex-row gap-2 items-center text-sm whitespace-nowrap">
                                                        <IoCheckmarkCircleOutline />
                                                        {tech}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}