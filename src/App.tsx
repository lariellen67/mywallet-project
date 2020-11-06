import React from 'react'

import GlobalStyle from './styles/global'
import {ThemeProvider} from 'styled-components';
import theme from './themes/dark'
import Dashboard from './pages/Dashboard'

import Layout from './components/Layout'

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout >
        <Dashboard/>
      </Layout>
    </ThemeProvider>
)

export default App
