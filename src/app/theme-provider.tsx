"use client";
import { ThemeProvider as Provider } from 'styled-components'
import themes from '../styles/themes';

export default function ThemeProvider({ children }) {
  return (
    <Provider theme={themes}>
      {children}
    </Provider>
  );
}
