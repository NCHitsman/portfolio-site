import image from "../../images/hitsman.jpg";

const AboutMeContent = () => {
    return (
        <div className="AboutMeContentParnetCont">
            <div className="AboutMeTitle">About Me</div>

            <div className="AboutMeTextPictCont">
                <div className="AboutMeText">
                    I was led to Software Engineering by a desire to be
                    challenged and find solutions to complex problems. Always
                    striving to make my solutions scalable, efficient, and
                    progressive, I include the most advanced and
                    breaking-edge technology in my projects. I am proud to
                    know that I bring interesting ideas with efficient standards
                    to any team I join.
                    <br></br>
                    <br></br>I decided to further my education by attending App
                    Academy’s 24-week, 1000+ hour Software Engineering course.
                    During this intensive program I honed my expertise in Typescript, React, Redux, CSS,
                    Python, C#, alongside many other industry relevant
                    technologies. Given my strong technical experience, I am
                    confident in my ability to contribute from day one as a
                    Full-Stack Developer on any project.
                </div>
                    <img
                        className="SelfImage"
                        src={image}
                        alt="Noah Carmichael-Hitsman"
                    />
            </div>
        </div>
    );
};

export default AboutMeContent;
