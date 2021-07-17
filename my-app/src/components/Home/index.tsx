import HomeCanvas from "./HomeCanvas";
import "./Home.css";

const Home = () => {
    return (
        <div className="HomeDivParent">
            {/* <div className="HomeInfoCont">
                <div className="HomeName">Noah Carmichael-Hitsman</div>
                <div className='HomeLinkCont'>
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
            </div> */}
            <HomeCanvas />
        </div>
    );
};

export default Home;
