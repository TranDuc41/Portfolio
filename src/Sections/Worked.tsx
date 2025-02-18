const jobs = [
    {
        id: 1,
        role: 'Full-Stack Developer',
        company: 'Freelancer',
        url: '',
        duration: 'Aug 2024 - Now',
        description: '',
        list_dsc: [
            {
                description: 'Designed and developed custom websites tailored to client needs using React.js, Next.js, WordPress, and PHP.'
            },
            {
                description: 'Optimized website performance, improving loading speed, SEO, and user experience'
            },
            {
                description: 'Implemented new features to enhance functionality andscalability.'
            },
            {
                description: 'Utilized modern technologies such as Docker, Tailwind CSS, and Bootstrap to streamline development and improve UI/UX.'
            }
        ]
    },
    {
        id: 2,
        role: 'Full-Stack Developer',
        company: 'AEGONA CO.,LTD',
        url: '',
        duration: 'Mar 2024 - Jul 2024',
        description: 'Receive the request, outline the tasks to be completed, and provide time estimates for each.',
        list_dsc: [
            {
                description: 'Developed and customized websites based on client requirements using React.js, WordPress, PHP, and MySQL.'
            },
            {
                description: 'Maintained, optimized, and enhanced website performance, ensuring fast load times and seamless user experience.'
            },
            {
                description: 'Built and deployed Zalo Mini Apps, integrating interactive features to improve user engagement.'
            },
            {
                description: 'Utilized Docker for environment setup and deployment, streamlining development workflows.'
            }
        ]
    },
    {
        id: 3,
        role: 'Fullstack Developer & Admin Manager',
        company: 'PHUC LOC PHAT FRUITS COMPANY LIMITED',
        url: 'https://phuclocphatfruits.com',
        duration: 'Aug 2023 - Now',
        description: '',
        list_dsc: [
            {
                description: 'Designed and developed a dynamic e-commerce website using WordPress and MySQL, ensuring seamless user experience and high performance.'
            },
            {
                description: 'Implemented core features for end users, including order placement, user authentication (registration, login, email verification), and order management.'
            },
            {
                description: 'Built an efficient admin system for product management, inventory tracking, order processing, and automated email notifications.'
            },
            {
                description: 'Optimized website performance and security, improving speed and reliability'
            },
        ]
    }
];

const Worked = () => {
    return (
        <div className='mb-10'>
            <div>
                <h3 className='p-6'>
                    <span className='text-primary-500 font-normal'>02. </span>
                    Where I've worked
                </h3>
                <ol>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <div className='grid grid-cols-12 md:p-6 li-glass'>
                                <div className='col-span-12 md:col-span-3'>
                                    <p className="text-sm text-white/60 md:mt-1">{job.duration}</p>
                                </div>
                                <div className='col-span-12 md:col-span-9 ml-4'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-lg leading-7 font-medium mb-2 w-auto'>
                                            {job.role}, 
                                            <a href={job.url} target='_blank' className="text-primary-500"> {job.company}</a>
                                        </p>
                                        <span>{job.description}</span>
                                        <ul className='flex flex-col gap-3 list-dsc pl-5 text-white/60'>
                                            {job.list_dsc.map((item, index) => (
                                                <li key={index}>{item.description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Worked;
