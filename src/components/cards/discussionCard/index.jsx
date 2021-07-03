import { MainContainer, TitleContainer, DiscussionTitle, DiscussionTags,DiscussionOwner, DiscussionPreview } from "./style"

const DiscussionCard = () => {
    return (<>
        <MainContainer>
            <TitleContainer>
                <DiscussionTitle>Sei la mano um bagulho ae</DiscussionTitle>
                <DiscussionTags>tag1 tag2 tag3</DiscussionTags>
            </TitleContainer>
            <DiscussionOwner>Um louco ae</DiscussionOwner>
            <DiscussionPreview>Discussao braba Discussao braba
            Discussao braba Discussao braba Discussao braba Discussao braba
            Discussao braba Discussao braba Discussao braba
            </DiscussionPreview>
        </MainContainer>
    </>)
}

export default DiscussionCard