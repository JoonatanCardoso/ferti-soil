import { Grid } from "@mui/material";
import { Baloes, Text, Title } from "./styles";

export function QuemSomos() {
    return (
    <>
        <Grid container justifyContent='center' alignItems='center' py={10}>
        <Grid lg={4} md={4} sm={10} xs={10}>
                <Title>QUEM SOMOS?</Title>
                <Text>
                    Somos uma equipe apaixonada e comprometida com a revolução da agricultura moderna. Nosso foco está na agricultura de precisão, uma abordagem que utiliza tecnologia de ponta para transformar a maneira como cultivamos e colhemos nossos alimentos. Desenvolvemos soluções tecnológicas inovadoras que combinam sensores, análise de dados, drones e sistemas de GPS para fornecer informações detalhadas sobre o solo, as culturas e as condições climáticas.
                </Text>
                <Text>
                    Nossa tecnologia permite que os agricultores tomem decisões informadas em tempo real e estamos comprometidos em melhorar a eficiência e a sustentabilidade da agricultura. Através da otimização das práticas agrícolas, buscamos maximizar os rendimentos das colheitas, reduzir o desperdício de recursos naturais, como água e fertilizantes, e promover a conservação do meio ambiente.
                </Text>
            </Grid>
            <Grid container justifyContent='center' lg={5} md={5} sm={0} xs={0}>
                <Baloes src='images/Baloes.svg'></Baloes>
            </Grid>
        </Grid>
    </>
    )
}