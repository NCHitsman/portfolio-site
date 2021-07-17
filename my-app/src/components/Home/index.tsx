import HomeCanvas from "./HomeCanvas";
import "./Home.css";
import { useState } from "react";

const Home = () => {
    const [down, setDown] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);

    return (
        <div className="HomeDivParent">
            {show ? (
                <div className="HomeInfoCont">
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
            ) : (
                <div className="ProjectPageContainer">
                    <div className="ProjectContainer">
                        <div className="ProjectHolder">
                            <div className="ProjectTitle">
                                Planetary Empires
                            </div>
                            <div
                                className="ProjectLink"
                                onClick={() => {
                                    window.open(
                                        "https://planetary-empires.herokuapp.com/"
                                    );
                                }}
                            >
                                Livesite
                            </div>
                            <div
                                className="ProjectLink"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/NCHitsman/Planetary-Empires"
                                    );
                                }}
                            >
                                Github
                            </div>
                        </div>
                        <div className="ProjectHolder">
                            <div className="ProjectTitle">SoundLoud</div>
                        </div>
                        <div className="ProjectHolder"></div>
                        <div className="ProjectHolder"></div>
                    </div>
                </div>
            )}
            <HomeCanvas down={down} />
            <div className={down ? "ButtonCont Top" : "ButtonCont Bottom"}>
                <button
                    className="DownButton"
                    onClick={() => {
                        if (down) {
                            setTimeout(() => setShow(true), 750);
                            setDown(false);
                        } else {
                            setDown(true);
                            setTimeout(() => setShow(false), 800);
                        }
                    }}
                >
                    <div className="DownButtonText">{down ? "<" : ">"}</div>
                </button>
            </div>
        </div>
    );
};

export default Home;
