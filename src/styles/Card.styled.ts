import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(33, 111, 237) ;
    color: #fff ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    min-width: 250px ;
    width: 48% ;
    p {
        margin-bottom: 20px ;
    }

    @media(max-width: 500px) {
        width: 100% ;
    }
`