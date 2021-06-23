import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
// import App from '../src/pages/about'
// import App from '../src/pages/home'
// import App from '../src/pages/shadow'
// import App from '../src/pages/module'
// import App from '../src/pages/three/start'
import App from '../src/pages/three/drawLine'

const root = document.querySelector('#root')

ReactDOM.render(createElement(App), root)
