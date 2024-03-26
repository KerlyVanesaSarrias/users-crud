
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [userEdit, setUserEdit] = useState()

  const BASEURL = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser,updateUser] =  useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])
  
console.log(users)

  return (
      <div>
        <h1>User Crud</h1>
        <FormUsers
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        />
        <div>
          {
            users?.map(user => (
              <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
              />
            ))
          }
        </div>
      </div>

  )
}

export default App
