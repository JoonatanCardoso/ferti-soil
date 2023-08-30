import { Menu } from '@/layouts/Header/components/Menu'
import { SwitchButtonLanguage } from '@/layouts/Header/components/SwitchButtonLanguage'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as i18n from 'react-i18next'
import { useWindowSize } from 'usehooks-ts'
import { Banner, Image } from './styles'

export function Header() {
  const [isMobile, setIsMobile] = useState(true)
  const { width } = useWindowSize()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { t } = i18n.useTranslation('MENU')

  return (
    <>
      <Grid container px={2} justifyContent='space-between' alignItems='center'>
        <Grid>
          <Image src='images/fertisoil.png' alt='Logo' height={100} width={100}></Image>
        </Grid>
        <Grid>
          <Menu />
        </Grid>
        <Grid>
          <SwitchButtonLanguage />
        </Grid>
      </Grid>
      <Banner src="images/BackgroundBanner.svg" alt="Banner"/>
    </>
  )
}
