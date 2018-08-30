import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

class LoaderMolecule extends Component {
  render() {
    return (
      <LoaderWrapper>
        <LoaderBounce />
        <SecondLoaderBounce />
      </LoaderWrapper>
    );
  }
}

const BounceFrames = keyframes`
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
`;

const LoaderWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

const LoaderBounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${BounceFrames} 2s infinite ease-in-out;
  animation: ${BounceFrames} 2s infinite ease-in-out;
`;

const SecondLoaderBounce = styled(LoaderBounce)`
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;

export default LoaderMolecule;
