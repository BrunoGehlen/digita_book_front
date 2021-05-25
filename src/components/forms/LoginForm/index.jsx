import { Input } from 'antd'
import 'antd/dist/antd.css'

import {
    FormStyles,
    InputLayout,
    SocialLoginStyles,
    LoginHeader,
    Inputs,
    LoginButton,
} from './style'

import {
    FacebookLoginButton,
    GoogleLoginButton,
    InstagramLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons"


import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const LoginForm = () => {

    const schema = yup.object().shape({
        password: yup.string().required(),
        username: yup.string().required(),
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
                    <h2>Sign in</h2>
                    <h4>Or <i>register</i></h4>
                </LoginHeader>

                <Inputs onSubmit={handleSubmit(handleForm)}>
                    <Input
                        placeholder="Username"
                        name="username"
                        {...register("username")}
                    />
                    <Input
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                    />
                    <button style={{ height: 0, width: 0, margin: 0, visibility: 'hidden' }} type="submit" ></button>
                    <LoginButton onClick={handleSubmit(handleForm)} type="primary">Login</LoginButton>
                </Inputs>

                <SocialLoginStyles>
                    <FacebookLoginButton iconSize="3vh" size="7vh">
                        <span style={{ fontSize: "2.2vh" }}>Login with facebook</span>
                    </FacebookLoginButton>

                    <GoogleLoginButton iconSize="3vh" size="7vh">
                        <span style={{ fontSize: "2.2vh" }}>Login with Google</span>
                    </GoogleLoginButton>

                    <InstagramLoginButton iconSize="3vh" size="7vh">
                        <span style={{ fontSize: "2.2vh" }}>Login with Instagram</span>
                    </InstagramLoginButton>

                    <TwitterLoginButton iconSize="3vh" size="7vh">
                        <span style={{ fontSize: "2.2vh" }}>Login with Twitter</span>
                    </TwitterLoginButton>
                </SocialLoginStyles>
            </InputLayout>
        </FormStyles>
    )
}

export default LoginForm
