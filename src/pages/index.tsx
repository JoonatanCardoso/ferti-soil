import { Formulario } from '@/components/Formulario'
import { Passos } from '@/components/Passos'
import { Planos } from '@/components/Planos'
import { QuemSomos } from '@/components/QuemSomos'
import { Treinamento } from '@/components/Treinamento'

export default function Home() {
  return (
    <>
      <QuemSomos />
      <Planos />
      <Treinamento/>
      <Formulario/>
      <Passos/>
    </>
  )
}
