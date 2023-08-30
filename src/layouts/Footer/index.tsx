import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as i18n from 'react-i18next'
import { ImageLogo } from './styles'

export function Footer() {
  const { t } = i18n.useTranslation('FOOTER')
  const router = useRouter()
  const socialList = [
    {
      link: 'https://www.facebook.com/ostenmoove',
      color: '#3b5998',
      icon: FacebookIcon,
    },
    {
      link: 'https://www.instagram.com/ostenmoove/',
      color: '#bc2a8d',
      icon: InstagramIcon,
    },
    {
      link: 'https://www.linkedin.com/company/osten-moove/mycompany/',
      color: '#0e76a8',
      icon: LinkedInIcon,
    },
    {
      link: '',
      color: '#00acee',
      icon: TwitterIcon,
    },
    {
      link: 'https://www.youtube.com/channel/UCITVAhyBT-8rXugOgvR5KWA',
      color: '#c4302b',
      icon: YouTubeIcon,
    },
  ]

  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center' textAlign='center'>
        <Grid xs={12} sm={12} md={3} lg={3} xl={3} p={2}>
          <Link href='/'>
            <ImageLogo src='/images/fertisoil.svg' alt='logo ferti soil' />
          </Link>
        </Grid>
        {/* <Grid xs={12} sm={12} md={4} lg={4} xl={4} p={2}>
          <Text>Politica de Privacidade</Text>
          <Text>Canal de Integridade</Text>
        </Grid> */}
        <Grid xs={12} sm={12} md={3} lg={3} xl={3} p={2}>
          {socialList.map((item, index) => {
            return (
              <Link href={item.link} target='_blank' key={index}>
                <item.icon
                  sx={{
                    color: 'black',
                    animation: 'ease',
                    '&:hover': { color: item.color },
                    padding: '5px',
                    height: '40px',
                    width: '40px',
                  }}
                />
              </Link>
            )
          })}
        </Grid>
        {/* <Grid lg={12}>
          <TextCopy>{t('COPYRIGHT_LINE1')}</TextCopy>
          <TextCopy>{t('COPYRIGHT_LINE2')}</TextCopy>
        </Grid> */}
      </Grid>
    </>
  )
}
