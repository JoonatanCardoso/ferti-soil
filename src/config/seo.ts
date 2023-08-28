import type { NextSeoProps } from 'next-seo'

const seoConfig: NextSeoProps = {
  title: 'Ferti Soil',
  description:
    'Ferti Soil',
  canonical: 'https://www.fertisoil.com.br/',
  openGraph: {
    site_name: 'Ferti Soil',
    locale: 'pt_BR',
    type: 'website',
    url: 'https://www.fertisoil.com.br/',
    title: 'Ferti Soil',
    images: [
      {
        url: 'https://www.fertisoil.com.br/images/fertisoil.png',
        alt: 'Ferti Soil',
        type: 'images/png',
      },
    ],
  },
}

export default seoConfig
