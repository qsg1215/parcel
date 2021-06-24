import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { Button } from 'antd'
import * as THREE from 'three'
import Stats from 'stats-js'
import styles from './index.less'

THREE.Cache.enabled = true

export default () => {
  const mirror = false
  const height = 20,
    size = 70,
    hover = 30,
    curveSegments = 4,
    bevelThickness = 2,
    bevelSize = 1.5
  const reverseFontMap = []
  const reverseWeightMap = []
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
  for (const i in fontMap) reverseFontMap[fontMap[i]] = i
  for (const i in weightMap) reverseWeightMap[weightMap[i]] = i

  let container, permalink, hex, pointLight
  let camera, cameraTarget, scene, renderer
  let group, textMesh1, textMesh2, textGeo, materials

  let targetRotation = 0
  let targetRotationOnPointerDown = 0

  let pointerX = 0
  let pointerXOnPointerDown = 0

  let windowHalfX = window.innerWidth / 2

  let fontIndex = 1

  let text = 'I.LOVE.YOU',
    bevelEnabled = true,
    font = undefined,
    fontName = 'optimer',
    fontWeight = 'bold'

  let firstLetter = true

  //声明周期
  useEffect(() => {
    init()
    animate()
    // 绑定事件
    window.addEventListener('resize', onWindowResize)

    container.style.touchAction = 'none'
    container.addEventListener('pointerdown', onPointerDown)

    document.addEventListener('keypress', onDocumentKeyPress)
    document.addEventListener('keydown', onDocumentKeyDown)
  })

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

  function onPointerDown(event) {
    if (event.isPrimary === false) return

    pointerXOnPointerDown = event.clientX - windowHalfX
    targetRotationOnPointerDown = targetRotation

    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerup', onPointerUp)
  }

  // 刷新率监听
  var stats = new Stats()
  stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom)

  function init() {
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

    //   文字纹路
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
      hex = decimalToHex(pointLight.color.getHex())
    }

    materials = [
      new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
      new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
    ]

    group = new THREE.Group()
    group.position.y = 100

    scene.add(group)
    loadFont()

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)
  }

  function animate() {
    requestAnimationFrame(animate)
    render()
    stats.begin()
    stats.end()
  }
  function render() {
    group.rotation.y += (targetRotation - group.rotation.y) * 0.05
    camera.lookAt(cameraTarget)

    renderer.clear()
    renderer.render(scene, camera)
  }

  function loadFont() {
    const loader = new THREE.FontLoader()
    loader.load(
      'fonts/' + fontName + '_' + fontWeight + '.typeface.json',
      function (response) {
        font = response
        refreshText()
      }
    )
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

  function updatePermalink() {
    const link =
      hex +
      fontMap[fontName] +
      weightMap[fontWeight] +
      boolToNum(bevelEnabled) +
      '#' +
      encodeURI(text)
    window.location.hash = link
  }

  function boolToNum(b) {
    return b ? 1 : 0
  }

  function decimalToHex(d) {
    let hex = Number(d).toString(16)
    hex = '000000'.substr(0, 6 - hex.length) + hex
    return hex.toUpperCase()
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function handleBtnChange(type) {
    switch (type) {
      case 'color':
        pointLight.color.setHSL(Math.random(), 1, 0.5)
        hex = decimalToHex(pointLight.color.getHex())

        updatePermalink()
        break
      case 'font':
        fontIndex++
        fontName = reverseFontMap[fontIndex % reverseFontMap.length]

        console.log(fontName, 'fontName')

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
        <Button onClick={() => handleBtnChange('color')}>改变颜色</Button>
        <Button onClick={() => handleBtnChange('font')}>改变字体</Button>
        <Button onClick={() => handleBtnChange('weight')}>改变字重</Button>
        <Button onClick={() => handleBtnChange('bevel')}>改变层级</Button>
      </div>
      <div className={styles.root}></div>
    </Layout>
  )
}
