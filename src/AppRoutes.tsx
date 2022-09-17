import {
  Route,
  Switch
} from "react-router-dom"
import Home from "./pages/Home/Home"

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>

)


export default AppRoutes