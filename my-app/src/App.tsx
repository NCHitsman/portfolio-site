import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
    const [home, setHome] = useState<boolean | null>(null);
    const [about, setAbout] = useState<boolean | null>(null);
    const [projects, setProjects] = useState<boolean | null>(null);
    const [lastPage, setLastPage] = useState<string>('');

    return (
        <div className="PageContent">
            <Home home={home} setHome={setHome} setAbout={setAbout} setLastPage={setLastPage}/>
            <AboutMe about={about} setAbout={setAbout} setHome={setHome} setProjects={setProjects} projects={projects} lastPage={lastPage}/>
            <Projects projects={projects} setProjects={setProjects} setAbout={setAbout} setLastPage={setLastPage}/>
        </div>
    );
}

export default App;
