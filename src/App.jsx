import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome/Welcome';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';

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
        <Welcome/>
        <Works/>
        <Projects/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  )
}

export default App
