
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  const BASEURL = 'https://users-crud-fullstack-t36c.onrender.com'
  const [users, getUsers, createUser, deleteUser,updateUser] =  useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])
  
const handleOpenForm = () => {
  setFormIsClose (false)
}

  return (
      <div className='app'>
        <header className='app_header'>
          <h1 className='app_title'>Users</h1>
          <button onClick={handleOpenForm} className='form_btn btn_create'> + Create new user</button>
        </header>
        <FormUsers
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
        />
        <div className='user_container'>
          {
            users?.map(user => (
              <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
              handleOpenForm={handleOpenForm}
              />
            ))
          }
        </div>
      </div>

  )
}

export default App
