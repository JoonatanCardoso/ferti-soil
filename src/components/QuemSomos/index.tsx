import { Grid, Hidden } from "@mui/material";
import * as i18n from 'react-i18next';
import { Baloes, Text, Title } from "./styles";

export function QuemSomos() {
    const { t } = i18n.useTranslation('QUEM_SOMOS');

    return (
    <>
        <Grid container id="quem-somos" justifyContent='center' alignItems='center' py={10}>
            <Grid lg={10} md={10} sm={11} xs={10} px={2} pb={5} textAlign='center'>
                <Title>
                    {t('TEXT')}
                </Title>
                <Text>
                    {t('SLOGAN')}
                </Text>
            </Grid>
            <Grid lg={4} md={10} sm={10} xs={11} px={2}>
                <Title>{t('TITLE')}</Title>
                <Text>
                    {t('TEXT1')}
                </Text>
                <Text>
                    {t('TEXT2')}
                </Text>
            </Grid>
            <Grid container justifyContent='center' lg={5} md={11} sm={11} xs={11} p={2}>
                <Hidden lgDown>
                    <Baloes src='images/Baloes.svg'/>
                </Hidden>
                <Hidden lgUp>
                    <Baloes src='images/BaloesMobile.svg'/>
                </Hidden>
            </Grid>
        </Grid>
    </>
    )
}