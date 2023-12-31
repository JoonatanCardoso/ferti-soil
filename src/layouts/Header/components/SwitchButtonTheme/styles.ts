import styled, { css } from 'styled-components'

export const ContentIcon = styled.div<{ triggerAnimation: boolean }>`
  ${(props) =>
    props.triggerAnimation &&
    css`
      -webkit-animation: rotate-scale-down 0.65s linear both;
      animation: rotate-scale-down 0.65s linear both;
      transition: all rotate-scale-down 0.65s linear both;
    `}

  @-webkit-keyframes rotate-scale-down {
    0% {
      -webkit-transform: scale(1) rotateZ(0);
      transform: scale(1) rotateZ(0);
    }
    50% {
      -webkit-transform: scale(0.5) rotateZ(180deg);
      transform: scale(0.5) rotateZ(180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateZ(360deg);
      transform: scale(1) rotateZ(360deg);
    }
  }
  @keyframes rotate-scale-down {
    0% {
      -webkit-transform: scale(1) rotateZ(0);
      transform: scale(1) rotateZ(0);
    }
    50% {
      -webkit-transform: scale(0.5) rotateZ(180deg);
      transform: scale(0.5) rotateZ(180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateZ(360deg);
      transform: scale(1) rotateZ(360deg);
    }
  }
  color: 'black';
`
