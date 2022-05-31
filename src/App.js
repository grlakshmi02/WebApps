import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Groups from './features/groupComponent/Groups';
import Home from './features/homeComponent/Home';
import Invite from './features/invitecomponent/Invite';
import Login from './features/loginComponent/Login';
import Settings from './features/settingsComponent/Settings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/invite' element={<Invite />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
