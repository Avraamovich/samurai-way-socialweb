import './App.css';
import { Header } from './layout/header/Header';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Content } from './layout/content/Content';
import { Footer } from './layout/footer/Footer';
import { Dialogs } from './components/messages/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/home' component={Content} />
          <Route path='/message' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
