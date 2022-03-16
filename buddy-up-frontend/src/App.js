import './App.css';
import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
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
import { getConvoData } from './redux/action'


function App({ autoLogin, allUsers, cableApp, getConvoData }) {

  const currentUser = useSelector(state => state.user)
  const [state, setState] = useState({
    currentConvo: {
      currentUser: currentUser,
      convo: {},
      users: [],
      messages: []
    }
  })

  useEffect(() => {
    autoLogin()
  }, [])

  const updateAppStateRoom = (newConvo) => {
    setState({
      currentConvo: {
        convo: newConvo.convo.data,
        users: newConvo.users,
        messages: newConvo.messages
      }
    })
  }
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/conversations' element={<Conversations />} />
        <Route exact path='/conversations/new' element={<ConvoForm />} />
        <Route exact path='/conversations/:id' element={<ConversationRoom 
                                                            cableApp={cableApp} 
                                                            updateApp={updateAppStateRoom}
                                                            convoData={state}
                                                            setConvoData={setState}
                                                        />} />
      </Routes>
    </div>
  );
}

export default connect(null, { autoLogin, allUsers, getConvoData })(App);
