import React, { useState } from 'react';
import StyledSignUp from './styles/styledSignUp';
import { Link } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    let _password = '';
    let _email = '';
    let _firstname = '';
    let _lastname = '';
    let _errors = {
        password: '',
        email: '',
        name: ''
    }

    const [formError, setFormError] = useState('');

    const onBlurHandler = ({ target }) => {
        switch (target.name) {
            case "password":
                if (target.value.length === 0 || target.value.length < 6) {
                    _errors.password = 'Password should be atleast 6 characters'
                    break
                }
                _password = target.value;
                break;

            case "email":
                let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (pattern.test(target.value)) {
                    _email = target.value;
                    _errors.email = '';
                    break;
                }
                else {
                    _errors.email = 'Invalid email'
                    break
                }

            case "firstname":
                if (target.value.length === 0) {
                    _errors.name = 'Name cannot be empty'
                    break
                }
                _errors.name = '';
                _firstname = target.value;
                break;


            case "lastname":
                if (target.value.length === 0) {
                    _errors.name = 'Name cannot be empty'
                    break
                }
                _errors._lastname = '';
                _lastname = target.value;
                break;

            default:
                break;
        }

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        let validity = true;
        Object.values(_errors).map(element => {
            if (element.length > 0) {
                validity = false;
            }
        })

        if (_password.length === 0 ||
            _email.length === 0 ||
            _firstname.length === 0 ||
            _lastname.length === 0) {
            validity = false;
        }

        if (validity === false) {
            setFormError('Please provide valid information');
            return;
        }

        setFormError('');
        
        let user = {
            firstname: _firstname,
            lastname: _lastname,
            emailId: _email,
            password: _password
        }

        axios.post(
            'http://localhost:3000/signup',
            { ...user }
        ).then(response => console.log(`response = ${JSON.stringify(response)}`))
        .catch(err => console.log(`err = ${JSON.stringify(err)}`));
        //TODO Redirect user to login page
    }



    return (
        <StyledSignUp>
            <div className="login-context">
                <div>
                    <p>Sign Up</p>
                    <p>
                        Schedule a pick up, bookmark
                        your favourites or be the first
                        one to know about our
                        new items!
                    </p>
                </div>
            </div>
            <div className="login-form">
            <form>
                <p className="formError">{formError}</p>

                <input type="text"
                    placeholder="first name"
                    name="firstname"
                    onBlur={onBlurHandler}
                    required
                />


                <input type="text"
                    placeholder="last name"
                    name="lastname"
                    onBlur={onBlurHandler}
                    required
                />

                <input type="email"
                    placeholder="email"
                    name="email"
                    onBlur={onBlurHandler}
                    required
                />

                <input type="password"
                    placeholder="password"
                    name="password"
                    onBlur={onBlurHandler}
                    required
                />

                <div className="contact-form-input">
                    <button onClick={onFormSubmit}>sign up</button>
                </div>

                <p className="login-link">already a user? &nbsp;
                        <Link to="/login">
                            sign in!
                        </Link>
                        
                </p>

            </form>
            </div>
        </StyledSignUp>
    );
}

export default SignUp;