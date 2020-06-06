import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../theme/defaultStyles';

const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    ${FlexColumn}

    background-color: #DBE0E6;

    form {
        width: 460px;
        height: 500px;
        border: 1px solid #000000;
        margin: auto;

        background-color: #39486C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        border: none;

        ${FlexColumn}

        p {
            margin: 3% auto;
            color: red;
            font-size: 18px;
        }

        .new-user{
            color: white;
            margin: 0% auto;
        }

        input {
            margin: 3% auto;
            width: 300px;
            height: 60px;
            background: #FFFFFF;
            border: 1px solid #C4C4C4;
            box-sizing: border-box;
            border-radius: 20px;

            padding: 5%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            transition: all 0.3s linear;

            ::placeholder{
                line-height: 30px;
                letter-spacing: 0.1em;

                color: #C4C4C4;
            }

            :focus{
                border-radius: 0;
            }
        }

        button {
            margin: 10% auto;
            width: 300px;
            height: 60px;
            background-image: linear-gradient(to right top, #9b3605, #9f2d1f, #9f2732, #9b2543, #932952, #943263, #923d73, #8f4782, #94589b, #976ab3, #977ccc, #938fe3);
            border: none;
            border-radius: 50px;

            color: white;
            font-size: 120%;
            line-height: 30px;
            letter-spacing: 0.1em;

            transition: all 0.1s linear;
            outline: none;

            :hover{
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    }
`;



const Login = () => {

    let _password = '';
    let _email = '';
    let _errors = {
        password: '',
        email: '',
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
            _email.length === 0) {
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
        <StyledLogin>
            <form>
                <p className="formError">{formError}</p>

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
                    <button onClick={onFormSubmit}>login</button>
                </div>
                <p className="new-user">new user? <u>sign up</u></p>
            </form>
        </StyledLogin>
    );
}

export default Login;