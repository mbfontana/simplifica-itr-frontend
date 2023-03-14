import {
  Stack,
  Grid,
  Box,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";

type CarrousselObject = {
  icon: { url: string; alt: string };
  title: string;
  text: string;
  redirect: string;
  image: { url: string; alt: string };
};

const carroussel: CarrousselObject[] = [
  {
    icon: { url: "images/task_icon.svg", alt: "Ícone Task" },
    title: "Conquiste cada prazo",
    text: "Crie e designe tarefas dentro das suas notas com prazos, sinalizadores e lembretes para que nada escape pelas beiradas.",
    redirect: "#",
    image: { url: "images/feature_task_pt-br.png", alt: "Imagem Conquiste Cada Prazo" },
  },
  {
    icon: { url: "images/doc-scanning.svg", alt: "Ícone Escaneando Documento" },
    title: "Seja sem papel",
    text: "Digitalize documentos importantes e deixe-os à mão em todos os seus dispositivos. Salve as informações, não a bagunça.",
    redirect: "#",
    image: { url: "images/go_paperless_pt-br.png", alt: "Imagem Seja Sem Papel" },
  },
  {
    icon: { url: "images/web-clipping.svg", alt: "Ícone Web Clipping" },
    title: "Capture a web",
    text: "Salve páginas da web (sem as propagandas) e faça marcações com setas, destaques e texto para deixá-las mais úteis.",
    redirect: "#",
    image: { url: "images/clip_the_web_pt-br.png", alt: "Imagem Capture a web" },
  },
  {
    icon: { url: "images/calendar_icon.svg", alt: "Ícone Calendário" },
    title: "Conecte sua Google Agenda",
    text: "Faça com que seu calendário trabalhe para você. Suas notas e reuniões possuem contexto, para que nada se perca no caminho.",
    redirect: "#",
    image: { url: "images/feature_calendar_pt-br.png", alt: "Imagem Conecte sua Google Agenda" },
  },
];

export const ThirdSection = () => {
  var reverseFlag = 0;
  return (
    <Stack maxWidth="1220px" margin="0 auto">
      <Grid container spacing={8}>
        {carroussel.map((e) => {
          reverseFlag++;
          return (
            <TextImageCard {...e} reverseFlag={reverseFlag} key={e.title} />
          );
        })}
      </Grid>
    </Stack>
  );
};

type TextImageCardProps = {
  icon: { url: string; alt: string };
  title: string;
  text: string;
  redirect: string;
  image: { url: string; alt: string };
  reverseFlag: number;
};

export const TextImageCard = ({
  icon,
  title,
  text,
  redirect,
  image,
  reverseFlag,
}: TextImageCardProps) => {
  const smBreakPoint = useMediaQuery("(min-width:769px)");
  return (
    <>
      {reverseFlag % 2 === 0 ? (
        <Grid
          item
          xs={smBreakPoint ? 6 : 12}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box component="img" src={image.url} alt={image.alt} width="100%" />
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={smBreakPoint ? 6 : 12}>
        <Stack spacing={2}>
          <Box component="img" src={icon.url} alt={icon.alt} width="15%" />
          <Typography variant="h1" fontSize="38px">
            {title}
          </Typography>
          <Typography variant="body1" fontSize="24px">
            {text}
          </Typography>
          <Typography variant="h1" fontSize="16px">
            <Link href={redirect} sx={{ textDecoration: "none" }}>
              SAIBA MAIS →
            </Link>
          </Typography>
        </Stack>
      </Grid>
      {reverseFlag % 2 !== 0 ? (
        <Grid
          item
          xs={smBreakPoint ? 6 : 12}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box component="img" src={image.url} alt={image.alt} width="100%" />
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
