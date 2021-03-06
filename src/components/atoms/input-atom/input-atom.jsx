import styled from "styled-components";

const InputAtom = styled.input`
  border: 2px solid gray;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-color: ${props => (props.isValid ? "gray" : "red")};
`;

export default InputAtom;
