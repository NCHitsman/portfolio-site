import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";
import AboutMeContent from "./AboutMeContent";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setHome: Dispatch<SetStateAction<boolean | null>>;
    lastPage: string;
    setLastPage: Dispatch<SetStateAction<string>>;
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setCurrentDownButton: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
    setCurrentUpButton: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

const AboutMe = ({
    about,
    setAbout,
    setHome,
    lastPage,
    setLastPage,
    projects,
    setProjects,
    setCurrentDownButton,
    setCurrentUpButton,
}: props) => {
    const [set, setSet] = useState<boolean>(false);
    const aboutDownButton = useRef<HTMLButtonElement>(null!);
    const aboutUpButton = useRef<HTMLButtonElement>(null!)

    useEffect(() => {
        setTimeout(() => {
            if (about) {
                setSet(true);
            } else {
                setSet(false);
            }
        }, 900);
    }, [about]);

    useEffect(() => {
        if (set) {
            setCurrentUpButton(aboutUpButton.current);
            setCurrentDownButton(aboutDownButton.current);
        }
    }, [set, setCurrentDownButton, setCurrentUpButton]);

    return (
        <>
            <div
                className={
                    about === null
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
                    ref={aboutUpButton}
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
            {about && !projects && (
                <div className={"DownButtonCont"}>
                    <button
                        ref={aboutDownButton}
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setProjects(true);
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
