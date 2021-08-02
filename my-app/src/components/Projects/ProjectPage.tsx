import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./ProjectPage.css";
interface props {
    name: string;
    link1: string;
    link2: string;
    about: string;
    tech: string[];
    index: number;
    gif: any;
}

const ProjectPage = ({
    name,
    link1,
    link2,
    about,
    tech,
    index,
    gif,
}: props) => {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <div className={index % 2 === 0 ? "left" : "right"}>
            <img
                className="BackgroundImage"
                src={gif}
                alt="demonstrational gif"
            />
            <div
                className={
                    open
                        ? "ProjectPageInfoParent open"
                        : "ProjectPageInfoParent closed"
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
