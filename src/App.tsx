import {
  BrowserRouter as Router,
} from "react-router-dom"
import { Container } from '@mui/material';
import "./App.scss"
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <main id="main-app">
        <header id="main-header"></header>

        <Container id="main-container" component="section">
          <Router>
            <AppRoutes />
          </Router>
        </Container>

        <footer id="main-footer"></footer>
      </main>
    </Provider>
  );
}

export default App;
