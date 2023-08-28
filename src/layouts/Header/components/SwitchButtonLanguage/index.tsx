import { MyImage } from '@/components/Images'
import Myi18n from '@/i18n'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { ContentIcon } from './styles'

function PTImage() {
  return <MyImage width={30} height={25} alt='Brasil' src='/images/language/br.png' />
}

function ENImage() {
  return <MyImage width={30} height={25} alt='English' src='/images/language/usa.png' />
}

export function SwitchButtonLanguage() {
  const [triggerAnimation, setTriggerAnimation] = useState(false)

  const handleSwitch = () => {
    Myi18n.changeLanguage(Myi18n.language === 'pt' ? 'en' : 'pt')
    setTriggerAnimation(true)
    setTimeout(() => setTriggerAnimation(false), 1000)
  }

  return (
    <ContentIcon triggerAnimation={triggerAnimation}>
      <IconButton disabled={triggerAnimation} onClick={() => handleSwitch()}>
        {Myi18n.language === 'pt' ? <PTImage /> : <ENImage />}
      </IconButton>
    </ContentIcon>
  )
}
