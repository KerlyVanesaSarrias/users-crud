
const UserCard = ({ user, deleteUser,setUserEdit }) => {

    const handleDelete = () => {
        deleteUser('/users/', user.id)
    }

    const handleEdit = () => {
        setUserEdit(user)
    }

    return (
    <article>
        <h2>{`${user.first_name}${user.last_name}`}</h2>
        <hr></hr>
        <ul>
            <li><span>Email</span><span>{user.email}</span></li>
            <li><span>Birthday</span><span>{user.birthday}</span></li>
        <hr></hr>
        </ul>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>

    </article>
    )
}

export default UserCard