import { Menu } from '@/layouts/Header/components/Menu'
import { SwitchButtonLanguage } from '@/layouts/Header/components/SwitchButtonLanguage'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as i18n from 'react-i18next'
import { useWindowSize } from 'usehooks-ts'
import { Background, Banner, ButtonAction, Content, ContentRight } from './styles'

export function Header() {
  const [isMobile, setIsMobile] = useState(true)
  const { width } = useWindowSize()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { t } = i18n.useTranslation('MENU')

  return (
    <>
          <>
            {/* <Grid container alignItems='center'>
              <Grid item xs={1}>
                <IconButton
                  onClick={() => setOpen(true)}
                  className='txtColor'
                  aria-label='upload picture'
                  component='label'
                >
                  <DensitySmall />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  textAlign: 'center',
                }}
              >
              </Grid>
            </Grid>
            <SwipeableDrawer
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              PaperProps={{ sx: { width: '70%' } }}
              sx={{ width: '100%' }}
            >
              <div style={{ width: '100%', height: '90%' }}>
                <Grid
                  container
                  sx={{
                    padding: '10px',
                  }}
                >
                  <Grid item xs={8}>
                    <IconButton
                      onClick={() => setOpen(false)}
                      className='txtColor'
                      aria-label='upload picture'
                      component='label'
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                    <SwitchButtonTheme />
                  </Grid>
                  <Grid item xs={2}>
                    <SwitchButtonLanguage />
                  </Grid>
                </Grid>
                <ContentRight>
                  <Menu />
                </ContentRight>
                <Grid
                  sx={{
                    paddingTop: '20px',
                    borderTop: '1px solid #dddd',
                    margin: '20px',
                    textAlign: 'left',
                    color: '#000000',
                    a: {
                      color: 'primary',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <Link
                    href='https://app.ostenmoove.com.br/login'
                    style={{
                      marginBottom: '10px',
                    }}
                    type='a'
                    target='_blank'
                  >
                    Governança
                  </Link>
                  <br />
                  <br />
                  <Link
                    href='/privacy'
                    style={{
                      marginBottom: '10px',
                    }}
                  >
                    {t('PRIVACY_POLICY')}
                  </Link>
                  <br />
                  <br />
                  <Link href='/about-us/contacts'>{t('CONTACT_US')}</Link>
                </Grid>
              </div>
              <Link
                href='/'
                style={{
                  textAlign: 'center',
                }}
              >
              </Link>
            </SwipeableDrawer> */}
          </>
          <Content>
            <ContentRight>
              <Menu />
            </ContentRight>
            <ButtonAction>
              <SwitchButtonLanguage />
            </ButtonAction>
          </Content>
          <Banner>
            <Background src="images/BackgroundBanner.svg" alt="Banner"/>
          </Banner>
    </>
  )
}
