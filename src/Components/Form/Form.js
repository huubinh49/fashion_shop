import React from 'react'
import './Form.scss'
function Form(props){
    const {mode} = props.match.params
    return(
        <section className = "account">
            {(mode==='signup')?
            <div className = "account_signup">
                <h4>Create Account</h4>
                <form>
                    <div className = 'form__input'>
                        <label for = "firstname">First Name</label>
                        <input type = "text" name = "firstname" />
                        <span className = "form__error">Nhap sai roi ne!</span>
                    </div>
                    <div className = 'form__input'>
                        <label for = "lastname">Last Name</label>
                        <input type = "text" name = "lastname" />
                        <span className = "form__error"></span>
                    </div>
                    <div className = 'form__input'>                        
                        <label for = "email">Email Address</label>
                        <input type = "email" name = "email" />
                        <span className = "form__error"></span>
                    </div>
                    <div className = 'form__input'>    
                        <label type = "password1">Password</label>
                        <input type = "password" name = "password1" />
                        <span className = "form__error"></span>
                    </div>
                    <div className = 'form__input'>    
                        <label type = "password2">Confirm Password</label>
                        <input type = "password" name = "password2" />
                        <span className = "form__error"></span>
                    </div>

                    <button className = "button button__submit" type="submit">CREATE ACCOUNT</button>
                    <p>Already have an account?</p>
                    <a href = "/account/signin" className = "button button__signin">SIGN IN</a>
                    <p>Or create an account with</p>
                    <button className = "button button__socialLink facebookLink">Facebook <i class="fa fa-facebook" aria-hidden="true"></i></button>
                    <button className = "button button__socialLink googleLink">Google <i class="fa fa-google" aria-hidden="true"></i></button>

                </form>
            </div>:(mode==='signin')?
            <div className = "account_signin">
                <h4>Create Account</h4>
                <form>
                    <div className = 'form__input'>                                        
                        <label for = "email">Email Address</label>
                        <input type = "email" name = "email" />
                        <span className = "form__error"></span>
                    </div>
                    <div className = 'form__input'>                        
                        <label type = "password">Password</label>
                        <input type = "password" name = "password" />
                        <span className = "form__error"></span>
                    </div>

                    <a className = "lost_password" href = "/reset/password">Lost your password?</a>
                    <button className = "button button__submit" type="submit">SIGN IN</button>
                    <a href = "/account/signup" className = "button button__signin">CREATE ACCOUNT</a>
                    <p>Or login with</p>
                    <button className = "button button__socialLink facebookLink">Facebook <i class="fa fa-facebook" aria-hidden="true"></i></button>
                    <button className = "button button__socialLink googleLink">Google <i class="fa fa-google" aria-hidden="true"></i></button>

                </form>
            </div>:
            <div></div>
            }
        </section>
    )
}
export default Form;