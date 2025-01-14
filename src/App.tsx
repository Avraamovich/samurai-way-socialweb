import './App.css';
import { Header } from './layout/header/Header';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Content } from './layout/content/Content';
import { Footer } from './layout/footer/Footer';
import { Dialogs } from './components/chats/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/home' render={ ()=> <Content/>} />
          <Route path='/message' render={ ()=> <Dialogs
              dialogsData={props.dialogsData}
              messagesData={props.messagesData} />} />
          <Route path='/news' render={ ()=> <News/>} />
          <Route path='/music' render={ ()=> <Music/>} />
          <Route path='/settings' render={ ()=> <Settings/>} />
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
