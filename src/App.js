import React  from 'react';
import './App.css'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SiderDemo from './components/Menus';
import MainHeader from './components/MainHeader';
import ContentDemo from './components/pages/ContentDemo';
import Sites from './components/pages/sites';
import ApiTest from './components/pages/Api';
import sitePhotos from './components/pages/sitePhotos';
import LoginForm from './components/Login/login';
// import ApiTest from './components/pages/Api';
import { Layout} from 'antd';

function App() {
  return (
    <Router>
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <SiderDemo />
        <MainHeader/>
        <Switch>
          <Route path="/" exact/>        
          <Route path="/user" component={ContentDemo}/>
         <Route path="/sites" component={Sites} />
          <Route path="/sitePhotos" component={sitePhotos} />
         <Route path="/Api" component={ApiTest} />
         <Route path="/Login" component={LoginForm} />
        </Switch>
      </Layout>
    </div>
    </Router>
  );
}

export default App;


