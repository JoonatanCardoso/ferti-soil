import { Grid } from '@mui/material'
import styled from 'styled-components'

export const GridBackground = styled(Grid)`
 background-image: url('/images/BackgroundPassos.jpg');
 min-height: 100%;
 width: auto;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
`

export const ImageIcon = styled.img`
  padding: 20px;
  width: 80px;
  height: auto;
`

export const Title = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 900;
`

export const SubTitle = styled.div`
  color: black;
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
`

export const Text = styled.div`
  color: black;
  margin-top: 10px;
  font-size: 26px;
`

export const TextCard = styled.div`
  color: black;
  font-size: 18px;
`
