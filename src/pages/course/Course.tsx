import TopBar from "@/components/topBar/TopBar";
import { Box, Card, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";
import data from "@/data/mockedData.json";
import { TvMinimal } from "lucide-react";
import ClassesDialog from "@/components/classesDialog/ClassesDialog";
import { useState } from "react";

const cursos = data.flatMap(({ courses }) => courses);

type ClassType = { title: string, video: string, thumbnail: string }[]

function Course() {

  const [open, setOpen] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<ClassType>([]);

  function handleSelectedClasses(classes: ClassType) {
    setSelectedClasses(classes)
    setOpen(true)
  }

  return (
    <>
      <Container>
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
            <Text style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
              Cursos
            </Text>
          </div>
          <SimpleGrid columns={2} gap="50px" >
            {cursos.map(({ title, description, duration, img, classes }) => (
              <Card.Root flexDirection="row" overflow="hidden" h="255px" key={title}
                onClick={() => handleSelectedClasses(classes)}
                style={{
                  cursor: 'pointer',
                  transition: 'all 200ms linear',
                  height: '200px',
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
                      {duration} ({classes.length} aulas)
                    </Card.Description>
                  </Card.Body>
                </Box>
              </Card.Root>
            )
            )}
          </SimpleGrid>
        </Container>
      </Container>
      <ClassesDialog open={open} classes={selectedClasses} onClose={() => setOpen(false)} />
    </>
  );
}

export default Course;
