import { Button, Grid } from '@mui/material'
import * as i18n from 'react-i18next'
import { Image } from './styles'

export function Menu() {
  const { t } = i18n.useTranslation('MENU')

  return (
    <Grid container alignItems='center'>
      <Grid>
        <Image src='images/fertisoil.png' alt='Logo' height={100} width={100}></Image>
      </Grid>
      <Grid>
        <Button sx={{color: 'black'}}>{t('QUEM_SOMOS')}</Button>
        <Button sx={{color: 'black'}}>{t('PLANOS')}</Button>
        <Button sx={{color: 'black'}}>{t('TREINAMENTO')}</Button>
        <Button sx={{color: 'black'}}>{t('FALE_CONOSCO')}</Button>
      </Grid>
    </Grid>
  )
}
