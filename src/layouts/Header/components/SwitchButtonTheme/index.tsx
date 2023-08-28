import DarkModeIcon from '@mui/icons-material/DarkMode'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { ContentIcon } from './styles'

export function SwitchButtonTheme() {
  const [triggerAnimation, setTriggerAnimation] = useState(true)

  const handleSwitch = () => {
    setTriggerAnimation(true)
    setTimeout(() => setTriggerAnimation(false), 1000)
  }

  useEffect(() => {
    setTimeout(() => setTriggerAnimation(false), 1000)
  }, [])

  return (
    <IconButton disabled={triggerAnimation} onClick={() => handleSwitch()}>
      <ContentIcon triggerAnimation={triggerAnimation}>
      <DarkModeIcon />
      </ContentIcon>
    </IconButton>
  )
}
