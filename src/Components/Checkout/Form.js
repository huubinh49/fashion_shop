import React, { useRef, useState } from 'react'
import BillAPI from './../../API/billAPI'
import InputField from '../FormAuth/InputField'
import {cleanCart} from './../../Redux/Cart/cart_action'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
export default function Form(props){
    
    const inputRef = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ])
    const history = useHistory();
    const [formValue, setFormValue] = useState({})
    const [errorMessages, setErrorMessages] = useState({})
    const dispatch = useDispatch();

    const onChangeForm = (field, value, errorMessage)=>{
        setFormValue(prevForm =>({
            ...prevForm,
            [field]:value
        }))

        setErrorMessages(prevForm =>({
            ...prevForm,
            [field]:errorMessage
        }))
    }
    const onSubmitForm = (event)=>{
        event.preventDefault();
        for(let i = 0; i<inputRef.current.length; i++){
            if(inputRef.current[i].current){
                inputRef.current[i].current.validate();
            }
        }
        Object.values(errorMessages).forEach(mess =>{
            if(mess.length){
                return;
            }
        })
        
        let formData = new FormData();

        formData.append('username', formValue['firstname']+formValue['lastname'])

        for (let i = 2; i < inputRef.current.length; i++) {
            if(inputRef.current[i].current){
                const name = inputRef.current[i].current.name;
                formData.append(name, formValue[name]);
            }
        }
        if(localStorage.getItem('cart').length)
        BillAPI
        .post(formData)
        .then(
            res=>dispatch(cleanCart())
        )
        .then(
            res => {
                history.push('/account');
            }
        )
        .catch(
            err => alert(err)
        )
       
    }   
    return(
        <form className = "checkout__form" onSubmit = {onSubmitForm}>
            <InputField placeholder = "First Name" rules = "required|max:50" ref = {inputRef.current[0]} onChange = {onChangeForm} type = "text" label = "First Name" name = "firstname" />
            <InputField placeholder = "Last Name" rules = "required|max:50" ref = {inputRef.current[1]} onChange = {onChangeForm} type = "text" label = "Last Name" name = "lastname" />
            <InputField placeholder = "Address" rules = "required" ref = {inputRef.current[2]} onChange = {onChangeForm} type = "text" label = "Address" name = "address" />
            <InputField placeholder = "Phone Number" rules = "required" ref = {inputRef.current[3]} onChange = {onChangeForm} type = "tel" label = "Phone" name = "phone" />

            <button>Confirm Bill</button>
        </form>
    )
}