import TopBar from "@/components/topBar/TopBar";
import { Badge, Box, Card, Container, HStack, Image, Text, Timeline } from "@chakra-ui/react";
import { Route } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const TRILHAS = [
  {
    id: '0',
    learningPath: 'Criadores do Futuro',
    description: 'Aprenda a transformar ideias em soluções digitais, jogos e produtos incríveis. Com o objetivo de desenvolver raciocínio lógico, criatividade digital e habilidades de criação tecnológica.',
    duration: '26 semanas',
    numberCourses: '4 Cursos',
    imgSrc: 'https://i.postimg.cc/28QXq81V/Whats-App-Image-2025-11-12-at-20-29-23.jpg',
    courses: [
      {
        "title": "Programador - Crie jogos, sites e aplicativos",
        "description": "Aprenda a linguagem dos computadores de forma divertida! Comece do zero e desenvolva seus próprios jogos, sites e aplicativos simples, explorando lógica de programação, design e criatividade.",
        "duration": "8 semanas (24 aulas)",
        img: 'https://i.postimg.cc/6Q2x1xyJ/PROGRAMADOR.png'
      },
      {
        "title": "AnimaLab – Crie animações e games",
        "description": "Dê vida a personagens e histórias! Aprenda animação 2D e 3D e crie jogos simples usando ferramentas como Scratch e Blender.",
        "duration": "7 semanas (21 aulas)",
        img: 'https://i.postimg.cc/MGTp6LH4/CRIADOR-DE-ANIMAC-O-ES-E-GAMES.png'
      },
      {
        "title": "Designer Criativo – Dê vida às suas ideias",
        "description": "Desenvolva conceitos de design gráfico e digital, criando artes para redes sociais, cartazes e layouts usando Canva e Figma.",
        "duration": "6 semanas (18 aulas)",
        img: 'https://i.postimg.cc/Qx8Rx4N9/Designer-Criativo.png'
      },
      {
        "title": "Fotógrafo – Aprenda a Arte da Fotografia",
        "description": "Domine os fundamentos da câmera, luz, composição e edição, criando fotos criativas e profissionais.",
        "duration": "6 semanas",
        img: 'https://i.postimg.cc/d0TgjRx9/FOTOGRAFO-1.png'
      },
    ]

  },
  {
    id: '1',
    learningPath: 'Comunicação e Expressão',
    description: 'Aprenda a se expressar, criar conteúdo e conquistar o público com autenticidade. Com o objetivo de desenvolver habilidades de comunicação, produção audiovisual e presença digital.',
    duration: '15 semanas',
    numberCourses: '3 Cursos',
    imgSrc: 'https://i.postimg.cc/fRvFPTZd/Whats-App-Image-2025-11-12-at-20-29-23-1.jpg',
    courses: [
      {
        "title": "Youtuber – Criação e Edição de Vídeos",
        "description": "Aprenda a criar roteiros, gravar vídeos, editar como um profissional e montar seu próprio canal com identidade e criatividade.",
        "duration": "7 semanas",
        img: 'https://i.postimg.cc/fWxDNs5L/YOUTUBER.png'
      },
      {
        "title": "Produtor de Conteúdo Digital",
        "description": "Domine técnicas modernas para criar posts, vídeos rápidos, narrativas virais e estratégias para redes sociais.",
        "duration": "6 semanas",
        img: ''
      },
      {
        "title": "Animaker – Criação de Animações 2D",
        "description": "Descubra como dar vida a personagens, objetos e histórias por meio de animações simples e divertidas em 2D.",
        "duration": "6 semanas",
        img: ''
      },
      {
        "title": "Ilustração Digital para Iniciantes",
        "description": "Aprenda a desenhar no digital, criar personagens, montar cenários e preparar artes para projetos criativos.",
        "duration": "5 semanas",
        img: ''
      }
    ]
  },
  {
    id: '2',
    learningPath: 'Vida e Carreira',
    description: 'Aprenda a se preparar para a vida adulta com criatividade, responsabilidade e visão de futuro. Com o objetivo de estimular o autoconhecimento, a autonomia e a preparação para desafios reais.',
    duration: '27 semanas',
    numberCourses: '5 Cursos',
    imgSrc: 'https://i.postimg.cc/2STcwcFD/Whats-App-Image-2025-11-12-at-20-29-24.jpg',
    courses: [
      {
        "title": "Jovem Empreendedor – Crie seu próprio negócio",
        "description": "Aprenda a transformar ideias em produtos reais. Desenvolva noções de marketing, vendas e planejamento financeiro.",
        "duration": "6 semanas (18 aulas)",
        img: ''
      },
      {
        "title": "Educação Financeira – Dinheiro na vida real",
        "description": "Descubra como organizar gastos, economizar, planejar metas e começar a investir de forma simples e prática.",
        "duration": "4 semanas (12 aulas)",
        img: 'https://i.postimg.cc/26P4y8ZW/EDUCAC-A-O-FINANCEIRA.png'
      },
      {
        "title": "Idiomas com Séries e Filmes – Aprenda se divertindo",
        "description": "Aprenda inglês com falas reais de séries e filmes. Estude vocabulário, gírias e expressões do dia a dia de forma divertida.",
        "duration": "8 semanas (24 aulas)",
        img: ''
      },
      {
        "title": "Produtividade e Organização – Estude melhor, viva melhor",
        "description": "Aprenda técnicas de foco, organização e planejamento para melhorar seus estudos e rotina.",
        "duration": "4 semanas (12 aulas)",
        img: ''
      },
      {
        "title": "Habilidades Socioemocionais – Inteligência para a Vida",
        "description": "Desenvolva empatia, inteligência emocional, comunicação e estratégias para lidar com desafios pessoais e sociais.",
        "duration": "5 semanas (15 aulas)",
        img: ''
      }
    ]
  }
]

