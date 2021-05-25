import {
    IllustrationsDecoration
} from './style'

import oldBooks from '../assets/books.png'
import lighter from '../assets/light.png'
import littlePrince from '../assets/little_prince.png'
import Moon from '../assets/moon_image.png'

const Illustrations = () => {
    return (
        <IllustrationsDecoration>
            <img
                src={Moon}
                alt={''}
            />
            <img
                src={littlePrince}
                alt={''}
            />
            <img
                src={oldBooks}
                alt={''}
            />
        </IllustrationsDecoration>
    )
}

export default Illustrations