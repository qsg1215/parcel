import React, { useEffect } from 'react'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default () => {
  useEffect(() => {
    init()
  }, [])
  const init = () => {
    const scene = new THREE.Scene() // 创建场景
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ) //创建透视摄像机
    const geometry = new THREE.BoxGeometry() // 创建几何体
    const material = new THREE.MeshBasicMaterial({ color: 'red' }) // 创建材质
    const cube = new THREE.Mesh(geometry, material) // 创建立方体
    scene.add(cube) // 场景中添加立方体
    camera.position.z = 5 // 相机位置
    const renderer = new THREE.WebGLRenderer() // 创建渲染器
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2) // 设置尺寸
    // renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement) // 添加渲染器中的dom 节点

    // const controls = new OrbitControls(camera, renderer.domElement)

    // console.log(controls, 'controls')

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }

  return <div></div>
}
