import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as i18n from 'react-i18next'
import { Container, Content } from './styles'

export function Footer() {
  const { t } = i18n.useTranslation('FOOTER')
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
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

  const hubsList = [
    {
      title: 'Osten Group',
      link: 'https://ostengroup.com.br',
    },
    {
      title: 'Osten Verse',
      link: 'https://ostenverse.com',
    },
    {
      title: 'Osten Invest',
      link: 'https://osteninvest.com.br',
    },
    {
      title: 'Osten Digital',
      link: 'https://ostendigital.com.br',
    },
    {
      title: 'Osten Games',
      link: 'https://ostengames.com.br',
    },
  ]

  const institutional = [
    {
      title: t('TERMUSO'),
      link: '/privacy-policy',
    },
    {
      title: t('CONTATENOSINSTITU'),
      link: '/about-us/contacts',
    },
    {
      title: t('STATUSSERV'),
      link: 'https://monitor.ostenverse.com',
    },
    {
      title: t('BAIXARMEDIA'),
      link: 'https://drive.google.com/file/d/1nncHMIFHlPWGwyV952Y7GIVSWTmA7KFo/view?usp=sharing',
    },
  ]

  function handleSubmit(event: any) {
    event.preventDefault()
    if (isValidEmail) {
      router.push(`/about-us/contacts?email=${email}`)
    }
  }

  return (
    <Container>
      <Content>
        <div className='infos-osten-section'>
          <Link href='/'>
            <Image src='/logos/MOOVEL.svg' alt='logo osten moove' width={1080} height={157} />
          </Link>
          <div className='texts-container'>
            <p>{t('COPYRIGHT_LINE1')}</p>
            <p>{t('COPYRIGHT_LINE2')}</p>
          </div>
          <div className='social-buttons-container'>
            {socialList.map((item, index) => {
              return (
                <Link href={item.link} target='_blank' key={index}>
                  <item.icon
                    className='icons'
                    sx={{
                      color: 'white',
                      animation: 'ease',
                      '&:hover': { color: item.color },
                    }}
                  />
                </Link>
              )
            })}
          </div>
        </div>
        <div className='menus-and-sendmail-section'>
          <div className='menus'>
            <div className='menu'>
              <h2>{t('HUBTITLE')}</h2>
              {hubsList.map((item, index) => {
                return (
                  <Link className='' href={item.link} target='_blank' key={index}>
                    <p>{item.title}</p>
                  </Link>
                )
              })}
            </div>
            <div className='menu'>
              <h2>{t('INSTITU')}</h2>
              {institutional.map((item, index) => {
                return (
                  <Link className='' href={item.link} target='_blank' key={index}>
                    <p>{item.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}
