import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
    const [home, setHome] = useState<boolean | null>(null);
    const [about, setAbout] = useState<boolean | null>(null);
    const [projects, setProjects] = useState<boolean | null>(null);
    const [lastPage, setLastPage] = useState<string>("");
    const [currentDownButton, setCurrentDownButton] =
        useState<HTMLButtonElement | null>(null);
    const [currentUpButton, setCurrentUpButton] =
        useState<HTMLButtonElement | null>(null);

    const detectMouseWheelDirection = useCallback((e: WheelEvent) => {
        let delta: number | null = null;
        let direction: string | boolean = false;

        if (e.deltaY) {
            delta = e.deltaY / 60;
        } else if (e.detail) {
            delta = -e.detail / 2;
        }
        if (delta !== null) {
            direction = delta < 0 ? "up" : "down";
        }

        return direction;
    }, []);

    const scrollHandler = useCallback(
        (e: WheelEvent) => {
            let dir = detectMouseWheelDirection(e);
            if (dir === "down") {
                if (currentDownButton) {
                    currentDownButton.click();
                }
            } else if (dir === "up") {
                if (currentUpButton) {
                    currentUpButton.click();
                }
            }
        },
        [detectMouseWheelDirection, currentDownButton, currentUpButton]
    );

    useEffect(() => {
        window.addEventListener("wheel", scrollHandler);

        return () => window.removeEventListener("wheel", scrollHandler);
    }, [scrollHandler]);

    return (
        <div className="PageContent">
            <Home
                home={home}
                setHome={setHome}
                setAbout={setAbout}
                setLastPage={setLastPage}
                setCurrentDownButton={setCurrentDownButton}
            />
            <AboutMe
                about={about}
                setAbout={setAbout}
                setHome={setHome}
                lastPage={lastPage}
                setLastPage={setLastPage}
                projects={projects}
                setProjects={setProjects}
                setCurrentDownButton={setCurrentDownButton}
                setCurrentUpButton={setCurrentUpButton}
            />
            <Projects
                projects={projects}
                setProjects={setProjects}
                setLastPage={setLastPage}
                setAbout={setAbout}
                setCurrentDownButton={setCurrentDownButton}
                setCurrentUpButton={setCurrentUpButton}
            />
        </div>
    );
}

export default App;
