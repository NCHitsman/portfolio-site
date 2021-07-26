import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";
import AboutMeContent from "./AboutMeContent";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setHome: Dispatch<SetStateAction<boolean | null>>;
    projects: boolean | null;
    lastPage: string;
}

const AboutMe = ({
    about,
    setAbout,
    setHome,
    setProjects,
    projects,
    lastPage,
}: props) => {
    return (
        <>
            <div
                className={
                    about == null
                        ? "AboutMeParentCont"
                        : about
                        ? lastPage === "home"
                            ? "AboutMeParentCont active fromHome"
                            : "AboutMeParentCont active fromProjects"
                        : projects
                        ? "AboutMeParentCont unactive projects"
                        : "AboutMeParentCont unactive home"
                }
            >
                <AboutMeContent />
            </div>
            {about && !projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setAbout(false);
                            setHome(true);
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {about && !projects && (
                <div className={"DownButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(true);
                            setAbout(false);
                        }}
                    >
                        <div className="ButtonText">{">"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default AboutMe;
