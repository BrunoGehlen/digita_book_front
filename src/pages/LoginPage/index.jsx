import { LoginPageStyles } from './style'
import LoginForm from '../../components/forms/LoginForm'
import LoginPageDecorationImage from '../../components/images/LoginPageDecorationImage'

const LoginPage = () => {
    return (
        <>
            <LoginPageStyles>
                <LoginPageDecorationImage />
                <LoginForm />
            </LoginPageStyles>
        </>
    )
}

export default LoginPage
