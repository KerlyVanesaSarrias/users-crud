import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";
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
                <span className="card_icon">  <MdOutlineMailOutline />  {user.email}</span>
            </li>
            <li className="card_items">
                <span className="card_details"> Birthday</span>
                <span> <IoGiftOutline /> {user.birthday}</span>
            </li>
        </ul>
        <hr className="user_card_line"></hr>
        <div className="card_container_btns">
        <button className="card_btn  btn_delete"  onClick={handleDelete}><RiDeleteBin5Line /> </button> 
        <button className="card_btn  btn_edit" onClick={handleEdit}><FiEdit3/> </button>
        </div>
    </article>
    )
}

export default UserCard