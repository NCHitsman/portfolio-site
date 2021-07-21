import HomeCanvas from "./HomeCanvas";
import "./Home.css";
import { Dispatch, SetStateAction } from "react";

interface props {
    home: boolean;
    setHome: Dispatch<SetStateAction<boolean>>;
    setAbout: Dispatch<SetStateAction<boolean>>
}

const Home = ({ home, setHome, setAbout }: props) => {
    return (
        <div className="HomeDivParent">
            <div className={"HomeInfoCont"}>
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

            <HomeCanvas home={home} />

            <div className={"ButtonCont"}>
                <button
                    className="DownButton"
                    onClick={() => {
                        setHome(false)
                        setAbout(true)
                    }}
                >
                    <div className="DownButtonText">{'>'}</div>
                </button>
            </div>
        </div>
    );
};

export default Home;