function Course() {
  const navigate = useNavigate();
  const { path_id } = useParams();
  const selectedLearningPath = TRILHAS.find(({ id }) => id === path_id);

  useEffect(() => {
    if (selectedLearningPath === undefined) {
      navigate(`/`);
    }
  }, [selectedLearningPath])

  return (
    <Container>
      <TopBar />
      <Container
        style={{
          display: 'flex',
        }}>
        <Card.Root width="500px">
          <Card.Body gap="2" style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Image src={selectedLearningPath?.imgSrc} />
            <Card.Title mt="2">{selectedLearningPath?.learningPath}</Card.Title>
            <Card.Description style={{
              textAlign: 'center'
            }}>
              {selectedLearningPath?.description}
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end" style={{
            fontSize: '14px'
          }}>
            <Box p="2"
              borderWidth="1px"
              borderColor="border.disabled"
              color="fg.disabled"
              borderRadius="lg"
            >
              {selectedLearningPath?.duration}
            </Box>
            <Box p="2"
              borderWidth="1px"
              borderColor="border.disabled"
              color="fg.disabled"
              borderRadius="lg"
            >
              {selectedLearningPath?.numberCourses}
            </Box>
          </Card.Footer>
        </Card.Root>
        <Container>
          <Box p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="lg"
          >
            <Box p="4"
              borderWidth="1px"
              borderColor="border.disabled"
              color="fg.disabled"
              borderRadius="lg"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
                gap: '20px',
              }}>
              <Box p="4"
                borderWidth="1px"
                borderColor="border.disabled"
                color="fg.disabled"
                borderRadius="lg">
                <Route />
              </Box>
              <Text style={{
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                Trilhas
              </Text>
            </Box>
            <Timeline.Root>
              {selectedLearningPath?.courses.map(({ title, description, duration, img }, i) => (
                <Timeline.Item style={{
                  marginLeft: '20px'
                }}>
                  <Timeline.Connector >
                    <Timeline.Separator />
                    <Timeline.Indicator>
                      {i + 1}
                    </Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Card.Root flexDirection="row" overflow="hidden" style={{
                      cursor: 'pointer',
                      transition: 'all 200ms linear',
                      marginLeft: '70px',
                      height: '200px'
                    }}
                      _hover={{ boxShadow: '0px 5px 22px 6px rgba(125,165,121,0.5)' }}>
                      <Image
                        objectFit="cover"
                        maxW="200px"
                        src={img}
                        alt="Caffe Latte"
                      />
                      <Box>
                        <Card.Body>
                          <Card.Title mb="2">{title}</Card.Title>
                          <Card.Description>
                            {description}
                          </Card.Description>
                          <HStack mt="4">
                            <Badge>{duration}</Badge>
                          </HStack>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Timeline.Content>
                </Timeline.Item>
              )
              )}
            </Timeline.Root>
          </Box>
        </Container>

      </Container>
    </Container >
  )
}

export default Course;