import React, { useState } from 'react';
import styled from 'styled-components';
import StyledSignUp from './styles/styledSignUp';



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

    const [showForm, setShowForm] = useState(true);
    const [isFormValid, setFormValid] = useState(false);
    const [formError, setFormError] = useState('');

    const onBlurHandler = ({ target }) => {
        // alert(target.name);
        switch (target.name) {
            case "password":
                if (target.value.length === 0) {
                    _errors.password = 'Password cannot be empty'
                    break
                }
                _password = target.value;
                break;

            case "email":
                let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (pattern.test(target.value)) {
                    _email = target.value;
                    break;
                }
                else {
                    _errors.email = 'Invalid email number'
                    break
                }

            case "firstname":
                if (target.value.length === 0) {
                    _errors.name = 'Name cannot be empty'
                    break
                }
                _firstname = target.value;
                break;


            case "lastname":
                if (target.value.length === 0) {
                    _errors.name = 'Name cannot be empty'
                    break
                }
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
            console.log(element);
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
            console.log(_errors);
            setFormError('Please provide valid information');
            return;
        }

        setFormError('');
        console.log('Form is valid');



        // const postData = {
        //     name: this._name,
        //     phone: this._phone,
        //     email: this._email,
        //     message: this._message,
        // }
        // axios.post(
        //     'https://oompqcn535.execute-api.ap-south-1.amazonaws.com/dev/api/nazara/submitform',
        //     { ...postData },
        //     { headers: { "x-api-key": "yGNijWbKAE63Ch84TtCVDaS53nLiko2y88Not6ht" } }

        // ).then(response => {
        //     console.log(response)
        //     this.setState({ showForm: false })
        // }).catch(err => console.error(err));

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

            </form>
            </div>
        </StyledSignUp>
    );
}

export default SignUp;