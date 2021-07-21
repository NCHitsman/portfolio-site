import { useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
    const [home, setHome] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean>(false);
    const [projects, setProjects] = useState<boolean>(false);

    return (
        <div className="PageContent">
            <Home home={home} setHome={setHome} setAbout={setAbout} />
            <AboutMe about={about} setAbout={setAbout} />
            <Projects projects={projects} setProjects={setProjects} />
        </div>
    );
}

export default App;
