import { Button, Card, Dialog, Portal, Image, SimpleGrid, Box } from '@chakra-ui/react';
import { BookOpenCheck } from 'lucide-react';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  classes: {
    title: string;
    video: string;
    thumbnail: string;
  }[]
};

function ClassesDialog({ classes, open, onClose }: DialogProps) {

  return (
    <Dialog.Root lazyMount open={open} onEscapeKeyDown={onClose} onInteractOutside={onClose}>
      <Portal >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content style={{
            maxWidth: '1200px',
          }}>
            <Dialog.Header style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Box p="4"
                borderWidth="1px"
                borderColor="border.disabled"
                color="fg.disabled"
                borderRadius="lg"
              >
                <BookOpenCheck />
              </Box>
              <Dialog.Title style={{
                marginLeft: '20px',
                fontSize: '20px'
              }}>Aulas</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <SimpleGrid columns={[2, null, 4]} columnGap="12px" rowGap="12px" >
                {classes.map(({ title, thumbnail }) => (
                  <Card.Root overflow="hidden" style={{
                    height: '400px',
                    width: '100%'
                  }}>
                    <Image
                      src={thumbnail}
                      alt="Image of the course"
                    />
                    <Card.Body gap="2" style={{ textAlign: 'center' }}>
                      <Card.Title>{title}</Card.Title>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </Dialog.Body>
            <Dialog.Footer>
              <Button variant="outline" onClick={onClose}>Sair</Button>
              <Button variant="solid">Acessar Curso</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root >
  );
}

export default ClassesDialog;