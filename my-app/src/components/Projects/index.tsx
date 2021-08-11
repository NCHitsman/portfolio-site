import { useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ProjectPage from "./ProjectPage";
import "./Projects.css";
import ProjectsArray from "../../ProjectsArray";
import { useEffect } from "react";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setCurrentDownButton: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
    setCurrentUpButton: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

const Projects = ({
    projects,
    setProjects,
    setLastPage,
    setAbout,
    setCurrentDownButton,
    setCurrentUpButton,
}: props) => {
    const [projectIndex, setProjectIndex] = useState<number | null>(null);
    const [lastProjectIndex, setLastProjectIndex] = useState<number | null>(0);
    const max = ProjectsArray.length - 1;

    const [set, setSet] = useState<boolean>(false);
    const projectsUpButton = useRef<HTMLButtonElement>(null!);
    const projectsDownButton = useRef<HTMLButtonElement>(null!);
    const projectsUpButtonAbout = useRef<HTMLButtonElement>(null!);

    useEffect(() => {
        setTimeout(() => {
            if (projects) {
                setSet(true);
            } else {
                setSet(false);
            }
        }, 900);
    }, [projects, projectIndex]);

    useEffect(() => {
        if (set) {
            if (projectIndex === null || projectIndex === 0) {
                setCurrentUpButton(projectsUpButtonAbout.current);
            } else {
                setCurrentUpButton(projectsUpButton.current);
            }
            setCurrentDownButton(projectsDownButton.current);
        }
    }, [set, setCurrentDownButton, setCurrentUpButton, projectIndex]);

    return (
        <>
            <div
                className={
                    projects == null
                        ? "ProjectsParentCont"
                        : projects
                        ? "ProjectsParentCont active"
                        : "ProjectsParentCont unactive"
                }
            >
                {ProjectsArray.map((ProjectObject, i) => {
                    return (
                        <ProjectPage
                            name={ProjectObject.name}
                            link1={ProjectObject.link1}
                            link2={ProjectObject.link2}
                            about={ProjectObject.about}
                            about2={ProjectObject.about2}
                            tech={ProjectObject.tech}
                            index={i}
                            gif={ProjectObject.gif}
                            projectIndex={projectIndex}
                            lastProjectIndex={lastProjectIndex}
                            key={i}
                        />
                    );
                })}
            </div>
            {(projectIndex === null || projectIndex === 0) && projects && (
                <div className={"UpButtonCont"}>
                    <button
                        ref={projectsUpButtonAbout}
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setProjects(false);
                                setAbout(true);
                                setLastPage("projects");
                                setSet(false);
                            }
                        }}
                    >
                        <div
                            className={set ? "ButtonText" : "ButtonText unset"}
                        >
                            {"<"}
                        </div>
                    </button>
                </div>
            )}
            {projects && projectIndex !== 0 && projectIndex !== null && (
                <div className={"UpButtonCont"}>
                    <button
                        ref={projectsUpButton}
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                if (projectIndex !== null) {
                                    setLastProjectIndex(projectIndex);
                                    setProjectIndex(projectIndex - 1);
                                }
                                setSet(false);
                            }
                        }}
                    >
                        <div
                            className={set ? "ButtonText" : "ButtonText unset"}
                        >
                            {"<"}
                        </div>
                    </button>
                </div>
            )}
            {projects && projectIndex !== max && (
                <div className={"DownButtonCont"}>
                    <button
                        ref={projectsDownButton}
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                if (projectIndex === null) {
                                    setLastProjectIndex(0);
                                    setProjectIndex(1);
                                } else {
                                    setLastProjectIndex(projectIndex);
                                    setProjectIndex(projectIndex + 1);
                                }
                                setSet(false);
                            }
                        }}
                    >
                        <div
                            className={set ? "ButtonText" : "ButtonText unset"}
                        >
                            {">"}
                        </div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Projects;
