import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
    const [home, setHome] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean | null>(null);
    const [projects, setProjects] = useState<boolean | null>(null);

    return (
        <div className="PageContent">
            <Home home={home} setHome={setHome} setAbout={setAbout} />
            <AboutMe about={about} setAbout={setAbout} setHome={setHome} setProjects={setProjects} projects={projects}/>
            <Projects projects={projects} setProjects={setProjects} />
        </div>
    );
}

export default App;
