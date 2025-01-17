'use client';

import { verboseDate } from "@/utils/date-helpers";
import { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const experiences = [
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
        stack: ['Nest.js', 'Kogito', 'MongoDB', 'RabbitMQ', 'Docker']
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
        stack: ['Node.js', 'PHP', 'RabbitMQ', 'MongoDB', 'MySQL', 'Redis', 'Angular.js', 'HTML', 'CSS', 'AWS']
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
        <div className="flex justify-center items-center m-64">
            <div className="flex flex-col p-4 gap-8 text-text max-w-[960px]">
                <h1 className="text-title text-xl font-bold">My Experiences</h1>
                <div className="flex flex-row gap-8">
                    <div>
                        <div className="border-l-[1px] border-l-yellow">
                            {
                                sortedExperiences.map(({ company }) => (
                                    <div 
                                        key={company} 
                                        onClick={() => handleExperienceClick(company)} 
                                        className={`p-4 cursor-pointer border-l-2 border-transparent hover:border-l-yellow ${selectedCompany === company ? 'border-l-yellow' : ''}`}>
                                        <h2 className="text-base">{company}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {
                            sortedExperiences.map(({ title, company, startDate, endDate, description, stack }, index) => (
                                <div key={company + index} className={`flex gap-8 ${selectedCompany !== company ? 'hidden' : ''}`}>
                                    <div>
                                        <h2 className="text-base font-bold">{title} @ {company}</h2>
                                        <p className="text-sm mb-5">{verboseDate(startDate)} - {verboseDate(endDate)}</p>
                                        <div>
                                            {
                                                description.split('\n').map((line, index) => (
                                                    <p key={line + index} className="text-sm text-justify">{line}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold">Stack</h2>
                                        <div className="flex flex-col gap-1">
                                            {
                                                stack.map((tech, index) => (
                                                    <p key={tech + index} className="flex flex-row gap-2 items-center text-sm">
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