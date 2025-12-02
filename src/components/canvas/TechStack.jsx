'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'

const TECHNOLOGIES = ['React', 'Three.js', 'Next.js', 'GSAP', 'WebGL', 'Blender']

export default function TechStack(props) {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005
        }
    })

    return (
        <group ref={groupRef} {...props}>
            {TECHNOLOGIES.map((tech, i) => {
                const angle = (i / TECHNOLOGIES.length) * Math.PI * 2
                const radius = 3
                const x = Math.sin(angle) * radius
                const z = Math.cos(angle) * radius
                return (
                    <Float key={tech} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Text
                            position={[x, 0, z]}
                            rotation={[0, angle, 0]}
                            fontSize={0.5}
                            color="#ffffff"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {tech}
                        </Text>
                    </Float>
                )
            })}
        </group>
    )
}
