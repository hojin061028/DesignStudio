'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function LiquidSphere(props) {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate slightly for ambient motion
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3

            // Mouse interaction
            const { x, y } = state.pointer
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 1, 0.1)
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 1, 0.1)
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} ref={meshRef} {...props}>
                <MeshDistortMaterial
                    color="#ffffff"
                    attach="material"
                    distort={0.5} // Strength, 0 disables the effect (default=1)
                    speed={2} // Speed (default=1)
                    roughness={0.2}
                    metalness={1}
                    bumpScale={0.005}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    radius={1}
                />
            </Sphere>
        </Float>
    )
}
