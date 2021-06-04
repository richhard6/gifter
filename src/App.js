import Header from './components/Header/Header';
import Home from 'pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import Detail from 'components/Detail/Detail';
import './App.css';

import { Route, Switch } from 'wouter';
import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';
import SearchResults from 'pages/SearchResults';
import ErrorPage from 'pages/Error';

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <GifsContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?/:type?"
            ></Route>
            <Route component={LoginPage} path="/login"></Route>
            <Route component={RegisterPage} path="/register"></Route>
            <Route component={Detail} path="/gif/:id" />
            <Route component={ErrorPage} path="/:rest*"></Route>
          </Switch>
        </GifsContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
