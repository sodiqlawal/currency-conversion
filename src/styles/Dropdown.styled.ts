import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 10px;
`;

export const Header = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  cursor: pointer;

  p {
      font-weight: 600 ;
      color: gray ;
  }

  small {
    color: rgb(33, 111, 237);
  }
`;

export const DropdownListCover = styled.div`
  box-shadow: 0 0 4px #cecece;
  padding: 10px 0;
  margin: 5px 0
`;

export const DropdownList = styled.p`
  margin: 10px;
  cursor: pointer;
`;
