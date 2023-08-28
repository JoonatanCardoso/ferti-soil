import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
`

export const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.5);
  a {
    text-decoration: none;
  }
`

export const ButtonAction = styled.div`
  display: flex;
  margin-right: 30px;
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 50px;
  flex: 1;

  @media screen and (max-width: 910px) {
    flex-direction: column;
  }
`

export const Banner = styled.div`
`

export const Background = styled.img`
  height: auto;
  width: 100%;
  `

