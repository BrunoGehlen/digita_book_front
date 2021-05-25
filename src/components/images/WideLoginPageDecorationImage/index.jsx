import {
    DecorationImage
} from './style'
import { useEffect, useState } from 'react'

const WideLoginPageDecorationImage = () => {
    const [wideImage, setWideImage] = useState('')

    useEffect(() => {
        const images = [
            'https://www.sbma.net/sites/default/files/styles/content_slide/public/image_slides/spac1.jpg?itok=YlAFq3Yg',
            'https://i.pinimg.com/originals/24/52/ec/2452eca810ce53c8c360dee8f00f485c.png',
            'https://cdn.dribbble.com/users/2612952/screenshots/9479915/media/4aa681bd5d6e05d30b38f4bb9c02c0c6.jpg?compress=1&resize=400x300',
            'https://www.telegraph.co.uk/content/dam/books/2015-10/jim-kay-interview/jim-kay-harry-potter-cupboard.jpg',
            'https://cdn.discordapp.com/attachments/821914407260258335/845331295919669348/4ba66968adb7ce98d13a3920694e3655.png',
        ]
        setWideImage(images[Math.floor(Math.random() * images.length)])
    }, [])
    
    return (
        <>
            <DecorationImage
                src={wideImage}
                alt={'Decoration'}
            />
        </>
    )
}

export default WideLoginPageDecorationImage
