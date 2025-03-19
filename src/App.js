import { Canvas } from "@react-three/fiber";
import CanvasEnv from "./CanvasEnv";

function App() {
    return (
        <Canvas>
            <CanvasEnv />
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={'green'} />
            </mesh>
        </Canvas>
    );
}

export default App;
