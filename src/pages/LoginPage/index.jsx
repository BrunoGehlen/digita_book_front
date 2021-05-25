import { LoginPageStyles } from './style'
import LoginForm from '../../components/forms/LoginForm'
import WideLoginPageDecorationImage from '../../components/images/WideLoginPageDecorationImage'
import Illustrations from '../../components/images/Illustrations'
import NarrowLoginPageDecoration from '../../components/images/NarrowLoginPageDecoration'
import { useLocation } from "react-router-dom"
import RegisterForm from '../../components/forms/RegisterForm'

const LoginPage = () => {
    const { pathname } = useLocation()

    return (
        <>
            {
                pathname.includes('/register') &&
                <LoginPageStyles>
                    <div>
                        <WideLoginPageDecorationImage />
                        <NarrowLoginPageDecoration />
                        <Illustrations />
                    </div>
                    <RegisterForm />
                </LoginPageStyles>
            }
            {
                pathname.includes('/login') &&
                <LoginPageStyles>
                    <div>
                        <WideLoginPageDecorationImage />
                        <NarrowLoginPageDecoration />
                        <Illustrations />
                    </div>
                    <LoginForm />
                </LoginPageStyles>
            }
        </>
    )
}

export default LoginPage
