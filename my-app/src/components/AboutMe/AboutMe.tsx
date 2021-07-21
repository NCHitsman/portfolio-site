import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";

interface props {
    about: boolean;
    setAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutMe = ({ about, setAbout }: props) => {
    return (
        <>
            <div className={about ? 'AboutMeParentCont active' : "AboutMeParentCont"}></div>
        </>
    );
};

export default AboutMe;
