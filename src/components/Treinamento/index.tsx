import { Grid } from "@mui/material";
import * as i18n from 'react-i18next';
import { GridBackground, ImageIcon, SubTitle, Text, TextCard, Title } from "./styles";

export function Treinamento() {
    const { t } = i18n.useTranslation('TREINAMENTO');

    return (
    <>
        <GridBackground container id="treinamento" justifyContent='center' py={10}>
            <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid textAlign='center'>
                    <Title>{t('TITLE')}</Title>
                </Grid>
            </Grid>
            <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid textAlign='center'>
                    <Text>{t('SUB_TITLE')}</Text>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' lg={10} md={12} sm={12} xs={11}>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon1.svg" alt="icon1"/>
                    <SubTitle>{t('TITLE1')}</SubTitle>
                    <TextCard>{t('TEXT1')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon2.svg" alt="icon2"/>
                    <SubTitle>{t('TITLE2')}</SubTitle>
                    <TextCard>{t('TEXT2')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon4.svg" alt="icon3"/>
                    <SubTitle>{t('TITLE3')}</SubTitle>
                    <TextCard>{t('TEXT3')}</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon5.svg" alt="icon4"/>
                    <SubTitle>{t('TITLE4')}</SubTitle>
                    <TextCard>{t('TEXT4')}</TextCard>
                </Grid>
            </Grid>

        </GridBackground>
    </>
    )
}