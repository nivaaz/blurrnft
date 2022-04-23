import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Model from './CryptoPunkModel';

export default function CryptoPunkScene(props) {

    return (
        <div style={{ height: "100vh", backgroundColor: "#fde2e4" }}>
            <Canvas camera={{ fov: 0.5 }}>
                <pointLight position={[10, 10, 10]} intensity={1.3} />
                <pointLight position={[10, 10, -10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls makeDefault autoRotate />
                <ContactShadows frames={1} position={[0, -1, 0]} blur={1} opacity={0.6} />
            </Canvas>
        </div>
    );
}