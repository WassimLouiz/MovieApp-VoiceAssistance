import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Header from './components/Header';
import NewHeader from './components/NewHeader';

import './App.css';
import SimpleBottomNavigation from './components/NavBarFooter';
import { Container } from '@mui/material';
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Search from "./Pages/Search/Search"
import Series from "./Pages/Series/Series"
import Login from "./Pages/SignIn/Login"
import Register from "./Pages/SignUp/Register"

function App() {
  return (
    <BrowserRouter>
    
      <Header/>
    
      <div className="App">
          <Container>
            <Switch>
              <Route path='/' component={Trending} exact/>
              <Route path='/Movies' component={Movies} />
              <Route path='/Series' component={Series} />
              <Route path='/Search' component={Search} />s
              <Route path='/Login' component={Login} />
              <Route path='/Register' component={Register} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation/>

    </BrowserRouter>
  );
}

export default App;
