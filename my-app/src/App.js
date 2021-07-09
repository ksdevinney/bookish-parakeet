import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
        <AllMeetups />
      </Route>
      <Route path='/new'>
        <NewMeetups />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
