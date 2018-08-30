import styled from "styled-components";

const SectionAtom = styled.div`
  padding: 10px 10px 10px 10px;
  padding-top: ${props => (props.lower ? "0px" : "10px")};
`;

export default SectionAtom;
