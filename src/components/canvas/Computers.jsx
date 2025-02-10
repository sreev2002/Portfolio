import {Suspense, useEffect, useState} from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF,} from '@react-three/drei'
import CanvasLoader from '../Loader';


const Computers = ({ isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
     
      <hemisphereLight intensity={1}
      groundColor="black" 
      decay={0}
      />
      <pointLight intensity={1}
      decay={0}
         />

       
      <spotLight 
        angle={0.12}
        penumbra={1}
        position={[-20, 50, 10]}
        intensity={5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        decay={0}
      />
     
      <primitive 
      object={computer.scene}
      scale={ isMobile? 0.7: 0.75}
      position={isMobile? [0, -3, -2.2]:[0,-3.5,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      castShadow
      receiveShadow
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov: 25}}
    gl={{ preserveDrawingBuffer: true}}
    >
     <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
      <Computers isMobile={isMobile} />
     </Suspense>
     <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;