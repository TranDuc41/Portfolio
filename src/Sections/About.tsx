const About = () => {
    return (
        <div className='mb-10'>
            <div>
                <div className='flex items-center pb-6 md:py-3 md:p-6 gap-3'>
                    <span className='text-primary-500 font-normal'>01. </span>
                    <h3 className=''>
                        About me
                    </h3>
                    <div className="animate-wiggle duration-200 animate-infinite">👋</div>
                </div>
                <div className='border border-green-800 p-3 md:p-6 rounded-lg'>
                    <span className=''>Hello, my name is Duc.
                        I started as a backend developer with Laravel, then expanded into building and maintaining systems from scratch with Wordpress, React, and Node.js.</span>
                </div>
            </div>
        </div>
    )
}

export default About