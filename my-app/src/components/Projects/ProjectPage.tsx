import { useState } from "react";
import "./ProjectPage.css";
interface props {
    name: string;
    link1: string;
    link2: string;
    about: string;
    about2: string;
    tech: string[];
    index: number;
    gif: any;
    projectIndex: number | null;
    lastProjectIndex: number | null;
}

const ProjectPage = ({
    name,
    link1,
    link2,
    about,
    about2,
    tech,
    index,
    gif,
    projectIndex,
    lastProjectIndex,
}: props) => {
    const [open, setOpen] = useState<boolean>(true);

    const classNameGiver = () => {
        if (lastProjectIndex !== null) {
            if (projectIndex === null && index === 0) {
                return "ProjectPageParentCont";
            }

            if (index === projectIndex) {
                if (lastProjectIndex < index) {
                    return "ProjectPageParentCont raise";
                } else if (lastProjectIndex > index) {
                    return "ProjectPageParentCont lower";
                }
            }

            if (index === lastProjectIndex) {
                if (projectIndex === index + 1) {
                    return "ProjectPageParentCont hide up";
                } else if (projectIndex === index - 1) {
                    return "ProjectPageParentCont hide down";
                }
            }

            return "ProjectPageParentCont hide";
        }
    };

    return (
        <div className={classNameGiver()}>
            <img
                className="BackgroundImage"
                src={gif}
                alt="demonstrational gif"
            />
            <div
                className={
                    index % 2 === 0
                        ? open
                            ? "ProjectPageInfoParent left open"
                            : "ProjectPageInfoParent left closed"
                        : open
                        ? "ProjectPageInfoParent right open"
                        : "ProjectPageInfoParent right closed"
                }
            >
                {index % 2 !== 0 && (
                    <div className="ProjectPageTransitionButtonCont">
                        <button
                            className="ProjectPageTransitionButton"
                            onClick={() =>
                                open ? setOpen(false) : setOpen(true)
                            }
                        >
                            {open ? ">" : "<"}
                        </button>
                    </div>
                )}
                <div
                    className={
                        index % 2 === 0
                            ? open
                                ? "ProjectPageInfoCont right open"
                                : "ProjectPageInfoCont right closed"
                            : open
                            ? "ProjectPageInfoCont left open"
                            : "ProjectPageInfoCont left closed"
                    }
                >
                    <div className="ProjectPageNameTitleCont">
                        <div
                            style={
                                index % 2 === 0
                                    ? { textAlign: "left" }
                                    : { textAlign: "right" }
                            }
                            className="ProjectPageNameTitle"
                        >
                            {name}
                        </div>
                    </div>
                    <div className="ProjectPageAboutCont">
                        <div
                            style={
                                index % 2 === 0
                                    ? {
                                          textAlign: "left",
                                          marginBottom: "25px",
                                      }
                                    : {
                                          textAlign: "right",
                                          marginBottom: "25px",
                                      }
                            }
                            className="ProjectPageAboutText"
                        >
                            {about}
                        </div>
                        <div
                            style={
                                index % 2 === 0
                                    ? { textAlign: "left" }
                                    : { textAlign: "right" }
                            }
                            className="ProjectPageAboutText"
                        >
                            {about2}
                        </div>
                    </div>
                    <div className="ProjectPageTechCont">
                        <div
                            style={
                                index % 2 === 0
                                    ? { textAlign: "left" }
                                    : { textAlign: "right" }
                            }
                            className="ProjectPageTechTitle"
                        >
                            Tech Used
                        </div>
                        <ul
                            style={
                                index % 2 === 0
                                    ? { textAlign: "left" }
                                    : { textAlign: "right"}
                            }
                            className="ProjectPageTechUl"
                            dir={index % 2 === 0 ? 'ltl' : 'rtl'}
                        >
                            {tech.map((techName, i) => (
                                <li className="ProjectPageTechLi" key={i}>
                                    {techName}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ProjectPageLinkCont">
                        <div
                            className="ProjectPageLink"
                            onClick={() => window.open(link1)}
                        >
                            Github
                        </div>
                        <div
                            className="ProjectPageLink"
                            onClick={() => window.open(link2)}
                        >
                            Live Link
                        </div>
                    </div>
                </div>
                {index % 2 === 0 && (
                    <div className="ProjectPageTransitionButtonCont">
                        <button
                            className="ProjectPageTransitionButton"
                            onClick={() =>
                                open ? setOpen(false) : setOpen(true)
                            }
                        >
                            {open ? "<" : ">"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;
