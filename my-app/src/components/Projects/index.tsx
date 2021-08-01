import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./Projects.css";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ projects, setProjects, setAbout, setLastPage }: props) => {
    const [flipped1, setFlipped1] = useState<boolean>(false);
    const [flipped2, setFlipped2] = useState<boolean>(false);
    const [flipped3, setFlipped3] = useState<boolean>(false);
    const [flipped4, setFlipped4] = useState<boolean>(false);

    return (
        <>
            <div
                className={
                    projects == null
                        ? "ProjectsParentCont"
                        : projects
                        ? "ProjectsParentCont active"
                        : "ProjectsParentCont unactive"
                }
            >
                <div className="ProjectsContentParentCont">
                    <div>
                        <div className="ProjectsTitle">Projects</div>
                    </div>
                    <div className="ProjectsCardCont">
                        <div
                            onClick={() =>
                                flipped1
                                    ? setFlipped1(false)
                                    : setFlipped1(true)
                            }
                            className={
                                flipped1 ? "ProjectCard Flipped" : "ProjectCard"
                            }
                        >
                            <div className="ProjectCardFace Front">
                                <div>
                                    <div>Name</div>
                                    <div>
                                        <div>Github</div>
                                        <div>Livelink</div>
                                    </div>
                                </div>
                                <div>GIF</div>
                            </div>
                            <div className="ProjectCardFace Back">
                                <div>
                                    <div>Tech:</div>
                                    <ul>
                                        <li>Tech 1</li>
                                        <li>Tech 2</li>
                                        <li>Tech 3</li>
                                        <li>Tech 4</li>
                                        <li>Tech 5</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Aspect 1</li>
                                        <li>Aspect 2</li>
                                        <li>Aspect 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                flipped2
                                    ? setFlipped2(false)
                                    : setFlipped2(true)
                            }
                            className={
                                flipped2 ? "ProjectCard Flipped" : "ProjectCard"
                            }
                        >
                            <div className="ProjectCardFace Front">
                                <div>
                                    <div>Name</div>
                                    <div>
                                        <div>Github</div>
                                        <div>Livelink</div>
                                    </div>
                                </div>
                                <div>GIF</div>
                            </div>
                            <div className="ProjectCardFace Back">
                                <div>
                                    <div>Tech:</div>
                                    <ul>
                                        <li>Tech 1</li>
                                        <li>Tech 2</li>
                                        <li>Tech 3</li>
                                        <li>Tech 4</li>
                                        <li>Tech 5</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Aspect 1</li>
                                        <li>Aspect 2</li>
                                        <li>Aspect 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                flipped3
                                    ? setFlipped3(false)
                                    : setFlipped3(true)
                            }
                            className={
                                flipped3 ? "ProjectCard Flipped" : "ProjectCard"
                            }
                        >
                            <div className="ProjectCardFace Front">
                                <div>
                                    <div>Name</div>
                                    <div>
                                        <div>Github</div>
                                        <div>Livelink</div>
                                    </div>
                                </div>
                                <div>GIF</div>
                            </div>
                            <div className="ProjectCardFace Back">
                                <div>
                                    <div>Tech:</div>
                                    <ul>
                                        <li>Tech 1</li>
                                        <li>Tech 2</li>
                                        <li>Tech 3</li>
                                        <li>Tech 4</li>
                                        <li>Tech 5</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Aspect 1</li>
                                        <li>Aspect 2</li>
                                        <li>Aspect 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                flipped4
                                    ? setFlipped4(false)
                                    : setFlipped4(true)
                            }
                            className={
                                flipped4 ? "ProjectCard Flipped" : "ProjectCard"
                            }
                        >
                            <div className="ProjectCardFace Front">
                                <div>
                                    <div>Name</div>
                                    <div>
                                        <div>Github</div>
                                        <div>Livelink</div>
                                    </div>
                                </div>
                                <div>GIF</div>
                            </div>
                            <div className="ProjectCardFace Back">
                                <div>
                                    <div>Tech:</div>
                                    <ul>
                                        <li>Tech 1</li>
                                        <li>Tech 2</li>
                                        <li>Tech 3</li>
                                        <li>Tech 4</li>
                                        <li>Tech 5</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Aspect 1</li>
                                        <li>Aspect 2</li>
                                        <li>Aspect 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='CreatedBy'>Site Created by Noah Carmichael-Hitsman</div> */}
            </div>
            {projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(false);
                            setAbout(true);
                            setLastPage("projects");
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Projects;
