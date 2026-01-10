import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, ContactShadows, PresentationControls } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";
import { useRobot } from "../context/RobotContext";
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
    const { triggerTakeover } = useRobot();
    const headRef = useRef<THREE.Group>(null!);
    const bodyRef = useRef<THREE.Group>(null!);
    const rightArmRef = useRef<THREE.Mesh>(null!);
    const leftArmRef = useRef<THREE.Mesh>(null!);

    const [clickCount, setClickCount] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);
    const [action, setAction] = React.useState<'idle' | 'wave' | 'jump' | 'spin' | 'shake'>('idle');

    // Initial Greeting Animation
    React.useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.position.y = -5; // Start below
            let i = 0;
            const intro = setInterval(() => {
                i += 0.1;
                bodyRef.current.position.y = THREE.MathUtils.lerp(bodyRef.current.position.y, 0, 0.1);
                if (i > 20) clearInterval(intro);
            }, 20);
            return () => clearInterval(intro);
        }
    }, []);

    // Determine emission color based on theme
    const getThemeColor = () => {
        // If angry (clickCount >= 3), turn RED
        if (clickCount >= 3) return '#ff0000';

        switch (currentTheme) {
            case 'amber': return '#f59e0b';
            case 'cyan': return '#06b6d4';
            case 'red': return '#ef4444';
            default: return '#22c56e'; // green
        }
    };

    const themeColor = getThemeColor();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Eye Tracking (Head follows mouse)
        if (headRef.current) {
            // Mouse x/y are from -1 to 1. 
            // We clamp movement to avoid breaking neck
            const targetX = state.mouse.x * 0.5;
            const targetY = state.mouse.y * 0.5;

            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
        }

        // Animations based on Agent State
        if (bodyRef.current && rightArmRef.current && leftArmRef.current) {

            // Default arm positions
            const defaultRightArmRot = -0.5;
            const defaultLeftArmRot = 0.5;

            switch (action) {
                case 'wave':
                    // Wave Right Arm
                    rightArmRef.current.rotation.z = Math.sin(t * 15) * 0.5 - 2; // Fast wave up high
                    // Idle body
                    bodyRef.current.position.y = Math.sin(t * 2) * 0.05;
                    break;

                case 'jump':
                    // Jump up and down
                    bodyRef.current.position.y = Math.abs(Math.sin(t * 10)) * 0.5;
                    // Arms flail up
                    rightArmRef.current.rotation.z = Math.sin(t * 10) * 0.5 - 2.5;
                    leftArmRef.current.rotation.z = Math.sin(t * 10) * 0.5 + 2.5;
                    break;

                case 'spin':
                    // Spin around Y axis
                    bodyRef.current.rotation.y += 0.2;
                    // Arms out
                    rightArmRef.current.rotation.z = -1.5;
                    leftArmRef.current.rotation.z = 1.5;
                    break;

                case 'shake':
                    // Angry shake
                    bodyRef.current.rotation.y = Math.sin(t * 30) * 0.2;
                    break;

                case 'idle':
                default:
                    if (clickCount >= 3) {
                        // Angry idle (shaking)
                        bodyRef.current.position.x = Math.sin(t * 20) * 0.05;
                    } else {
                        // Normal breathing
                        bodyRef.current.position.y = Math.sin(t * 1) * 0.1;
                        bodyRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
                        // Reset arms
                        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, defaultRightArmRot, 0.1);
                        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, defaultLeftArmRot, 0.1);
                    }
                    break;
            }
        }
    });

    const lastClickTime = useRef(0);

    const handleClick = () => {
        const now = Date.now();
        const timeDiff = now - lastClickTime.current;
        lastClickTime.current = now;

        // RAPID CLICK DETECTED (< 1 second)
        if (timeDiff < 1000) {
            setClickCount(prev => {
                const newClickCount = prev + 1;
                // Check for takeover
                if (newClickCount >= 5) {
                    triggerTakeover();
                    return 0; // Reset click count after takeover
                }
                return newClickCount;
            });
            setAction('shake'); // Angry reaction immediately
        }
        // SLOW / NORMAL CLICK
        else {
            // Calm down if not rapid clicking
            setClickCount(prev => Math.max(0, prev - 1));

            // Perform Animation Trick
            const actions: ('wave' | 'jump' | 'spin')[] = ['wave', 'jump', 'spin'];
            const nextAction = actions[Math.floor(Math.random() * actions.length)];
            setAction(nextAction);
        }

        // Reset to idle after 1.5 seconds regardless of action
        // Use a timeout ref if we wanted to be perfect, but this is fine for simple overlap
        setTimeout(() => setAction('idle'), 1500);
    };

    return (
        <group
            ref={bodyRef}
            onClick={(e) => { e.stopPropagation(); handleClick(); }}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setIsHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setIsHovered(false); }}
        >
            {/* HEAD */}
            <group ref={headRef} position={[0, 1.2, 0]}>
                {/* Main Head Box */}
                <mesh>
                    <boxGeometry args={[1, 0.8, 1]} />
                    <meshStandardMaterial color={clickCount >= 3 ? "#330000" : "#888888"} roughness={0.5} metalness={0.8} />
                </mesh>

                {/* Eyes (Emissive screen) */}
                <mesh position={[0, 0, 0.51]}>
                    <planeGeometry args={[0.8, 0.4]} />
                    <meshStandardMaterial color="#111111" />
                </mesh>
                {/* Left Eye */}
                <mesh position={[-0.2, 0, 0.52]}>
                    <boxGeometry args={[0.15, isHovered ? 0.05 : 0.1, 0.05]} /> {/* Squint on hover */}
                    <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={3} toneMapped={false} />
                </mesh>
                {/* Right Eye */}
                <mesh position={[0.2, 0, 0.52]}>
                    <boxGeometry args={[0.15, isHovered ? 0.05 : 0.1, 0.05]} />
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
            <mesh position={[0, 0, 0.41]} rotation={[Math.PI / 2, 0, 0]}>
                {/* Fixed Type Error: removed rotation prop from Geometry, applied to Mesh if needed, or ignored since CylinderGeometry doesn't take rotation in args directly like this */}
                <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
                <meshStandardMaterial color={themeColor} emissive={themeColor} emissiveIntensity={2} toneMapped={false} />
            </mesh>
            {/* Note: In previous code, rotation was passed to CylinderGeometry which caused a TS Error. 
                 Correcting it by applying rotation to the mesh containing it if intended, 
                 but looking at context (Core), it likely meant to rotate the mesh. 
                 I'll apply rotation to the MESH for the Core. */}

            {/* ARMS - Now with refs for animation */}
            {/* Left Arm */}
            <mesh ref={leftArmRef} position={[-0.7, 0.2, 0]} rotation={[0, 0, 0.5]}>
                <capsuleGeometry args={[0.1, 0.6]} />
                <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.7} />
            </mesh>
            {/* Right Arm */}
            <mesh ref={rightArmRef} position={[0.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
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
