import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";
import "./Home.css";
import { useRef } from "react";
import { GridHelper, Mesh } from "three";
import { range } from "lodash";

const speed = 0.05;

const Grid = () => {
    const grid = useRef<GridHelper>(null!);

    useFrame(() => {
        if (grid.current.position.z > 1) {
            grid.current.position.z = 0;
        } else {
            grid.current.position.z += speed;
        }
    });

    return (
        <gridHelper
            ref={grid}
            args={[190, 170, "#580360", "#580360"]}
            position={[0, 0, 0]}
        />
    );
};

const Plane = () => {
    const plane = useRef<GridHelper>(null!);

    useFrame(() => {
        if (plane.current.position.z > 1) {
            plane.current.position.z = 0;
        } else {
            plane.current.position.z += speed;
        }
    });

    return (
        <mesh
            ref={plane}
            position={[0, -0.05, 0]}
            rotation={[-(Math.PI / 2), 0, 0]}
        >
            <planeBufferGeometry args={[190, 170]} />
            <meshBasicMaterial color="#0C345A" />
        </mesh>
    );
};

const Sun = () => {
    const sun = useRef<Mesh>(null!);

    useFrame(() => {
        sun.current.rotation.z -= 0.001;
    });

    return (
        <mesh position={[0, 5, -150]} ref={sun}>
            <sphereBufferGeometry args={[50, 36, 36]} />
            <meshBasicMaterial depthWrite={false}>
                <GradientTexture
                    stops={[0, 0.1, 0.2, 0.35, 0.6, 1]}
                    colors={[
                        "#FAE9B3",
                        "#F7D050",
                        "#F76C26",
                        "#EC5409",
                        "#9E1E05",
                        "#5d0303",
                    ]}
                    size={1024}
                />
            </meshBasicMaterial>
        </mesh>
    );
};

const Background = () => {
    return (
        <mesh position={[0, 25, -155]}>
            <planeBufferGeometry args={[575, 75]} />
            <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 0.3, 0.4, 0.8, 1]}
                    colors={[
                        "#2d9ee8",
                        "#a78ced",
                        "#f86fbe",
                        "#ff6b70",
                        "#f69109",
                    ]}
                    size={1024}
                />
            </meshBasicMaterial>
        </mesh>
    );
};

const Mount = ({ x, y }: { x: number; y: number }) => {
    const rotX = Math.random();
    const rotZ = Math.random();
    const arg = Math.ceil(Math.random() * 2);

    const ref = useRef<Mesh>(null!);
    const ref2 = useRef<Mesh>(null!);

    useFrame(() => {
        ref.current.rotation.x += 0.0005;
        ref.current.rotation.y += 0.0005;
        ref2.current.rotation.x += 0.0005;
        ref2.current.rotation.y += 0.0005;
    });

    return (
        <>
            <mesh position={[x, 0.5, y]} rotation={[rotX, 0, rotZ]} ref={ref}>
                <tetrahedronBufferGeometry args={[5.01, arg]} />
                <meshBasicMaterial
                    color="#368FD3"
                    wireframe={true}
                    polygonOffset={true}
                />
            </mesh>
            <mesh position={[x, 0.5, y]} rotation={[rotX, 0, rotZ]} ref={ref2}>
                <tetrahedronBufferGeometry args={[5, arg]} />
                <meshPhongMaterial
                    color="black"
                    wireframe={false}
                    polygonOffset={true}
                />
            </mesh>
        </>
    );
};

const MountPlane = () => {
    return (
        <mesh position={[0, 0.05, -60]} rotation={[-(Math.PI / 2), 0, 0]}>
            <planeBufferGeometry args={[190, 15]} />
            <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 0.5, 1]}
                    colors={["black", "black", "#580360"]}
                    size={1024}
                />
            </meshBasicMaterial>
        </mesh>
    );
};

const CameraMove = () => {
    let dir = "up";
    useFrame((state) => {
        if (state.camera.rotation.x > -0.32) {
            dir = "down";
        } else if (state.camera.rotation.x < -0.45) {
            dir = "up";
        }

        if (dir === "up") {
            state.camera.rotation.x += 0.00005;
        } else if (dir === "down") {
            state.camera.rotation.x -= 0.00005;
        }
    });
    return null;
};

const HomeCanvas = () => {
    let offset = true;

    return (
        <Canvas
            className="HomeCanvas"
            camera={{
                fov: 75,
                near: 0.1,
                far: 1000,
                position: [0, 4, 9],
            }}
        >
            <Grid />
            <Background />
            <Plane />
            <Sun />
            {range(50).map((a, i) => {
                offset ? (offset = false) : (offset = true);
                return <Mount key={a} x={i * 5 - 125} y={offset ? -65 : -70} />;
            })}
            <MountPlane />
            <CameraMove />
        </Canvas>
    );
};

export default HomeCanvas;
