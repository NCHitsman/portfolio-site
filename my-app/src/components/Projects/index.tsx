import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ProjectPage from "./ProjectPage";
import "./Projects.css";
import ProjectsArray from "../../ProjectsArray";
import { useEffect } from "react";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
}

const Projects = ({ projects, setProjects, setResume, setLastPage, setAbout }: props) => {
    const [projectIndex, setProjectIndex] = useState<number | null>(null);
    const [lastProjectIndex, setLastProjectIndex] = useState<number | null>(0);
    const max = ProjectsArray.length - 1;

    const [set, setSet] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            if (projects) {
                setSet(true);
            } else {
                setSet(false);
            }
        }, 900);
    }, [projects, projectIndex]);

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
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setProjects(false);
                                setAbout(true);
                                setLastPage("projects");
                                setSet(false)
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
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                if (projectIndex !== null) {
                                    setLastProjectIndex(projectIndex);
                                    setProjectIndex(projectIndex - 1);
                                }
                                setSet(false)
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
                                setSet(false)
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
