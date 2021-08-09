import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
    const [home, setHome] = useState<boolean | null>(null);
    const [about, setAbout] = useState<boolean | null>(null);
    const [resume, setResume] = useState<boolean | null>(null);
    const [projects, setProjects] = useState<boolean | null>(null);
    const [lastPage, setLastPage] = useState<string>("");

    return (
        <div className="PageContent">
            <Home
                home={home}
                setHome={setHome}
                setAbout={setAbout}
                setLastPage={setLastPage}
            />
            <AboutMe
                about={about}
                setAbout={setAbout}
                setHome={setHome}
                setResume={setResume}
                resume={resume}
                lastPage={lastPage}
                setLastPage={setLastPage}
                projects={projects}
                setProjects={setProjects}
            />
            <Resume
                about={about}
                setAbout={setAbout}
                setProjects={setProjects}
                projects={projects}
                setResume={setResume}
                resume={resume}
                lastPage={lastPage}
            />
            <Projects
                projects={projects}
                setProjects={setProjects}
                setResume={setResume}
                setLastPage={setLastPage}
                setAbout={setAbout}
            />
        </div>
    );
}

export default App;
