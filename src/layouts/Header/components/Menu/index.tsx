import { Button, Grid, Link } from '@mui/material';
import * as i18n from 'react-i18next';

export function Menu() {
  const { t } = i18n.useTranslation('MENU')

  return (
    <Grid container alignItems='center' justifyContent='space-between'>
      <Grid px={5}>
        <Link href="#quem-somos" underline='none' sx={{color: 'black', }}>
          <Button sx={{color: 'black'}}>
              {t('QUEM_SOMOS')}
          </Button>
        </Link>
      </Grid>
      <Grid px={5}>
        <Link href="#planos" underline='none' sx={{color: 'black'}}>
          <Button sx={{color: 'black'}}>
            {t('PLANOS')}
          </Button>
        </Link>
      </Grid>
      <Grid px={5}>        
        <Link href="#treinamento" underline='none' sx={{color: 'black', }}>
        <Button sx={{color: 'black'}}>
          {t('TREINAMENTO')}
        </Button>
        </Link>
      </Grid>
      <Grid px={5}>        
        <Link href="#fale-conosco" underline='none' sx={{color: 'black', }}>
        <Button sx={{color: 'black'}}>
          {t('FALE_CONOSCO')}
        </Button>
        </Link>
      </Grid>
        
    </Grid>
  )
}
