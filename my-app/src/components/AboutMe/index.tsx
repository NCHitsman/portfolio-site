import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setHome: Dispatch<SetStateAction<boolean>>;
    projects: boolean | null
}

const AboutMe = ({ about, setAbout, setHome, setProjects, projects }: props) => {
    return (
        <>
            <div
                className={
                    about == null
                        ? "AboutMeParentCont"
                        : about
                        ? "AboutMeParentCont active"
                        : "AboutMeParentCont unactive"
                }
            >
                
            </div>
            {about && !projects && (
                <div className={"UpButtonCont about"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setHome(true);
                            setAbout(false);
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {about && !projects && (
                <div className={"DownButtonCont about"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(true);
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
