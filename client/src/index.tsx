import {FC, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {MetaMaskProvider} from 'metamask-react'

import {EntryRoute} from 'routes/EntryRoute'
import {ProtectedRoute} from 'routes/ProtectedRoute'
import { SignIn } from 'pages/SignIn';
import { Home } from 'pages/Home';

import {sitemap} from './sitemap';
import reportWebVitals from './reportWebVitals';

const App: FC = () => (
  <Switch>
    <ProtectedRoute exact path={sitemap.home}>
      <Home />
    </ProtectedRoute>

    <EntryRoute exact path={sitemap.signIn}>
      <SignIn />
    </EntryRoute>

    <Route path="*">
      <div>Not found</div>
    </Route>
  </Switch>
)

ReactDOM.render(
  <StrictMode>
    <MetaMaskProvider>
      <Router>
        <App />
      </Router>
    </MetaMaskProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
