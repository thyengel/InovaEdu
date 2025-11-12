import TopBar from "@/components/topBar/TopBar";
import { Button, Box, Card, Container, Image, SimpleGrid, Text, Grid } from "@chakra-ui/react";
import { Route, TvMinimal } from "lucide-react";

const COURSES_MOST_WATCH = [
  {
    title: "Youtuber 📹 Edição e criação de vídeos",
    description: "Descubra como criar vídeos envolventes, gravar com o celular, editar com estilo e conquistar o público nas redes sociais. Aprenda técnicas de roteiro, iluminação, enquadramento e edição com ferramentas gratuitas.",
    duration: "8 semanas",
    imageSrc: "https://i.postimg.cc/fWxDNs5L/YOUTUBER.png"
  },
  {
    title: "Programador 💻 Crie sites e apps",
    description: "Aprenda a linguagem dos computadores de forma divertida! Comece do zero e desenvolva seus próprios sites e aplicativos simples, explorando lógica de programação, design e criatividade.",
    duration: "10 semanas",
    imageSrc: "https://i.postimg.cc/6Q2x1xyJ/PROGRAMADOR.png"
  },
  {
    title: "Fotógrafo 📸 A arte da fotografia",
    description: "Domine os segredos de uma boa foto! Aprenda sobre ângulos, luz, composição e edição para transformar simples cliques em imagens incríveis. Ideal para quem ama redes sociais e quer destacar seu olhar artístico.",
    duration: "6 semanas",
    imageSrc: "https://i.postimg.cc/d0TgjRx9/FOTOGRAFO-1.png"
  },
  {
    title: "AnimaGame 🎮 Dê movimento às suas ideias",
    description: "Dê vida a personagens e histórias! Aprenda os fundamentos da animação 2D e 3D e crie jogos simples com ferramentas acessíveis como Scratch e Blender. Um curso para quem quer unir diversão e tecnologia.",
    duration: "9 semanas",
    imageSrc: "https://i.postimg.cc/MGTp6LH4/CRIADOR-DE-ANIMAC-O-ES-E-GAMES.png"
  },
]

const LEARNING_TRACK = [
  {
    title: "Criadores do Futuro ",
    description: "Tecnologia & Inovação",
    image: "https://i.postimg.cc/28QXq81V/Whats-App-Image-2025-11-12-at-20-29-23.jpg"
  },
  {
    title: "Comunicação e Expressão",
    description: "Mídia & Criatividade",
    image: "https://i.postimg.cc/fRvFPTZd/Whats-App-Image-2025-11-12-at-20-29-23-1.jpg"
  },
  {
    title: "Vida e Carreira",
    description: "Autodesenvolvimento & Habilidades para o Futuro",
    image: "https://i.postimg.cc/2STcwcFD/Whats-App-Image-2025-11-12-at-20-29-24.jpg"
  }
]

function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <div style={{
          display: 'flex',
          marginBottom: '10px',
          marginTop: '55px',
          gap: '30px',
          marginLeft: '10px',
          alignItems: 'center'
        }}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="lg"
            style={{ marginBottom: '25px' }}>
            <TvMinimal />
          </Box>
          <Text style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Cursos mais acessados</Text>
        </div>
        <SimpleGrid columns={2} gap="50px">
          {COURSES_MOST_WATCH.map(({ title, description, duration, imageSrc }) => (
            <Card.Root flexDirection="row" overflow="hidden" h="255px" key={title}>
              <Image
                objectFit="cover"
                maxW="200px"
                src={imageSrc}
                alt="Courses images"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">{title}</Card.Title>
                  <Card.Description>
                    {description}
                  </Card.Description>
                  <Card.Description style={{ marginTop: '10px' }}>
                    {duration}
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button>Acessar</Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          )
          )}
        </SimpleGrid>
        <Box style={{
          display: 'flex',
          flexDirection: "column",
          gap: '15px',
          marginTop: '80px',

        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginLeft: '10px',
            marginBottom: '25px'
          }}>
            <Box p="4"
              borderWidth="1px"
              borderColor="border.disabled"
              color="fg.disabled"
              borderRadius="lg">
              <Route />
            </Box>
            <Text style={{ fontSize: '18px', fontWeight: 'bold' }}> Trilhas</Text>
          </div>
          <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {LEARNING_TRACK.map(({ title, description, image }) => (
              <Card.Root maxW="sm" overflow="hidden" style={{ cursor: 'pointer', transition: 'all 200ms linear' }} _hover={{ boxShadow: '0px 5px 22px 6px rgba(125,165,121,0.5)' }}>
                <Image
                  src={image}
                  alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2" style={{ display: 'flex', alignItems: 'center', }}>
                  <Card.Title>{title}</Card.Title>
                  <Card.Description>
                    {description}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
            <Box h="20" />
            <Box h="20" />
            <Box h="20" />
          </Grid>
        </Box>
      </Container >
    </>
  )
}

export default Home;