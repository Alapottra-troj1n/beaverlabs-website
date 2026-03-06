import Image from 'next/image';
import React from 'react';

const workingPrinciple = [
    {
        icon: "/images/arrow.png",
        title: "Launch",
        includes: [
            "Deployments",
            "Handoff and Support"
        ]
    },
    {
        icon: "/images/rounded-point.png",
        title: "Development",
        includes: [
            "Agile Sprint",
            "Regular Update"
        ]
    },
    {
        icon: "/images/leaf.png",
        title: "Design",
        includes: [
            "UI/UX wireframes",
            "User flows"
        ]
    },
    {
        icon: "/images/line-md_search (2).png",
        title: "Discovery",
        includes: [
            "Understand Requirements",
            "Define project scope"
        ]
    },

]

const How_we_work = () => {

    return (
        <div className='py-20'>
            <div className='text-white text-center mb-10'>
                <h2>How we work</h2>
                <p>From concept to launch-simple, transparent and efficient</p>
            </div>

            {/* Data will be here */}
            <div className='flex items-center justify-between gap-10  '>
                {workingPrinciple.map((item, index) =>
                    <div key={index} className='text-white relative pr-6'>
                        {/* Small right border */}
                        {index !== workingPrinciple.length - 1 && (
                            <span className="absolute right-0 top-1/2 h-12 w-0.5 -translate-y-1/2 bg-white" />
                        )}
                        <Image src={item.icon} alt={item.title} height={50} width={50} />
                        <h2>{item.title}</h2>
                        <ul className="list-disc pl-5">
                            {item.includes.map((inc, index) => (
                                <li key={index}>{inc}</li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        </div>
    );
};

export default How_we_work;