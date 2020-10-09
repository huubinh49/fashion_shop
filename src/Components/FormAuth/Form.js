import React, {useState, useRef} from 'react'
import './Form.scss'
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import * as authActions from '../../Redux/authenticate/auth_action'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
function Form(props){
    const {mode} = props.match.params

    const inputRef = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ])
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
        let validForm = true;
        Object.values(errorMessages).forEach(mess =>{
            if(mess.length){
                validForm = false;
            }
        })

        if(validForm && mode === 'signup'){
            let formData = new FormData();
            for (let i = 0; i < inputRef.current.length; i++) {
                if(inputRef.current[i].current){
                    const name = inputRef.current[i].current.name;
                    formData.append(name, formValue[name]);
                }
            }
            formData.append('username', formValue['firstname']+formValue['lastname'])
            
            formData.append('email', formValue['email'])
            formData.append('password1', formValue['password1'])
            formData.append('password2', formValue['password2'])
            dispatch(authActions.authSignup(formData))
            
        }else if(validForm && mode === 'signin'){
            let formData = new FormData();
            formData.append('email', formValue['email'])
            formData.append('password1', formValue['password1'])
            dispatch(authActions.authLogin(formData.get('email'), formData.get('password1')));
        }
        props.history.push('/account');
    }   
    const handleResultOAuth = (response, provider) => {
        dispatch(authActions.OAuthLogin(response,provider))
    }
    return(
        <section className = "account">
            {(mode==='signup')?
            <div className = "account_signup">
                <h3 className = "title">Create Account</h3>
                <form onSubmit = {onSubmitForm}>
                    <InputField ref = {inputRef.current[0]} rules = "required|max:50" onChange = {onChangeForm} type = "text" label = "First Name" name = "firstname"/>
                    <InputField ref = {inputRef.current[1]} onChange = {onChangeForm} type = "text" label = "Last Name" name = "lastname" />
                    <InputField ref = {inputRef.current[2]} onChange = {onChangeForm} type = "email" label = "Email Address" name = "email" />
                    <InputField ref = {inputRef.current[3]} rules = "required|max:50" onChange = {onChangeForm} type = "password" label = "Password" name = "password1" />
                    <InputField ref = {inputRef.current[4]} rules = "confirmPassword|required|max:50" onChange = {onChangeForm} type = "password" password = {formValue['password1']} label = "Confirm Password" name = "password2" />

                    <button className = "button button__submit" type="submit">CREATE ACCOUNT</button>
                    <p>Already have an account?</p>
                    <a href = "/account/signin" className = "button button__signin">SIGN IN</a>
                    <p>Or create an account with</p>
                    <button className = "button button__socialLink facebookLink">Facebook <i className="fa fa-facebook" aria-hidden="true"></i></button>
                    <button className = "button button__socialLink googleLink">Google <i className="fa fa-google" aria-hidden="true"></i></button>

                </form>
            </div>:(mode==='signin')?
            <div className = "account_signin">
                <h3 className = "title">Login</h3>
                <form  onSubmit = {onSubmitForm}>
                    <InputField ref = {inputRef.current[0]} rules = "required|max:50" onChange = {onChangeForm} type = "email" label = "Email Address" name = "email" />
                    <InputField ref = {inputRef.current[1]} rules = "required|max:50" onChange = {onChangeForm} type = "password" label = "Password" name = "password1" />

                    <a className = "lost_password" href = "/reset/password">Lost your password?</a>
                    <button className = "button button__submit" type="submit">SIGN IN</button>
                    <a href = "/account/signup" className = "button button__signin">CREATE ACCOUNT</a>
                    <p>Or login with</p>
                    <FacebookLogin
                        appId = "669828326988343"
                        cssClass = "button button__socialLink facebookLink"
                        textButton = "Login with Facebook"
                        callback = {(res)=>handleResultOAuth(res, 'facebook')}
                        icon = "fa fa-facebook"
                        fields = "email, first_name, last_name"
                    ></FacebookLogin>
                    <GoogleLogin
                      clientId="165049280458-01beqj9i1gc4jr8trsjtr5pgk83p41p3.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      icon = {true}
                      render={renderProps => (
                        <div onClick = {renderProps.onClick} disabled={renderProps.disabled} className = "button button__socialLink googleLink">Login with Google<i className="fa fa-google" aria-hidden="true"></i></div>
                      )}
                      onSuccess={(res)=>handleResultOAuth(res, 'google-oauth2')}
                      onFailure={(res)=>handleResultOAuth(res, 'google-oauth2')}
                      cookiePolicy={'single_host_origin'}
                    />,
                    
                </form>
            </div>:
            <div></div>
            }
        </section>
    )
}
export default Form;