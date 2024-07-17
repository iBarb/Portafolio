import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome/Welcome';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';
import LinkedIn from './Icons/LinkedIn';
import Github from './Icons/Github';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  const [CurrentSection, setCurrentSection] = useState(null)

  useEffect(() => {
    const onSectionChange = () => {
      const newHash = window.location.hash;
      if (newHash !== CurrentSection) {
        setCurrentSection(newHash);
      }
    };

    window.addEventListener('hashchange', onSectionChange);

    return () => {
      window.removeEventListener('hashchange', onSectionChange);
    };
  }, []);



  return (
    <>
      <Navbar CurrentSection={CurrentSection} setCurrentSection={setCurrentSection} />
      <main>
        <Welcome setCurrentSection={setCurrentSection} />
        <Works setCurrentSection={setCurrentSection} />
        <Projects setCurrentSection={setCurrentSection} />
        <AboutMe setCurrentSection={setCurrentSection}/>
      </main>
      <footer className='footer-page'>
        <div>
          <a href="https://www.linkedin.com/in/bruno-paolo-barbaran-quiroz-606478195/" target="_blank" rel="noopener noreferrer" role="link"><LinkedIn width={20} height={20}/> Linkedin</a> |
          <a href="https://github.com/iBarb" target="_blank" rel="noopener noreferrer" role="link"><Github width={20} height={20}/> Github</a>
        </div>
      </footer>
    </>
  )
}

export default App
