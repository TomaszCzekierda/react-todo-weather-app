import styled from "styled-components";

const ButtonAtom = styled.button`
  border: gray;
  background: gray;
  color: white;
  line-height: 40px;
  font-weight: bold;
  display: block;
  width: 100%;

  &:hover {
    background: lightgray;
  }
`;

export default ButtonAtom;
