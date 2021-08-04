import { useState } from "react";
import { useEffect } from "react";
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
    const [set, setSet] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            if (resume) {
                setSet(true);
            } else {
                setSet(false);
            }
        }, 1000);
    }, [resume]);
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
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setResume(false);
                                setAbout(true);
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
            {resume && !projects && (
                <div className={"DownButtonCont"}>
                    <button
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setProjects(true);
                                setResume(false);
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

export default Resume;
