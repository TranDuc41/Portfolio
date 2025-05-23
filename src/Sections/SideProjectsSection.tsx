const projects = [
    {
        title: 'Tea & Coffee Website',
        url: 'https://tea-coffee-ui-01.ducdev.id.vn',
        git_url: '',
        short_desc: "The website interface helps the store showcase its available beverages, update promotions and news, making it easier for users to access. It also serves as the store's official website to build credibility and promote the brand.",
        goal: "To create a modern, responsive, and easy-to-manage web interface for a beverage store, aiming to improve online presence, attract customers, and enhance brand trust.",
        list_features: [
            {
                "desc": "Deployed with VPS Ubuntu: Hosted on VPS and automatic updates with every Git commit."
            },
            {
                "desc": "Responsive Design: Optimized for all screen sizes with Tailwind CSS, providing an engaging experience on both desktop and mobile."
            },
            {
                "desc": "Dynamic Content: Easily update drinks, promotions, and news without changing the code."
            },
            {
                "desc": "SEO Friendly: Structured layout and meta tags to enhance search engine visibility."
            },
            {
                "desc": "Performance Optimized: Fast loading speed with image optimization and caching strategies."
            }
        ]
    },
    {
        title: 'Ecommerce App',
        url: 'https://shoes-shop.ducdev.id.vn',
        git_url: 'https://github.com/TranDuc41/shoes_shop',
        short_desc: 'A shoe-selling website built with Laravel, Inertia, and React. I created this website to learn and apply new knowledge. Due to limited time, the website is still under development, and I will update it whenever I have free time.',
        goal: 'Create a website that is compatible across multiple devices and optimized for speed and user experience.',
        list_features: [
            {
                desc: 'Deployed on hosting with automatic updates on every Git commit.'
            },
            {
                desc: 'Responsive Design: Optimized for all screen sizes with Tailwind CSS, providing an engaging experience on both desktop and mobile.'
            },
            {
                desc: 'Send verification emails.'
            },
            {
                desc: 'Integrate VnPay payment.'
            },
            {
                desc: 'Use Filament for the admin panel.'
            },
            {
                desc: 'Dynamically assign admin roles for different components.'
            },
            {
                desc: 'Manage the remaining stock quantity.'
            }
        ]
    },
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
                <h3 className="pb-6 md:py-3 md:p-6">
                    <span className='text-primary-500 font-normal'>04. </span>
                    Side Projects I’ve Built
                </h3>
                <div className="flex flex-col gap-6 md:gap-2">
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
                            <ul className="list-dsc flex flex-col gap-3 text-black/80 dark:text-white/60">
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