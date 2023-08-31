import { Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { ButtonForm, GridBackground, GridForm, ImageForm, Input, SubTitle, Text, TextImg, Title } from "./styles";

export function Formulario() {
    const { t } = i18n.useTranslation('FORM');

    return (
    <>
        <GridBackground id="fale-conosco" container justifyContent='center' py={10}>
            <GridForm container justifyContent='center' xs={11} sm={11} md={10} lg={8} py={2}>
                <Grid xl={10} lg={10} md={11} sm={11} xs={11} px={2} pt={5}>
                    <SubTitle>{t('SUB_TITLE')}</SubTitle>
                    <Title>{t('TITLE')}</Title>
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
                        <TextImg>{t('TEXT_IMG')}</TextImg>
                        <Text>{t('TEXT')}</Text>
                    </Grid>
                </Grid>
            </GridForm>
        </GridBackground>
    </>
    )
}