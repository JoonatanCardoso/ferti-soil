import { Button, Grid } from '@mui/material'
import * as i18n from 'react-i18next'

export function Menu() {
  const { t } = i18n.useTranslation('MENU')

  return (
    <Grid container alignItems='center' justifyContent='space-between'>
      <Grid px={5}>
        <Button sx={{color: 'black'}}>
          {t('QUEM_SOMOS')}
        </Button>
      </Grid>
      <Grid px={5}>
        <Button sx={{color: 'black'}}>
          {t('PLANOS')}
        </Button>
      </Grid>
      <Grid px={5}>        
        <Button sx={{color: 'black'}}>
          {t('TREINAMENTO')}
        </Button>
      </Grid>
      <Grid px={5}>        
        <Button sx={{color: 'black'}}>
          {t('FALE_CONOSCO')}
        </Button>
      </Grid>
        
    </Grid>
  )
}
