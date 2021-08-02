import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./Projects.css";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ projects, setProjects, setAbout, setLastPage }: props) => {

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

            </div>
            {projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(false);
                            setAbout(true);
                            setLastPage("projects");
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Projects;
