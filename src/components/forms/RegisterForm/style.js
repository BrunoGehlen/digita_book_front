import styled from 'styled-components'
import { Button } from 'antd'


export const FormStyles = styled.div`

    @media screen and (max-width: 1023px) {
        max-width: 95vw;
        width: 95vw;
    }

    margin: auto;
    display: flex;
    justify-content: center;
    width: 80vw;
    max-width: 55vw;
    height: 100vh;
`

export const LoginHeader = styled.div`
    margin: 4vh 0 10px 0;

    h2 {
        font-size: 5vh;
        margin: 0;
    }

    h4 {
        font-size: 2.5vh;
        margin: 0;
    }
`

export const InputLayout = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    div > input {
        margin: 28px 0 0 0;
        padding: 1.5vh;
        border: 2px solid #2f2f2f;
    }
    div > input::placeholder {
        font-size: 2.4vh;
        color: #323738;
    }
`

export const Inputs = styled.form`
    height: 45vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

export const LoginButton = styled(Button)`
    width: 100%;
    height: 6.5vh;
    font-size: 2.6vh;
    margin: 4vh 0 0 0;
`
