import { BsArchive} from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser,setUserEdit,handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users/', user.id)
    }

    const handleEdit = () => {
        setUserEdit(user)
        handleOpenForm()
    }

    return (
    <article className="container_card">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className="user_card_line"></hr>
        <ul>
            <li className="card_items">
                <span className="card_details"> Email</span>
                <span>  <MdOutlineMailOutline />  {user.email}</span>
            </li>
            <li className="card_items">
                <span className="card_details"> Birthday</span>
                <span> <LiaBirthdayCakeSolid /> {user.birthday}</span>
            </li>
        </ul>
        <hr className="user_card_line"></hr>
        <div className="card_btns">
        <button  onClick={handleDelete}><BsArchive /> </button> 
        <button onClick={handleEdit}><FiEdit3/> </button>
        </div>
    </article>
    )
}

export default UserCard