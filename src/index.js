import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { GlobalStyle } from './styles/GlobalStyle'

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
