import HomeCanvas from "./HomeCanvas";
import "./Home.css";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface props {
    home: boolean | null;
    setHome: Dispatch<SetStateAction<boolean | null>>;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const Home = ({ home, setHome, setAbout, setLastPage }: props) => {
    const [set, setSet] = useState<boolean>(false);

    useEffect(() => {
        if (home === null) {
            setSet(true);
        } else {
            setTimeout(() => {
                if (home) {
                    setSet(true);
                } else {
                    setSet(false);
                }
            }, 900);
        }
    }, [home]);

    return (
        <>
            <HomeCanvas />
            <div
                className={
                    home === null
                        ? "HomeContentCont"
                        : home
                        ? "HomeContentCont showCont"
                        : "HomeContentCont hideCont"
                }
            >
                <div className="HomeName">Noah Carmichael-Hitsman</div>
                <div className="HomeLinkCont">
                    <div
                        className="HomeLink"
                        onClick={() => {
                            window.open("https://github.com/NCHitsman");
                        }}
                    >
                        Github
                    </div>
                    <div
                        className="HomeLink"
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/noah-carmichael-hitsman-b024a1203/"
                            );
                        }}
                    >
                        LinkedIn
                    </div>
                    <div
                        className="HomeLink"
                        onClick={() => {
                            window.open(
                                "https://drive.google.com/file/d/1wMHuGNecNLmpFnzpA3qhdJexv6S3UUU5/view?usp=sharing"
                            );
                        }}
                    >
                        Resume
                    </div>
                </div>
            </div>
            {(home || home === null) && (
                <div className={"DownButtonCont"}>
                    <button
                        className={set ? "ChangeButton" : "ChangeButton unset"}
                        onClick={() => {
                            if (set) {
                                setHome(false);
                                setAbout(true);
                                setLastPage("home");
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

export default Home;
