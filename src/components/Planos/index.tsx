import { Button, Grid } from "@mui/material";
import { Check, SubTitle, Text, TextVantagem, Title, Value } from "./styles";

export function Planos() {
    return (
    <>
        <Grid bgcolor={'#78a92d'} container justifyContent='center' py={10}>
            <Grid container justifyContent='center' lg={10} md={12} sm={12} xs={11}>
                <Grid py={5} textAlign='center'>
                    <Title>Desbloqueie o potencial da terra!</Title>
                    <SubTitle>Nossos planos de contratação de coleta de solo em hectares vão transformar a maneira como você cultiva, um hectare de cada vez.</SubTitle>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center' minHeight={600}>
                    <Grid py={5} bgcolor={"#01c9a4"}>
                        <Value>R$100,00</Value>
                        <Text>
                            Plano Mensal
                        </Text>
                    </Grid>
                    <Grid>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVerde.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#feba43"}>
                        <Value>R$500,00</Value>
                        <Text>
                            Plano Semestral
                        </Text>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkAmarelo.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                    </Grid>
                    <Grid p={5}>
                        <Button sx={{ fontSize: '20px', background: '#01c9a4', color: '#fff', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px'}}>ASSINAR</Button>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' bgcolor={"#ffffff"} lg={3} md={3} sm={10} xs={12} margin={1} textAlign='center'>
                    <Grid py={5} bgcolor={"#fe6c6c"}>
                        <Value>R$1.000,00</Value>
                        <Text>
                            Plano Anual
                        </Text>
                    </Grid>
                    <Grid py={5}>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            Vantagem
                        </TextVantagem>
                        <TextVantagem>
                            <Check src="images/checkVermelho.svg" alt="Check"/>
                            Vantagem
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