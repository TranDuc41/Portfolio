const projects = [
    {
        title: 'Phuc Loc Phat Fruits Ecommerce',
        url: 'https://phuclocphatfruits.com/',
        img_url: './screencapture-phuclocphatfruits.png',
        short_desc: 'Build a website to sell fruit and introduce the company using Wordpress.',
        team_size: '1 member',
        list_dsc: [
            {
                desc: 'Website interface design'
            },
            {
                desc: 'Website development and speed optimization'
            },
            {
                desc: 'Website SEO'
            },
            {
                desc: 'Update and bug fixing'
            }
        ]
    },
    {
        title: 'LadingPage Ood',
        url: 'https://ood.vn/',
        img_url: './screencapture-ood-vn.png',
        short_desc: 'Build LadingPage Ood with WordPress drag and drop based on Figma design.',
        team_size: '1 member',
        list_dsc: [
            {
                desc: 'Website interface design'
            },
            {
                desc: 'Website development and speed optimization'
            },
            {
                desc: 'Website SEO'
            },
            {
                desc: 'Update and bug fixing'
            }
        ]
    }
]

const ProjectsSection = () => {
    return (
        <div className='mb-10'>
            <div>
                <h3 className="pb-6 md:py-3 md:p-6">
                    <span className='text-primary-500 font-normal'>03. </span>
                    Projects I've participated in
                    <span className='text-white/30'> (some projects cannot be disclosed due to privacy policies)</span>
                </h3>
                <ol>
                    {projects.map((project, index) => (
                        <li key={index} className="mb-10 md:mb-2">
                            <div className='grid grid-cols-12 md:p-6 li-glass'>
                                <div className='col-span-12 md:col-span-3 max-h-96 overflow-hidden'>
                                    <img src={project.img_url} alt={project.title} className="w-full" />
                                </div>
                                <div className='col-span-12 mt-4 md:col-span-9 md:ml-4'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='mb-2 flex gap-3'>
                                            <a href={project.url} target='_blank' className="text-xl leading-7 font-medium text-primary-500 w-auto">{project.title}</a>
                                            <img src="./icons8-link-48.png" alt="icon link" className="w-6 fill-white" />
                                        </div>
                                        <span>{project.short_desc}</span>
                                        <ul className="flex flex-col gap-3 list-dsc text-black/80 dark:text-white/60">
                                            <span>Team Composition:</span>
                                            <li className="ml-5">{project.team_size}</li>
                                        </ul>
                                        <ul className='flex flex-col gap-3 list-dsc text-black/80 dark:text-white/60'>
                                            <span>My Responsibility:</span>
                                            {project.list_dsc.map((item, index) => (
                                                <li key={index} className="ml-5">{item.desc}</li>
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

export default ProjectsSection