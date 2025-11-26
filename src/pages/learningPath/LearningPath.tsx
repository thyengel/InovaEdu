import TopBar from "@/components/topBar/TopBar";
import { Badge, Box, Card, Container, HStack, Image, Text, Timeline } from "@chakra-ui/react";
import { Route } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import data from "@/data/mockedData.json";
import ClassesDialog from "@/components/classesDialog/ClassesDialog";

function LearningPath() {
  const navigate = useNavigate();
  const { path_id } = useParams();
  const selectedLearningPath = data.find(({ id }) => id === path_id);
  const [open, setOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');

  function handleSelectedCourseId(courseId: string) {
    setSelectedCourseId(courseId);
    setOpen(true)
  }

  useEffect(() => {
    if (selectedLearningPath === undefined) {
      navigate(`/`);
    }
  }, [selectedLearningPath])

  return (
    <>
      <Container>
        <TopBar />
        <Container style={{ display: 'flex' }}>
          <Card.Root width="500px">
            <Card.Body gap="2" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={selectedLearningPath?.imgSrc} />
              <Card.Title mt="2">{selectedLearningPath?.learningPath}</Card.Title>
              <Card.Description style={{ textAlign: 'center' }}>
                {selectedLearningPath?.description}
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end" style={{ fontSize: '14px' }}>
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
                style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', gap: '20px' }}>
                <Box p="4"
                  borderWidth="1px"
                  borderColor="border.disabled"
                  color="fg.disabled"
                  borderRadius="lg">
                  <Route />
                </Box>
                <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Trilhas
                </Text>
              </Box>
              <Timeline.Root>
                {selectedLearningPath?.courses.map(({ title, description, duration, img, id }, i) => (
                  <Timeline.Item style={{ marginLeft: '20px' }}>
                    <Timeline.Connector >
                      <Timeline.Separator />
                      <Timeline.Indicator>
                        {i + 1}
                      </Timeline.Indicator>
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Card.Root flexDirection="row" overflow="hidden"
                        onClick={() => handleSelectedCourseId(id)}
                        style={{ cursor: 'pointer', transition: 'all 200ms linear', marginLeft: '70px', height: '200px' }}
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
      <ClassesDialog open={open} courseId={selectedCourseId} onClose={() => setOpen(false)} />
    </>
  )
}

export default LearningPath;