import styled from 'styled-components';

export const Container  = styled.div`
    width: 100% ;
`

export const Header = styled.p`
font-weight: 600 ;
color: gray ;
margin-bottom: 3px;
`

export const Section = styled.div<{mb?:boolean}>`
margin-bottom: ${({mb}) => mb ? '30px' : ''};
min-width: 250px ;
`


export const SectionHeader = styled.div``

export const LeftSection = styled.div`
width: 48% ;

@media(max-width: 500px) {
        width: 100% ;
    }
`

export const Result = styled.div`
width: 100% ;
padding: 10px;
border: 1px solid;
border-radius: 5px ;
`

export const Content = styled.div`
display: flex ;
flex-wrap: wrap ;
width: 100% ;
justify-content: space-between ;

`