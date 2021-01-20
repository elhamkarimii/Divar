import { GlobalStyle } from './components/styleComponents'
import NavigationMenu from './components/NavMenu'
import GlobalFonts from './fonts/Fonts';
import Caegories from './components/Categories'
import Middle from './components/Middle'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalFonts />
      <GlobalStyle />
      <NavigationMenu />
      <Switch>
        <Route path="/" exact>
          <Middle />
        </Route >
        <Route path="/mydivar">
          <h1>my divar</h1>
        </Route>
        <Route path="/chat">
          <h1>chat</h1>
        </Route>
        <Route path="/aboutUs">
          <p>my abut</p>
        </Route>
      </Switch>
    </Router>


  )
}

export default App;
