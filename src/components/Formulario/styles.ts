import { Button, Grid, TextField } from '@mui/material'
import styled from 'styled-components'

export const GridBackground = styled(Grid)`
 background-image: url('/images/BackgroundFormulario.svg');
 min-height: 100%;
 width: auto;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
`

export const GridForm = styled(Grid)`
 background-color: #fff;
`

export const ImageForm = styled.img`
 max-width: auto;
 height: auto;

 @media only screen and (max-width: 499px) {
  max-width: 280px
 }

 @media only screen and (min-width: 500px) and (max-width: 699px) {
  max-width: 350px
 }

 @media only screen and (min-width: 700px) and (max-width: 1199px) {
  max-width: 600px
 }

 @media only screen and (min-width: 1200px) and (max-width: 1700px) {
  max-width: 320px
 }
`

export const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 900;
`

export const SubTitle = styled.div`
  color: black;
  font-size: 22px;
`

export const TextImg = styled.div`
  color: black;
  font-weight: 600;
  font-size: 18px;
`

export const Text = styled.div`
  color: black;
  margin-top: 10px;
  font-size: 20px;
`

export const Input = styled(TextField)`
  color: black;
`

export const ButtonForm = styled(Button)`
  color: black;
`
