import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Banner = styled(Grid)`
  /* background-image: url('images/Banner.png'); */
  height: 120vh;
  width: auto;
`

export const Image = styled.img`
  height: 100px;
  width: auto;
  `

export const ImageMobile = styled.img`
  height:50px;
  width: auto;
  `

export const MenuDeskLeft = styled.div`
  gap: 2rem;

  @media (max-width: 768px) {
    .logo {
      width: 180px;
    }
  }

  .itensForDesktopLeft {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const MenuDeskCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;

  .itensCenter {
    display: none;
  }

  @media (min-width: 1440px) {
    .itensCenter {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  }
`;

export const MenuDeskRight = styled.div`
  .menuBurger {
    max-width: 10px;
  }
  @media (min-width: 1440px) {
    .menuBurger {
      display: none;
    }
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 900;
`

export const Text = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 26px;
`