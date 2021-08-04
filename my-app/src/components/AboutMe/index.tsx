import { useEffect } from "react";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";
import AboutMeContent from "./AboutMeContent";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setHome: Dispatch<SetStateAction<boolean | null>>;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    resume: boolean | null;
    lastPage: string;
    setLastPage: Dispatch<SetStateAction<string>>;
    projects: boolean | null;
}

const AboutMe = ({
    about,
    setAbout,
    setHome,
    setResume,
    resume,
    lastPage,
    setLastPage,
    projects,
}: props) => {
    const [set, setSet] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            if (about) {
                setSet(true);
            } else {
                setSet(false);
            }
        }, 900);
    }, [about]);

    return (
        <>
            <div
                className={
                    about == null
                        ? "AboutMeParentCont"
                        : about
                        ? lastPage === "home"
                            ? "AboutMeParentCont active fromHome"
                            : "AboutMeParentCont active fromResume"
                        : resume || projects
                        ? "AboutMeParentCont unactive resume"
                        : "AboutMeParentCont unactive home"
                }
            >
                <AboutMeContent />
            </div>
            {about && !resume && (
                <div className={"UpButtonCont"}>
                    <button
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setAbout(false);
                                setHome(true);
                                setLastPage("about");
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
            {about && !resume && (
                <div className={"DownButtonCont"}>
                    <button
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setResume(true);
                                setAbout(false);
                                setLastPage("about");
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

export default AboutMe;
