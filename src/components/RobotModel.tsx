import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, ContactShadows, PresentationControls } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";
import * as THREE from "three";

// Simple Error Boundary to catch WebGL crashes
class ErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: any, errorInfo: any) {
        console.error("3D Error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

const Robot = () => {
    const { currentTheme } = useTheme();
    const headRef = useRef<THREE.Group>(null!);
    const bodyRef = useRef<THREE.Group>(null!);

    // Determine emission color based on theme
    const getThemeColor = () => {
        switch (currentTheme) {
            case 'amber': return '#f59e0b';
            case 'cyan': return '#06b6d4';
            case 'red': return '#ef4444';
            default: return '#22c55e'; // green
        }
    };

    const themeColor = getThemeColor();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Subtle breathing animation
        if (bodyRef.current) {
            bodyRef.current.position.y = Math.sin(t * 1) * 0.1;
            bodyRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
        }
        // Head looks around slightly
        if (headRef.current) {
            headRef.current.rotation.y = Math.sin(t * 0.8) * 0.2;
            headRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <group ref={bodyRef}>
            {/* HEAD */}
            <group ref={headRef} position={[0, 1.2, 0]}>
                {/* Main Head Box */}
                <mesh>
                    <boxGeometry args={[1, 0.8, 1]} />
                    <meshStandardMaterial color="#888888" roughness={0.5} metalness={0.8} />
                </mesh>

                {/* Eyes (Emissive screen) */}
                <mesh position={[0, 0, 0.51]}>
                    <planeGeometry args={[0.8, 0.4]} />
                    <meshStandardMaterial color="#111111" />
                </mesh>
                {/* Left Eye */}
                <mesh position={[-0.2, 0, 0.52]}>
                    <boxGeometry args={[0.15, 0.1, 0.05]} />
                    <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={3} toneMapped={false} />
                </mesh>
                {/* Right Eye */}
                <mesh position={[0.2, 0, 0.52]}>
                    <boxGeometry args={[0.15, 0.1, 0.05]} />
                    <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={3} toneMapped={false} />
                </mesh>

                {/* Antenna */}
                <mesh position={[0, 0.4, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                    <meshStandardMaterial color="#666666" />
                </mesh>
                <mesh position={[0, 0.6, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </group>

            {/* BODY */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.6, 1.2, 8]} />
                <meshStandardMaterial color="#666666" roughness={0.4} metalness={0.8} />
            </mesh>

            {/* Core (Emissive) */}
            <mesh position={[0, 0, 0.41]}>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={2} toneMapped={false} />
            </mesh>

            {/* ARMS */}
            {/* Left Arm */}
            <mesh position={[-0.7, 0.2, 0]} rotation={[0, 0, 0.5]}>
                <capsuleGeometry args={[0.1, 0.6]} />
                <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.7} />
            </mesh>
            {/* Right Arm */}
            <mesh position={[0.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
                <capsuleGeometry args={[0.1, 0.6]} />
                <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.7} />
            </mesh>
        </group>
    );
};

const RobotFallback = () => (
    <div className="flex items-center justify-center w-full h-full border-2 border-primary bg-primary/10">
        <div className="text-center">
            <p className="text-primary font-bold font-pixel mb-2">ROBOT.OFFLINE</p>
            <p className="text-xs text-primary/70">Visual system initialization failed.</p>
        </div>
    </div>
);

const RobotModel = () => {
    const { currentTheme } = useTheme();
    // Helper to get theme color for lights
    const getThemeColor = () => {
        switch (currentTheme) {
            case 'amber': return '#f59e0b';
            case 'cyan': return '#06b6d4';
            case 'red': return '#ef4444';
            default: return '#22c55e';
        }
    };
    const themeColor = getThemeColor();

    return (
        <div className="h-[300px] w-full md:h-[400px]">
            <ErrorBoundary fallback={<RobotFallback />}>
                <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                    <Suspense fallback={null}>
                        {/* Lighting */}
                        <ambientLight intensity={3} />
                        <directionalLight position={[5, 10, 7]} intensity={4} castShadow />
                        <pointLight position={[10, 10, 10]} intensity={5} />
                        <pointLight position={[-10, -10, -10]} intensity={2} color={themeColor} />

                        {/* Controls & Float */}
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 6, Math.PI / 6]}
                            azimuth={[-Math.PI / 6, Math.PI / 6]}
                        >
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                                <Robot />
                            </Float>
                        </PresentationControls>

                        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default RobotModel;
