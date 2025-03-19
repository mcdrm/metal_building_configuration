import { Grid, OrbitControls } from '@react-three/drei'
import React from 'react'

const CanvasEnv = () => {
    return (
        <>
            <Grid
                renderOrder={-1}
                position={[0, -0.1, 0]}
                infiniteGrid
                cellSize={0.6}
                cellThickness={0.6}
                sectionSize={3}
                sectionThickness={1.5} 
                sectionColor={[0.5, 0.5, 10]}
                fadeDistance={30}
            />
            <OrbitControls
                autoRotate
                autoRotateSpeed={0.5}
                enableZoom={false}
                enablePan={false}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                makeDefault
            />
        </>
    )
}

export default CanvasEnv