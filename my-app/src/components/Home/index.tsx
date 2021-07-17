import HomeCanvas from "./HomeCanvas";
import "./Home.css";

const Home = () => {
    return (
        <div className="HomeDivParent">
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
{/*
            <div className="ProjectPageContainer">
                <div className="ProjectContainer">
                    <div className="ProjectHolder">
                        <div className="ProjectTitle">Planetary Empires</div>
                        <div className="ProjectLinkCont">
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
                    </div>
                    <div className="ProjectHolder">
                        <div className="ProjectTitle">SoundLoud</div>
                    </div>
                    <div className="ProjectHolder"></div>
                    <div className="ProjectHolder"></div>
                </div>
            </div> */}

            <HomeCanvas />
        </div>
    );
};

export default Home;
