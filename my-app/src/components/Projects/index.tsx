import { Dispatch, SetStateAction } from "react";
import "./Projects.css";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
}

const Projects = ({ projects, setProjects }: props) => {
    console.log(projects);

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
            ></div>
            {projects && (
                <div className={"UpButtonCont about"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(false);
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
