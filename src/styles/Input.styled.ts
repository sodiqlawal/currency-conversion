import styled from "styled-components";

export const Input = styled.input<{isError?:boolean}>`
width: 100% ;
height: 30px;
padding: 10px;
border: 1px solid ${({isError}) => isError ? 'red' : 'black'} ;
border-radius: 5px ;
`


export const Error = styled.p`
color: red ;
font-size:12px ;
`