import React from 'react'
import { render } from 'react-dom'
import App from './App'

function renderApp() {
  const App = require('./App').default
  render(<App />, root)
}

renderApp()

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept(renderApp)
} 
