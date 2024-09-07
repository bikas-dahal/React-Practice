import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'


  /**
   * A rotating cube mesh with sparkles.
   *
   * @remarks
   *
   * This component uses the `useFrame` hook from `@react-three/fiber`
   * to rotate the cube mesh every frame.
   *
   * The cube mesh is rendered with a red material and sparkles are
   * applied to it.
   *
   * @returns The rotating cube mesh with sparkles.
   */
const RotatingCube = () => {

  const meshRef = useRef() 

  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (

    <mesh ref={meshRef} >
      <boxGeometry />
      <meshBasicMaterial color="red" />
      <Sparkles count={100} size={2} scale={[1, 2, 1]} color={0x9cdab6} />
    </mesh>
  )

}


  /**
   * The main app component, which renders a rotating cube.
   *
   * @returns The main app component.
   */
const App = () => {

  return (
    <Canvas style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      Check react three
      <OrbitControls enableZoom enablePan enableRotate  />

      <directionalLight position={[0, 0, 5]} intensity={10} color={0x9cdab6} />

      <color attach="background" args={[0x0b1527]} />

      <RotatingCube />

    </Canvas>
  )
}
 
export default App;