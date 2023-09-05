import { Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { GridBackground, ImageIcon, TextCard, Title } from "./styles";

export function Passos() {
    const { t } = i18n.useTranslation('PASSOS');

    return (
    <>
        <GridBackground container justifyContent='center' py={10}>
            <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid textAlign='center'>
                    <Title>{t('TITLE')}</Title>
                </Grid>
            </Grid>
            {/* <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid textAlign='center'>
                    <Text>{t('SUB_TITLE')}</Text>
                </Grid>
            </Grid> */}
            <Grid container justifyContent='center' lg={12} md={12} sm={12} xs={11}>
                <Grid textAlign='center' xs={11} sm={11} md={4} lg={2} xl={2} m={2} py={2}>
                    <ImageIcon src="/images/pass1.png" alt="icon1"/>
                    <TextCard>{t('TEXT1')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={4} lg={2} xl={2} m={2} py={2}>
                    <ImageIcon src="/images/pass2.png" alt="icon2"/>
                    <TextCard>{t('TEXT2')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={4} lg={2} xl={2} m={2} py={2}>
                    <ImageIcon src="/images/pass3.png" alt="icon3"/>
                    <TextCard>{t('TEXT3')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={4} lg={2} xl={2} m={2} py={2}>
                    <ImageIcon src="/images/pass4.png" alt="icon4"/>
                    <TextCard>{t('TEXT4')}</TextCard>
                </Grid>
            </Grid>

        </GridBackground>
    </>
    )
}