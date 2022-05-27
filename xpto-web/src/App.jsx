import { Switch, Route } from "react-router-dom"
import './styles/global.css';
import Services from "./pages/Servicos"
import Budget from "./pages/Orcamentos"
import Contact from "./pages/Contato"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/budget" component={Budget} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  )
}

export default App