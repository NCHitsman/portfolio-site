import { Dispatch, SetStateAction } from "react";

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
    return (
        <div className={index % 2 === 0 ? "left" : "right"}>
            <img src={gif} alt="demonstrational gif" />
            <div>
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
                        {tech.map((techName) => (
                            <li>{techName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
