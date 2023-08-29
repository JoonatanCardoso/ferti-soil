import { Grid } from "@mui/material";
import { GridBackground, ImageIcon, SubTitle, Text, TextCard, Title } from "./styles";

export function Treinamento() {
    return (
    <>
        <GridBackground container justifyContent='center' py={10}>
            <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid py={5} textAlign='center'>
                    <Title>Nosso treinamento sobre agricultura de precisão!</Title>
                </Grid>
            </Grid>
            <Grid lg={10} md={11} sm={11} xs={11}>
                <Grid textAlign='center'>
                    <Text>Para os adquirentes do sistema, oferecemos um treinamento completo e personalizado, liderado pela equipe Ferti Soil. Isso assegura que você esteja preparado para aproveitar ao máximo nossa plataforma de agricultura de precisão, capacitando-o a tomar decisões informadas e otimizar os resultados de sua operação agrícola.</Text>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' lg={10} md={12} sm={12} xs={11}>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon1.svg" alt="icon1"/>
                    <SubTitle>Aquisição e Preparação</SubTitle>
                    <TextCard>Após a aquisição, agendamos o treinamento de acordo com suasnecessidades.</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon2.svg" alt="icon1"/>
                    <SubTitle>Introdução à Plataforma</SubTitle>
                    <TextCard>Familiarização com a interfacee funcionalidades</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon3.svg" alt="icon1"/>
                    <SubTitle>Coleta e Análise de Dados</SubTitle>
                    <TextCard>Exploração das tecnologias para coletar e interpretar informaçõessobre solo e clima.</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon4.svg" alt="icon1"/>
                    <SubTitle>Utilização das Ferramentas</SubTitle>
                    <TextCard>Exploração de recursos como dronese GPS para monitoramento.</TextCard>
                </Grid>
                <Grid textAlign='center' xs={11} sm={11} md={3} lg={3} xl={3} m={1} py={2}>
                    <ImageIcon src="/images/icon5.svg" alt="icon1"/>
                    <SubTitle>Solução de Problemas e Suporte </SubTitle>
                    <TextCard>Orientação para lidar com desafios e acesso ao suporte técnico.</TextCard>
                </Grid>
            </Grid>

        </GridBackground>
    </>
    )
}