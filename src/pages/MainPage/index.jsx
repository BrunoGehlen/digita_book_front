import {MainContainerPage,ContentContainer} from "./style"

import DiscussionCard from "../../components/cards/discussionCard"

import MiniDrawer from "../../components/UI/Menu"

const MainPage = () => {
    return (<>
        <MainContainerPage>
            <ContentContainer>
                <DiscussionCard />
            </ContentContainer>
            
        </MainContainerPage>
    </>)
}

export default MainPage
