import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import style from './App.module.css';
import routes from './routes';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
