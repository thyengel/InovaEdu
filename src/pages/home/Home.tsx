import ClassesDialog from "@/components/classesDialog/ClassesDialog";
import TopBar from "@/components/topBar/TopBar";
import { Box, Card, Container, Image, SimpleGrid, Text, Grid } from "@chakra-ui/react";
import { Route, TvMinimal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import data from "@/data/mockedData.json";

const COURSES_MOST_WATCH = data.flatMap((learningPath) => [learningPath.courses[0], learningPath.courses[1]]).slice(0, 4)

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
type ClassType = { title: string, video: string, thumbnail: string }[]

function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<ClassType>([]);

  function handleSelectedClasses(classes: ClassType) {
    setSelectedClasses(classes)
    setOpen(true)
  }

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
          {COURSES_MOST_WATCH.map(({ title, description, duration, img, classes }) => (
            <Card.Root flexDirection="row" overflow="hidden" h="255px" key={title}
              onClick={() => handleSelectedClasses(classes)}
              style={{
                cursor: 'pointer',
                transition: 'all 200ms linear',

                height: '200px'
              }}
              _hover={{
                boxShadow: '0px 5px 22px 6px rgba(125,165,121,0.5)',
                border: 'solid',
                borderColor: 'rgba(125, 231, 121, 0.77)'
              }}
            >
              <Image
                objectFit="cover"
                maxW="200px"
                src={img}
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
            {LEARNING_TRACK.map(({ title, description, image }, i) => (
              <Card.Root
                maxW="sm"
                overflow="hidden"
                style={{
                  cursor: 'pointer',
                  transition: 'all 200ms linear'
                }}
                _hover={{
                  boxShadow: '0px 5px 22px 6px rgba(125,165,121,0.5)',
                  border: 'solid',
                  borderColor: 'rgba(125, 231, 121, 0.77)'
                }}
                onClick={() => navigate(`/trilhas/${i}`)

                }
              >
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
      <ClassesDialog open={open} classes={selectedClasses} onClose={() => setOpen(false)} />
    </>
  )
}

export default Home;