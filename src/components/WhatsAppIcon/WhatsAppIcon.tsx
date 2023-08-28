import Image from 'next/image'
import { useState } from 'react'
import {
  Btn,
  BtnSend,
  Container,
  Content,
  DesktopBtn,
  InputWhatsapp,
  MobileBtn,
  Whatsapp,
  WhatsappHeader,
  WhatsappSend,
} from './styles'

function WhatsAppIcon() {
  const [form, setForm] = useState('hide')
  const [message, setMessage] = useState('')

  const showForm = () => {
    if (form === 'hide') {
      setForm('show')
    } else {
      setForm('hide')
    }
  }

  const handleChange = ({ target }: any) => {
    setMessage(target.value)
  }

  const submit = () => {
    const phone = '5511917583160'
    const url = `https://wa.me//${phone}?text=${message.replaceAll(' ', '%20')}`

    window.open(url, '_blank')
  }

  return (
    <Container>
      <Content>
        <Btn onClick={showForm}>
          <DesktopBtn>
            <Image src='images/whatsapp/WhatsAppButtonGreenLarge.svg' alt='Whatsapp Button' width={269.1} height={62.4} />
          </DesktopBtn>
          <MobileBtn>
            <Image
              src='/images/whatsapp/WhatsAppButtonMobile.png'
              alt='Whatsapp Button'
              width={70}
              height={70}
              style={{ float: 'right', margin: '10px' }}
            />
          </MobileBtn>
        </Btn>
        <Whatsapp className={form}>
          <WhatsappHeader>
            <Image src='/images/whatsapp/roberto.jpg' alt='user' width={70} height={70} />
            <h2>Roberto Ueno</h2>
          </WhatsappHeader>

          <WhatsappSend>
            <InputWhatsapp
              type='text'
              placeholder='Mensagem'
              onChange={handleChange}
              value={message}
              onSubmit={submit}
            />
            <BtnSend onClick={submit}>
              <Image src='/images/whatsapp/send-message.png' width={18} height={18} alt='icon send message' />
            </BtnSend>
          </WhatsappSend>
        </Whatsapp>
      </Content>
    </Container>
  )
}

export default WhatsAppIcon
