import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ProjectPage from "./ProjectPage";
import "./Projects.css";
import planetaryEmpiresGif from '../../images/example.gif'

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ projects, setProjects, setResume, setLastPage }: props) => {

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
                <ProjectPage
                    name={'PlanetaryEmpires'}
                    link1={'https://github.com/NCHitsman/Planetary-Empires'}
                    link2={'https://planetary-empires.herokuapp.com/'}
                    about={'About Text About Text About Text About Text About Text About Text About Text About Text About Text'}
                    tech={['1', '2', '3', '4', '5', '6']}
                    index={0}
                    gif={planetaryEmpiresGif}
                />
            </div>
            {projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(false);
                            setResume(true);
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
