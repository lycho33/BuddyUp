import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import { autoLogin } from './redux/action'
import { allUsers } from './redux/action'
import ConvoForm from './Components/Conversation/ConvoForm'
import Conversations from './Components/Conversation/Conversations';
import ConversationRoom from './Components/Conversation/ConversationRoom';
import WordBank from './Components/WordBank/WordBank';
import { getConvoData } from './redux/action'


function App({ autoLogin, allUsers, cableApp }) {

  // const currentUser = useSelector(state => state.user)

  useEffect(() => {
    autoLogin()
  }, [])
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/conversations' element={<Conversations />} />
        <Route exact path='/conversations/new' element={<ConvoForm />} />
        <Route exact path='/conversations/:id' element={<ConversationRoom cableApp={cableApp} />} />
        <Route exact path='/wordbank' element={<WordBank />} />
      </Routes>
    </div>
  );
}

export default connect(null, { autoLogin, allUsers, getConvoData })(App);
