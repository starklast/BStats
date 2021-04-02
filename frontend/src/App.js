import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScrean'
import EditDay from './screens/EditDay'
import EditBooksDay from './screens/EditBooksDay'
import Statistics from './screens/Statistics'
import EditEntity from './screens/EditEntity'
import EditBooksEntity from './screens/EditBooksEntity'
import {
  LINK_EDIT_DAY,
  LINK_EDIT_BOOKS_DAY,
  LINK_EDIT_ENTITY,
  LINK_EDIT_BOOKS_ENTITY,
  LINK_STATS,
} from './constants/Constats'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path={LINK_EDIT_DAY} component={EditDay} />
          <Route path={LINK_EDIT_BOOKS_DAY} component={EditBooksDay} />
          <Route path={LINK_EDIT_ENTITY} component={EditEntity} />
          <Route path={LINK_EDIT_BOOKS_ENTITY} component={EditBooksEntity} />
          <Route path={LINK_STATS} component={Statistics} />

          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
