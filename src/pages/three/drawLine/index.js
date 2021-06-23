import React, { useEffect } from 'react'
// import * as THREE from 'three'
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  LineBasicMaterial,
  Vector2,
  BufferGeometry,
  Line,
} from 'three'

export default () => {
  useEffect(() => {
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    // console.log(renderer.domElement, 'renderer.domElement')
    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    const scene = new Scene()
    const material = new LineBasicMaterial({ color: 'red' })
    const points = []
    points.push(new Vector2(-10, 0, 0))
    points.push(new Vector2(0, 10, 0))
    points.push(new Vector2(10, 0, 0))

    const geometry = new BufferGeometry().setFromPoints(points)
    const line = new Line(geometry, material)
    scene.add(line)
    renderer.render(scene, camera)
  }, [])
  return <div>112</div>
}
