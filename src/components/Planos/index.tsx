import { Button, Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { Check, SubTitle, Text, TextVantagem, Title, Value } from "./styles";

export function Planos() {
    const { t } = i18n.useTranslation('PLANOS');

    return (
    <>
        <Grid bgcolor={'#78a92d'} container justifyContent='center' py={10}>
            <Grid container justifyContent='center' lg={10} md={12} sm={12} xs={11}>
                <Grid py={5} textAlign='center'>
                    <Title>{t('TITLE')}</Title>
                    <SubTitle>{t('SUB_TITLE')}</SubTitle>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center' minHeight={600}>
                    <Grid py={5} bgcolor={"#01c9a4"}>
                        <Value>{t('VALUE1')}</Value>
                        <Text>
                            {t('NAMEPLAN1')}
                        </Text>
                    </Grid>
                    <Grid>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            {t('VANTAGEMPLAN1_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            {t('VANTAGEMPLAN1_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            {t('VANTAGEMPLAN1_1')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#feba43"}>
                        <Value>{t('VALUE2')}</Value>
                        <Text>
                            {t('NAMEPLAN2')}
                        </Text>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_1')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#fe6c6c"}>
                        <Value>{t('VALUE3')}</Value>
                        <Text>
                            {t('NAMEPLAN3')}
                        </Text>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
    )
}