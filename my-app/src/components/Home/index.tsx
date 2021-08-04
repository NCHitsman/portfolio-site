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
    return (
        <>
            <HomeCanvas home={home} />
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
                </div>
            </div>
            {(home || home === null) && (
                <div className={"DownButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setHome(false);
                            setAbout(true);
                            setLastPage("home");
                        }}
                    >
                        <div className="ButtonText">{">"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Home;
