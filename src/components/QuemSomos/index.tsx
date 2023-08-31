import { Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { Baloes, Text, Title } from "./styles";

export function QuemSomos() {
    const { t } = i18n.useTranslation('QUEM_SOMOS');

    return (
    <>
        <Grid container id="quem-somos" justifyContent='center' alignItems='center' py={10}>
            <Grid lg={4} md={4} sm={10} xs={11} px={2}>
                <Title>{t('TITLE')}</Title>
                <Text>
                    {t('TEXT1')}
                </Text>
                <Text>
                    {t('TEXT2')}
                </Text>
            </Grid>
            <Grid container justifyContent='center' lg={5} md={5} sm={11} xs={11} p={2}>
                <Baloes src='images/Baloes.svg'></Baloes>
            </Grid>
        </Grid>
    </>
    )
}