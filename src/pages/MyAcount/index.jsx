import { MainContainerPage, MyProfileContainer, InfoContainer, ProfileImg, ProfileName, ProfileDescription } from "./style"


import MiniDrawer from "../../components/UI/Menu"

const MyAcount = () => {
    return (<MainContainerPage>
        <MiniDrawer />
        <MyProfileContainer>
            <InfoContainer>
                <ProfileImg src="https://picsum.photos/200/300"></ProfileImg>
                <ProfileName>Eliabe Santos</ProfileName>
                <ProfileDescription>Bla bla blaBla bla bla Bla bla bla Bla bla bla</ProfileDescription>
            </InfoContainer>
        </MyProfileContainer>
    </MainContainerPage>)
}

export default MyAcount