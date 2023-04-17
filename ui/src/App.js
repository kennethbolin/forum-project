import './App.css';
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import ForumThread from './views/ForumThread';
import {Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './themeContext'
import ThreadComments from './views/ThreadComments';
import Login from './views/Login';
import EventPage from './views/Calendar';




function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/thread" element={<ForumThread/>}></Route>
            <Route path="/thread/:thread_id/comments" element={<ThreadComments/>}></Route>
            {/* <Route path="/user/:username" element={<UserProfile/>}/> */}
            <Route path="/calendar" element={<EventPage/>}></Route>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/user/logout" element={<Logout/>}/> */}
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
