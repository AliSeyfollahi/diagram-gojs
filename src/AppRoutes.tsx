import {
  Route,
  Switch
} from "react-router-dom"
import Diagram from "./pages/Diagram/Diagram"

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Diagram} />
  </Switch>

)


export default AppRoutes