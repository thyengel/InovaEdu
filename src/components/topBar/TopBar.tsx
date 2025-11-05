/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Button, Container, Menu, Portal } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../imagens/logo.png";
import videoLogo from "../../imagens/youtube.svg";
import play from "../../imagens/play-circle.svg";
import profile from "../../imagens/profile.svg";

function TopBar() {
  return (
    <Container>
      <Image src={logo} alt="Logo" style={{
        width: "20px"
      }} />
      <Button variant="ghost">
        <Image src={videoLogo} alt="Logo Vídeo" />
        Cursos
      </Button>
      <Button>
        <Image src={play} alt="Play-circle" />
        Formação
      </Button>
      <div>
        <Menu.Root positioning={{ placement: "right-end" }}>
          <Menu.Trigger rounded="full" focusRing="outside">
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src={profile} />
            </Avatar.Root>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="account">Account</Menu.Item>
                <Menu.Item value="settings">Settings</Menu.Item>
                <Menu.Item value="logout">Logout</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </div>
    </Container>
  )
}

export default TopBar;