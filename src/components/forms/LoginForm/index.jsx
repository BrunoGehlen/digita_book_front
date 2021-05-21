import { Input } from 'antd'
import 'antd/dist/antd.css'

import {
    FormStyles,
    InputLayout,
    SocialLoginStyles
} from './style'

import {
    FacebookLoginButton,
    GoogleLoginButton,
    InstagramLoginButton,
    TwitterLoginButton
} from "react-social-login-buttons"

const LoginForm = () => {
    return (
        <FormStyles>
            <InputLayout>
                <p>Login Form...</p>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                
                <SocialLoginStyles>

                    <FacebookLoginButton iconSize="16px" size="42px">
                        <span style={{ fontSize: 16 }}>Login with facebook</span>
                    </FacebookLoginButton>

                    <GoogleLoginButton iconSize="16px" size="42px">
                        <span style={{ fontSize: 16 }}>Login with Google</span>
                    </GoogleLoginButton>

                    <InstagramLoginButton iconSize="16px" size="42px">
                        <span style={{ fontSize: 16 }}>Login with Instagram</span>
                    </InstagramLoginButton>

                    <TwitterLoginButton iconSize="16px" size="42px">
                        <span style={{ fontSize: 16 }}>Login with Twitter</span>
                    </TwitterLoginButton>

                </SocialLoginStyles>
            </InputLayout>
        </FormStyles>
    )
}

export default LoginForm

