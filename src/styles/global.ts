'use client'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

a[href^="http://maps.google.com/maps"]{
  display:none !important
}
a[href^="https://maps.google.com/maps"]{
  display:none !important
}

.gm-bundled-control .gmnoprint {
  display: block;
}

.gmnoprint:not(.gm-bundled-control) {
  display: none;
}

.gm-style-cc {
  display: none;
}

.gm-style {
  border-radius:15px !important; 
}

.gm-control-active {
display: none;
}

.gm-svpc {
  display: none;
}

`
export default GlobalStyles
