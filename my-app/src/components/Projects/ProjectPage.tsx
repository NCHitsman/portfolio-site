import { useState } from "react";
import "./ProjectPage.css";
interface props {
    name: string;
    link1: string;
    link2: string;
    about: string;
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
                <div
                    className={
                        open
                            ? "ProjectPageInfoCont open"
                            : "ProjectPageInfoCont closed"
                    }
                >
                    <div>{name}</div>
                    <div onClick={() => window.open(link1)}>Github</div>
                    <div onClick={() => window.open(link2)}>Livelink</div>
                    <div>
                        <div>About</div>
                        <div>{about}</div>
                    </div>
                    <div>
                        <div>Tech Used</div>
                        <ul>
                            {tech.map((techName, i) => (
                                <li key={i}>{techName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => (open ? setOpen(false) : setOpen(true))}
                    >
                        {open ? "<" : ">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
