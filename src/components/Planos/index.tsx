import { Button, Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { Check, SubTitle, Text, TextVantagem, Title, Value } from "./styles";

export function Planos() {
    const { t } = i18n.useTranslation('PLANOS');

    return (
    <>
        <Grid id="planos" bgcolor={'#78a92d'} container justifyContent='center' py={10}>
            <Grid container justifyContent='center' lg={11} md={12} sm={12} xs={11}>
                <Grid py={5} textAlign='center'>
                    <Title>{t('TITLE')}</Title>
                    <SubTitle>{t('SUB_TITLE')}</SubTitle>
                </Grid>
                <Grid container sx={{boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center' minHeight={600}>
                    <Grid py={5} bgcolor={"#CD34C7"}>
                        <Text>
                            {t('NAMEPLANFREE')}
                        </Text>
                        <Value>{t('VALUEFREE')}</Value>
                    </Grid>
                    <Grid>
                        <TextVantagem>
                            <Check src="images/checkFree.svg" alt="Check"/>
                            {t('VANTAGEMPLANFREE_1')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center' minHeight={600}>
                    <Grid py={5} bgcolor={"#01c9a4"}>
                        <Text>
                            {t('NAMEPLAN1')}
                        </Text>
                        <Value>{t('VALUE1')}</Value>
                    </Grid>
                    <Grid>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            {t('VANTAGEMPLAN1_1')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid lg={12} md={12} sm={0} xs={0}/>
                <Grid container sx={{boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#feba43"}>
                        <Text>
                            {t('NAMEPLAN2')}
                        </Text>
                        <Value>{t('VALUE2')}</Value>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            {t('VANTAGEMPLAN2_2')}
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#fe6c6c"}>
                        <Text>
                            {t('NAMEPLAN3')}
                        </Text>
                        <Value>{t('VALUE3')}</Value>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_1')}
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            {t('VANTAGEMPLAN3_2')}
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