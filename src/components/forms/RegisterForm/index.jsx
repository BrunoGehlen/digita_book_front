import { Input } from "antd"
import "antd/dist/antd.css"

import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import {
    FormStyles,
    InputLayout,
    LoginHeader,
    Inputs,
    LoginButton
} from "./style"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const RegisterForm = () => {
    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            "&$checked": {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />)

    const [state, setState] = React.useState({
        checkedG: true,
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
        username: yup.string().required(),
        confirmPassword: yup.string().required(),
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const handleForm = async (data) => {
        console.log(data)
    }

    return (
        <FormStyles>
            <InputLayout>

                <LoginHeader>
                    <h2>Register</h2>
                    <h4>Or <i>Sign in</i></h4>
                </LoginHeader>

                <Inputs onSubmit={handleSubmit(handleForm)}>
                    <Input
                        type="text"
                        placeholder="Name or username"
                        name="username"
                        label="username"
                        {...register("username")}
                    />
                    {errors?.email && <p type="warning">{errors?.email.message}</p>}
                    <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        {...register("email")}
                    />
                    <Input
                        type="text"
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                    />
                    <Input
                        type="text"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        {...register("confirmPassword")}
                    />
                    <FormControlLabel
                        control={(
                            <GreenCheckbox
                                checked={state.checkedG}
                                onChange={handleChange}
                                name="checkedG"
                            />
                        )}
                        label={<span>I accept the <i>Tems of Use</i> & <i>Privacy Policy</i></span>}
                    />
                    <button style={{ margin: 0, visibility: 'hidden', height: 0, width: 0 }} type="submit" ></button>
                    <LoginButton onClick={handleSubmit(handleForm)} type="primary">Login</LoginButton>
                </Inputs>
            </InputLayout>
        </FormStyles>
    )
}

export default RegisterForm

