import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';
import { Normal as NormalLayout, Dashboard as DashboardLayout } from './layout';
import HomeContent from './view/Home';
import SearchContent from './view/Search';

const App = () => {
  return (
    <Router>
      <Switch>
          <Redirect
            exact
            from="/"
            to={"/home"}
          />
          <RouteWithLayout
            component={HomeContent}
            exact
            path='/home'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={SearchContent}
            exact
            path='/search'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={SearchContent}
            exact
            path='/report'
            layout={DashboardLayout}
          />
        </Switch>
    </Router>
  )
}

export default App;