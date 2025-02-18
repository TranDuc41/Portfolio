const projects = [
    {
        title: 'Movie App',
        url: 'https://tranduc-movie.vercel.app/',
        git_url: 'https://github.com/TranDuc41/movie-nextjs',
        short_desc: 'An online movie streaming website using a third-party API, built with Next.js and some libraries for the frontend.',
        goal: 'Create a website that is compatible across multiple devices and optimized for speed and user experience.',
        list_features: [
            {
                desc: 'Deployed with Vercel: Hosted on Vercel and automatic updates with every Git commit.'
            },
            {
                desc: 'Responsive Design: Optimized for all screen sizes with Tailwind CSS, providing an engaging experience on both desktop and mobile.'
            }
        ]
    },
    {
        title: 'Personal Portfolio Website',
        url: '/',
        git_url: 'https://github.com/TranDuc41/Portfolio',
        short_desc: 'A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills. Designed to deliver a smooth user experience on both desktop and mobile devices.',
        goal: 'Create a responsive and visually appealing website to showcase my projects, skills, and experience.',
        list_features: [
            {
                desc: 'Deployed with Vercel: Hosted on Vercel and automatic updates with every Git commit.'
            },
            {
                desc: 'Responsive Design: Optimized for all screen sizes with Tailwind CSS, providing an engaging experience on both desktop and mobile.'
            }
        ]
    }
]

const SideProjectsSection = () => {
    return (
        <div className='mb-10'>
            <div>
                <h3 className="p-6">
                    <span className='text-primary-500 font-normal'>04. </span>
                    Side Projects I’ve Built
                </h3>
                <div>
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-5 md:p-6 li-glass">
                            <div className="flex items-center gap-6">
                                <a href={project.url} target="_blank" className="flex gap-2 items-center text-xl leading-7 font-medium text-primary-500 w-auto">
                                    <h4>{project.title}</h4>
                                    <img src="./icons8-link-48.png" alt="icon link" className="w-7" />
                                </a>
                                <a href={project.git_url} target="_blank">
                                    <img src="./github-dark.svg" alt="github icon" className="w-8" />
                                </a>
                            </div>
                            <div>
                                <span>{project.short_desc}</span>
                            </div>
                            <ul className="list-dsc flex flex-col gap-3 text-white/60">
                                <span>Main Features:</span>
                                {project.list_features.map((features, index) => (
                                    <li key={index} className="ml-5">{features.desc}</li>
                                ))}
                            </ul>
                            <div>
                                <span>Goal: {project.goal}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideProjectsSection