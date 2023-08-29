import { Grid } from "@mui/material";
import { ButtonForm, GridBackground, GridForm, ImageForm, Input, SubTitle, Text, TextImg, Title } from "./styles";

export function Formulario() {
    return (
    <>
        <GridBackground container justifyContent='center' py={10}>
            <GridForm container justifyContent='center' xs={11} sm={11} md={10} lg={8} py={2}>
                <Grid xl={10} lg={10} md={11} sm={11} xs={11} px={2} pt={5}>
                    <SubTitle>Dúvidas? Quer saber mais?</SubTitle>
                    <Title>Entre em contato e fale conosco:</Title>
                </Grid>
                <Grid container justifyContent='center' xl={11} lg={11} md={11} sm={11} xs={11} px={2} py={2}>
                    <Grid xl={5} lg={5} md={11} sm={11} xs={11} textAlign='start'>
                        <Input fullWidth sx={{marginY: '15px', color: '#000'}} label="Nome"></Input>
                        <Input fullWidth sx={{marginY: '15px', color: '#000'}} label="E-mail"></Input>
                        <Input fullWidth multiline maxRows={4} sx={{marginY: '15px', color: '#000'}} label="Mensagem"></Input>
                        <ButtonForm fullWidth sx={{background: '#cccccc', paddingY: '15px', color: '#000',marginY: '15px'}}>Enviar Mensagem</ButtonForm>
                    </Grid>
                    <Grid xl={1} lg={1} md={1} sm={0} xs={0}/>
                    <Grid xl={5} lg={5} md={11} sm={11} xs={11}>
                        <ImageForm src="/images/ImageForm.svg" alt="Imagem Formulário"/>
                        <TextImg>Entre em contato conosco e teremos prazer em responder a todas as suas perguntas!</TextImg>
                        <Text>Convidamos você a se juntar ao nosso time e moldar o futuro da agricultura através de tecnologia avançada. Se compartilha nossa paixão e busca por soluções agrícolas inovadoras, entre em contato e faça parte dessa revolução.<b> #VAMOSJUNTOS!!!</b></Text>
                    </Grid>
                </Grid>
            </GridForm>
        </GridBackground>
    </>
    )
}