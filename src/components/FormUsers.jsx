import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUsers.css'
import Input from './Input'

const FormUsers = ({ createUser, userEdit, updateUser, setUserEdit, formIsClose, setFormIsClose }) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    useEffect(() => {
        reset(userEdit)
    }, [userEdit])

    const submit = data => {

        if (userEdit) {
            updateUser('/users/', userEdit.id, data)
            setUserEdit(data);
        } else {
            createUser('/users', data)
        }
        setFormIsClose(true)

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
    }

    const handleFormClose = () => {
        setFormIsClose(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
        setUserEdit()
    }

    return (
        <div className={`form_container ${formIsClose && 'form_close'}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <header className='form_header'>
                    <h2 className='form_title'> User Form</h2>
                    <div onClick={handleFormClose} className='form_exit'>x</div>
                </header>


                <Input
                    label={'First Name'}
                    type='text'
                    placeHolder={'Ej: Kerly'}
                    errorMessage={errors?.first_name?.message}
                    {...register('first_name', {
                        required: 'Name is required',
                    })}
                />


                <Input
                    label={'Last name'}
                    type='text'
                    placeHolder={'Ej: Sarrias'}
                    errorMessage={errors?.last_name?.message}
                    {...register('last_name', {
                        required: 'Last name is required',
                    })}
                />

                <Input
                    label={'Email'}
                    type='email'
                    placeHolder={'Ej: Kerly123@gmail.com'}
                    errorMessage={errors?.email?.message}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid email address",
                        }
                    })}
                />

                <Input
                    label={'Pasword'}
                    type='password'
                    placeHolder={'Ej:keS.123*'}
                    errorMessage={errors?.password?.message}
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[^\s]).{8,}$/,
                            message: "An uppercase letter, a lowercase letter, a number and a special character(!@#$%^&*(),.?)",
                        },
                        minLength: {
                            value: 8,
                            message: 'It must be a minimum of 4 characters.'
                        },
                    })}
                />

                <Input
                    label={'Birthday'}
                    type='date'
                    {...register('birthday', {
                        required: 'Birthday is required',
                    })}
                />


                <button className='form_btn'>Submit</button>

            </form>
        </div>
    )
}

export default FormUsers