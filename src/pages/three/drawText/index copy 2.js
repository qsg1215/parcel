import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { Radio } from 'antd'
import * as THREE from 'three'
// import Stats from 'three/examples/jsm/s'
import Stats from 'stats-js'
import styles from './index.less'

THREE.Cache.enabled = true

export default () => {
  var stats = new Stats()
  stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom)

  let container, status, permalink, hex
  let camera, cameraTarget, scene, renderer
  let group, textMesh1, textMesh2, textGeo, materials

  let firstLetter = true
  let text = 'three.js',
    bevelEnabled = true,
    font = undefined,
    fontName = 'optimer',
    fontWeight = 'bold'
  const height = 20,
    size = 70,
    hover = 30,
    curveSegments = 4,
    bevelThickness = 2,
    bevelSize = 1.5

  const mirror = true
  let pointLight

  const fontMap = {
    helvetiker: 0,
    optimer: 1,
    gentilis: 2,
    'droid/droid_sans': 3,
    'droid/droid_serif': 4,
  }

  const weightMap = {
    regular: 0,
    bold: 1,
  }

  const reverseFontMap = []
  const reverseWeightMap = []
  for (const i in fontMap) reverseFontMap[fontMap[i]] = i
  for (const i in weightMap) reverseWeightMap[weightMap[i]] = i
  console.log(reverseFontMap)
  console.log(reverseWeightMap)

  let targetRotation = 0
  let targetRotationOnPointerDown = 0

  let pointerX = 0
  let pointerXOnPointerDown = 0

  let windowHalfX = window.innerWidth / 2

  let fontIndex = 1

  useEffect(() => {
    init()
    animate()
  }, [])

  function boolToNum(b) {
    return b ? 1 : 0
  }

  function decimalToHex(d) {
    let hex = Number(d).toString(16)
    hex = '000000'.substr(0, 6 - hex.length) + hex
    return hex.toUpperCase()
  }

  function updatePermalink() {
    permalink = document.getElementById('permalink')
    const link =
      hex +
      fontMap[fontName] +
      weightMap[fontWeight] +
      boolToNum(bevelEnabled) +
      '#' +
      encodeURI(text)

    permalink.href = '#' + link
    window.location.hash = link
  }

  function loadFont() {
    const loader = new THREE.FontLoader()
    loader.load(
      // 'fonts/' + fontName + '_' + fontWeight + '.typeface.json',
      'fonts/' + 'optimer' + '_' + 'bold' + '.typeface.json',
      function (response) {
        font = response

        refreshText()
      }
    )
  }

  const init = () => {
    container = document.createElement('div')
    document.body.appendChild(container)

    // CAMERA
    camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      1500
    )
    camera.position.set(0, 400, 700)

    cameraTarget = new THREE.Vector3(0, 150, 0)

    // SCENE

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    scene.fog = new THREE.Fog(0x000000, 250, 1400)

    // LIGHTS

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.125)
    dirLight.position.set(0, 0, 1).normalize()
    scene.add(dirLight)

    pointLight = new THREE.PointLight(0xffffff, 1.5)
    pointLight.position.set(0, 100, 90)
    scene.add(pointLight)

    // Get text from hash

    const hash = document.location.hash.substr(1)

    if (hash.length !== 0) {
      const colorhash = hash.substring(0, 6)
      const fonthash = hash.substring(6, 7)
      const weighthash = hash.substring(7, 8)
      const bevelhash = hash.substring(8, 9)
      const texthash = hash.substring(10)

      hex = colorhash
      pointLight.color.setHex(parseInt(colorhash, 16))

      fontName = reverseFontMap[parseInt(fonthash)]
      fontWeight = reverseWeightMap[parseInt(weighthash)]

      bevelEnabled = parseInt(bevelhash)

      text = decodeURI(texthash)

      updatePermalink()
    } else {
      pointLight.color.setHSL(Math.random(), 1, 0.5)
      //   hex = decimalToHex(pointLight.color.getHex())
    }

    group = new THREE.Group()
    group.position.y = 100

    scene.add(group)

    loadFont()

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10000, 10000),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.5,
        transparent: true,
      })
    )
    plane.position.y = 100
    plane.rotation.x = -Math.PI / 2
    scene.add(plane)

    // 			materials = [
    // 				new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
    // 				new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
    // 			];

    //   updatePermalink()

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // EVENTS

    function onPointerDown(event) {
      if (event.isPrimary === false) return

      pointerXOnPointerDown = event.clientX - windowHalfX
      targetRotationOnPointerDown = targetRotation

      document.addEventListener('pointermove', onPointerMove)
      document.addEventListener('pointerup', onPointerUp)
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return

      pointerX = event.clientX - windowHalfX

      targetRotation =
        targetRotationOnPointerDown + (pointerX - pointerXOnPointerDown) * 0.02
    }

    function onDocumentKeyDown(event) {
      if (firstLetter) {
        firstLetter = false
        text = ''
      }

      const keyCode = event.keyCode

      // backspace

      if (keyCode == 8) {
        event.preventDefault()

        text = text.substring(0, text.length - 1)
        refreshText()

        return false
      }
    }

    function onDocumentKeyPress(event) {
      const keyCode = event.which

      // backspace

      if (keyCode == 8) {
        event.preventDefault()
      } else {
        const ch = String.fromCharCode(keyCode)
        text += ch

        refreshText()
      }
    }

    function onPointerUp(event) {
      if (event.isPrimary === false) return

      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerup', onPointerUp)
    }

    container.style.touchAction = 'none'
    container.addEventListener('pointerdown', onPointerDown)

    document.addEventListener('keypress', onDocumentKeyPress)
    document.addEventListener('keydown', onDocumentKeyDown)
  }

  const render = () => {
    group.rotation.y += (targetRotation - group.rotation.y) * 0.05
    camera.lookAt(cameraTarget)
    renderer.clear()
    renderer.render(scene, camera)
  }

  const animate = () => {
    requestAnimationFrame(animate)
    render()
    stats.begin()

    // monitored code goes here

    stats.end()
    // console.log('来了')
  }

  function refreshText() {
    updatePermalink()

    group.remove(textMesh1)
    if (mirror) group.remove(textMesh2)

    if (!text) return

    createText()
  }

  function createText() {
    textGeo = new THREE.TextGeometry(text, {
      font: font,

      size: size,
      height: height,
      curveSegments: curveSegments,

      bevelThickness: bevelThickness,
      bevelSize: bevelSize,
      bevelEnabled: bevelEnabled,
    })

    textGeo.computeBoundingBox()

    const centerOffset =
      -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x)

    textMesh1 = new THREE.Mesh(textGeo, materials)

    textMesh1.position.x = centerOffset
    textMesh1.position.y = hover
    textMesh1.position.z = 0

    textMesh1.rotation.x = 0
    textMesh1.rotation.y = Math.PI * 2

    group.add(textMesh1)

    if (mirror) {
      textMesh2 = new THREE.Mesh(textGeo, materials)

      textMesh2.position.x = centerOffset
      textMesh2.position.y = -hover
      textMesh2.position.z = height

      textMesh2.rotation.x = Math.PI
      textMesh2.rotation.y = Math.PI * 2

      group.add(textMesh2)
    }
  }

  const handleBtnChange = (e) => {
    const { value } = e.target
    switch (value) {
      case 'color':
        pointLight.color.setHSL(Math.random(), 1, 0.5)
        hex = decimalToHex(pointLight.color.getHex())

        updatePermalink()
        break
      case 'font':
        fontIndex++

        fontName = reverseFontMap[fontIndex % reverseFontMap.length]

        loadFont()
        break
      case 'weight':
        if (fontWeight === 'bold') {
          fontWeight = 'regular'
        } else {
          fontWeight = 'bold'
        }

        loadFont()

        break
      case 'bevel':
        bevelEnabled = !bevelEnabled

        refreshText()
        break
    }
  }

  return (
    <Layout>
      <div className={styles.btns}>
        <a id="permalink" href="#">
          permalink
        </a>
        <Radio.Group
          defaultValue="color"
          onChange={handleBtnChange}
          buttonStyle="solid"
        >
          <Radio.Button value="color">改变颜色</Radio.Button>
          <Radio.Button value="font">改变字体</Radio.Button>
          <Radio.Button value="weight">改变字重</Radio.Button>
          <Radio.Button value="bevel">改变层级</Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.root}></div>
    </Layout>
  )
}
