import CryptoPunkModel from "./CryptoPunkModel";
import { Canvas } from '@react-three/fiber'

export default function CryptoPunkScene() {
    return (
        <Canvas>
            <CryptoPunkModel />
        </Canvas>
    )
}