import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScrean'
import EditDay from './screens/EditDay'
import Statistics from './screens/Statistics'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/edit' component={EditDay} />

          <Route path='/stat' component={Statistics} />

          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
