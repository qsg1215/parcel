import React, { useEffect } from 'react'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as THREE from 'three'
import Layout from '@/components/Layout'

export default () => {
  let container

  let camera, scene, renderer

  let mouseX = 0,
    mouseY = 0

  let windowHalfX = window.innerWidth / 2
  let windowHalfY = window.innerHeight / 2

  let object

  init()
  animate()

  function init() {
    container = document.createElement('div')
    document.body.appendChild(container)

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    )
    camera.position.z = 250

    // scene

    scene = new THREE.Scene()

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 0.8)
    camera.add(pointLight)
    scene.add(camera)

    // manager

    function loadModel() {
      object.traverse(function (child) {
        if (child.isMesh) {
          child.material.map = texture
        }
      })

      object.position.y = -95
      scene.add(object)
    }

    const manager = new THREE.LoadingManager(loadModel)

    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total)
    }

    // texture

    const textureLoader = new THREE.TextureLoader(manager)
    const texture = textureLoader.load('images/uv_grid_opengl.jpeg')

    // model

    function onProgress(xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded')
      }
    }

    function onError() {}

    const loader = new OBJLoader(manager)
    loader.load(
      'model/male02.obj',
      function (obj) {
        object = obj
      },
      onProgress,
      onError
    )

    //

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    document.addEventListener('mousemove', onDocumentMouseMove)

    //

    window.addEventListener('resize', onWindowResize)
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 2
    mouseY = (event.clientY - windowHalfY) / 2
  }

  //

  function animate() {
    requestAnimationFrame(animate)
    render()
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.25
    camera.position.y += (-mouseY - camera.position.y) * 0.25

    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }
  return <Layout></Layout>
}