import React, { Fragment } from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import GlobalStyle from './GlobalStyle'
import Theme from './Theme'
import App from './App'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <Fragment>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </Fragment>
)
