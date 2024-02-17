import React from 'react'
import Login from './components/login/login'
import { useSelector } from 'react-redux'
import { selectUser } from './feature/userSlice'
import Logout from './components/logout/logout'

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className='App'>
        {
          user? <Logout/> : <Login/>
        }
      <Login/>
    </div>
  )
}

export default App
