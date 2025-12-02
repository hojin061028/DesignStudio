'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import LiquidSphere from './LiquidSphere'
import TechStack from './TechStack'
import ParticleField from './ParticleField'

export default function Scene({ children, ...props }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10'>
            <Canvas {...props} camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ParticleField />
                    <Environment preset="city" />
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
