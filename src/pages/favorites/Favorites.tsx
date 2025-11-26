import TopBar from "@/components/topBar/TopBar";
import { Box, Card, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";
import data from "@/data/mockedData.json";
import { Heart, TvMinimal } from "lucide-react";
import ClassesDialog from "@/components/classesDialog/ClassesDialog";
import { useState } from "react";
import useLikedList from "@/hooks/useLikedList";

const cursos = data.flatMap(({ courses }) => courses);

function Favorites() {

  const [open, setOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');

  const { add, likedList, remove } = useLikedList();

  const coursesLiked = cursos.filter((course) => (
    likedList.includes(course.title)
  ))
  function handleSelectedCourseId(courseId: string) {
    setSelectedCourseId(courseId);
    setOpen(true)
  }

  function handleLiked(title: string) {
    if (likedList.includes(title)) {
      remove(title)
    } else {
      add(title)
    }
  }

  return (
    <>
      <Container style={{ height: '100vh' }}>
        <TopBar />
        <Container >
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
              Favoritos
            </Text>
          </div>
          <SimpleGrid columns={2} gap="50px" >
            {coursesLiked.map(({ title, description, duration, img, classes, id }) => (
              <Card.Root flexDirection="row" overflow="hidden" h="255px" key={title}
                onClick={() => handleSelectedCourseId(id)}
                style={{ cursor: 'pointer', transition: 'all 200ms linear', height: '200px' }}
                _hover={{
                  boxShadow: '0px 5px 22px 6px rgba(125,165,121,0.5)',
                  border: 'solid',
                  borderColor: 'rgba(125, 231, 121, 0.77)'
                }}
              >
                <Heart style={{
                  width: '50px',
                  position: 'absolute',
                  right: 0,
                  top: 8,
                  ...(likedList.includes(title) && { fill: 'red', stroke: 'red' })
                }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLiked(title)
                  }} />
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
      <ClassesDialog open={open} onClose={() => setOpen(false)} courseId={selectedCourseId} />
    </>
  );
}

export default Favorites;
