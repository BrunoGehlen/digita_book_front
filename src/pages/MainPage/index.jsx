import {MainContainerPage,ContentContainer} from "./style"

import DiscussionCard from "../../components/cards/discussionCard"

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
