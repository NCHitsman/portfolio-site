import { Dispatch, SetStateAction } from "react";

import "./Resume.css";
import ResumeContent from "./ResumeContent";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    projects: boolean | null;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    resume: boolean | null;
    lastPage: string;
}

const Resume = ({
    about,
    setAbout,
    setProjects,
    projects,
    setResume,
    resume,
    lastPage,
}: props) => {
    return (
        <>
            <div
                className={
                    resume == null
                        ? "ResumeParentCont"
                        : resume
                        ? lastPage === "about"
                            ? "ResumeParentCont active fromAbout"
                            : "ResumeParentCont active fromProjects"
                        : projects
                        ? "ResumeParentCont unactive projects"
                        : "ResumeParentCont unactive about"
                }
            >
                <ResumeContent />
            </div>
            {resume && !projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setResume(false);
                            setAbout(true);
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {resume && !projects && (
                <div className={"DownButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(true);
                            setResume(false);
                        }}
                    >
                        <div className="ButtonText">{">"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Resume;
