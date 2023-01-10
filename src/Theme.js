import React from 'react'
import { ThemeProvider } from 'styled-components'

const colors = {
  white: '#ffffff',
  gray: {
    light: '#f5f5f5',
    middle: '#6a6a6a',
    dark: '#101010',
  },
  red: {
    light: '#ff8282',
    middle: '#c84b4b',
    dark: '#aa2d2d',
  },
  blue: {
    light: '#6ea8e1',
    middle: '#3271af',
    dark: '#0a4987',
  },
}

const theme = {
  colors: {
    white: colors.white,
    primary: colors.gray,
    secondary: colors.red,
    tertiary: colors.blue,
  },
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
