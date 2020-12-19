import { GlobalStyle } from './components/styleComponents'
import NavigationMenu from './components/NavMenu'
import GlobalFonts from './fonts/Fonts';
import Caegories from './components/Categories'
import Middle from './components/Middle'
function App() {
  return (<>
    <GlobalFonts />
    <GlobalStyle />
    <NavigationMenu />
   <Middle />
  </>

  )
}

export default App;
