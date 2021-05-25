import styled from 'styled-components'

export const IllustrationsDecoration = styled.div`
    visibility: hidden;
    width: 0vw;
    height: 0vh;
    overflow: hidden;

    @media screen and (max-width: 685px) {
        width: 100vw;
        height: 100vh;
        visibility: visible;
        position: absolute;
        display: grid;
        grid-template-columns: 0vw 63vw 10vw;
        grid-template-rows: 12vh 64vh 0vh;
        z-index: -1;
        overflow: hidden;
        
        img:nth-child(1) {
            position: absolute;
            width: 300px;
            height: 300px;
            grid-column-start: 3;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        img:nth-child(2) {
            position: absolute;
            width: 200px;
            height: 200px;
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 3;
            grid-row-end: 3;

        }

        img:nth-child(3) {
            position: absolute;
            width: 200px;
            height: 200px;
            grid-column-start: 3;
            grid-column-end: 3;
            grid-row-start: 3;
            grid-row-end: 3;
        }
    }

    @media screen and (max-width: 1023px) and (min-width: 685px) {
        width: 100vw;
        height: 100vh;
        visibility: visible;
        position: absolute;
        display: grid;
        grid-template-columns: 0vw 60vw 0vw;
        grid-template-rows: 12vh 55vh 0vh;
        z-index: -1;
        overflow: hidden;
        
        img:nth-child(1) {
            position: absolute;
            width: 400px;
            height: 400px;
            grid-column-start: 3;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        img:nth-child(2) {
            position: absolute;
            width: 300px;
            height: 300px;
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 3;
            grid-row-end: 3;

        }

        img:nth-child(3) {
            position: absolute;
            width: 300px;
            height: 300px;
            grid-column-start: 3;
            grid-column-end: 3;
            grid-row-start: 3;
            grid-row-end: 3;
        }
    }
`