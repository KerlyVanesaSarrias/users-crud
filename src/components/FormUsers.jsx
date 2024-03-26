import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({createUser, userEdit, updateUser, setUserEdit}) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        reset(userEdit)
    }, [userEdit])

    const submit = data => {
        if(userEdit) {
            updateUser('/users/', userEdit.id, data)
            setUserEdit()
        } else{
            createUser('/users/', data)
        }
    
        reset ({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday: '',
        })
    }

    return (

        <form onSubmit={handleSubmit(submit)}>

            <label>
                <span>Email</span> 
                <input {...register('email')}  type="email" />
            </label>

            <label>
                <span>Password</span>
                <input {...register('password')}  type="password" />
            </label>

            <label>
                <span>First Name</span>
                <input {...register('first_name')} type="text" />
            </label>

            <label>
                <span>Last name</span>
                <input {...register('last_name')} type="text" />
            </label>

            <label>
                <span>birthday</span>
                <input {...register('birthday')} type="date" />
            </label>

            <button>Submit</button>

        </form>
    )
}

export default FormUsers