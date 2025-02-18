import { useInView } from 'react-intersection-observer';
import './App.css';
import About from './Sections/About';
import ProjectsSection from './Sections/ProjectsSection';
import SideProjectsSection from './Sections/SideProjectsSection';
import Worked from './Sections/Worked';

function App() {
  const links = [
    { title: '🤔 about', id: 'about' },
    { title: '🧑‍💻 experience', id: 'experience' },
    { title: '💻 participated projects', id: 'projects' },
    { title: '💪 personal projects', id: 'personal-projects' }
  ];

  const socials = [
    { title: 'Github', link: 'https://github.com/TranDuc41', icon: './github-dark.svg' },
    { title: 'Linkedin', link: 'https://www.linkedin.com/in/tyduc/', icon: './linkedin.svg' },
    { title: 'Gmail', link: 'mailto:td07197@gmail.com', icon: './gmail.svg' },
  ];

  // Sử dụng useInView cho từng section
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: experienceRef, inView: experienceInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: personalProjectsRef, inView: personalProjectsInView } = useInView();

  const menuItems = [
    { id: 'about', inView: aboutInView },
    { id: 'experience', inView: experienceInView },
    { id: 'projects', inView: projectsInView },
    { id: 'personal-projects', inView: personalProjectsInView }
  ];

  return (
    <main className='relative bg-pane'>
      <div className='pane-html'>
        <div className='min-h-screen max-w-screen-2xl w-full flex flex-col mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24 py-12 md:py-20 lg:py-0'>
          <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='lg:col-span-5 p-4 lg:h-screen lg:sticky top-0 flex flex-col gap-4 lg:w-11/12 lg:pt-12 lg:pb-6 overflow-y-auto scroll-smooth-thin'>
              <div className='flex flex-col gap-4 mb-3'>
                <p className='text-primary-400'>Hi, I am</p>
              </div>
              <div>
                <h2 className='text-4xl font-bold'>Tran Y Duc</h2>
              </div>
              <p className='text-xl font-light'>
                <span className='text-primary-400'>Backend </span>
                Developer
              </p>
              <p className='text-base font-light'>Laravel, PHP, React, Node</p>
              <p className='opacity-80 text-base font-light'>Backend developer with 1+ years of experience in building scalable web applications using Laravel and React. Skilled in UX optimization and working with cross-functional teams.</p>
              <div className='flex flex-col gap-3 mb-3'>
                {links.map((link, index) => (
                  <p
                    key={index}
                    className={`text-base opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100 ${menuItems[index].inView ? 'opacity-100 text-primary-400' : ''}`}
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className='text-primary-400'>{index + 1 < 10 ? '0' + (index + 1) : index}. </span>
                    {link.title}
                  </p>
                ))}
              </div>
              <div>
                <a href="./TranYDuc-CV_PHP_Developer.pdf" target='_blank' className='relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white focus:ring-0 focus:outline-none shadow-lg shadow-green-500/50'>
                  <span className='font-normal relative px-6 py-3 text-white'>My Resume</span>
                </a>
              </div>
              <div className='flex flex-wrap gap-2'>
                {socials.map((social, index) => (
                  <a key={index} href={social.link} title={social.title} target='_blank'
                    className='p-1.5 rounded-full w-10 h-10 bg-gray-500/20 hover:bg-gray-500/40 flex items-center justify-center duration-200 hover:-translate-y-1'>
                    <img src={social.icon} alt={social.title} width={20} />
                  </a>
                ))}
              </div>
              <div>
                <span className='text-white/50'>Designed & Developed by Tran Duc</span>
              </div>
            </div>
            <div className='lg:col-span-7 py-20 max-lg:pb-20 overflow-y-auto'>
              <div ref={aboutRef} id="about"><About /></div>
              <div ref={experienceRef} id="experience"><Worked /></div>
              <div ref={projectsRef} id="projects"><ProjectsSection /></div>
              <div ref={personalProjectsRef} id="personal-projects"><SideProjectsSection /></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
