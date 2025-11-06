import { Avatar, Button, Container, Menu, Portal } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../images/logo.png";
import { CircleUserRound, Heart, PlayCircleIcon, Youtube } from "lucide-react";

function TopBar() {
  return (
    <Container style={{
      display: "flex",
      gap: "30px",
      padding: "2rem",
      justifyContent: 'space-between',
    }}>
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
      }}>
        <Image src={logo} alt="Logo"
          style={{
            width: "80px"
          }} />
        <Button
          style={{
            borderRadius: "10px",
            fontSize: '15px',
          }}
          variant="ghost">
          <Youtube style={{ width: '25px', height: '25px' }} />
          Cursos
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            fontSize: '15px',
          }}
          variant="ghost">
          <PlayCircleIcon style={{ width: '25px', height: '25px' }} />
          Formação
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            fontSize: '15px',
          }}
          variant="ghost">
          <Heart style={{ width: '25px', height: '25px' }} />
          Favoritos
        </Button>
      </div>
      <div>
        <Menu.Root positioning={{ placement: "right-end" }}>
          <Menu.Trigger rounded="full" focusRing="outside">
            <Avatar.Root size="sm">
              <CircleUserRound style={{ width: '30px', height: '30px' }} />
            </Avatar.Root>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="logout">Sair</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </div>
    </Container>
  )
}

export default TopBar;