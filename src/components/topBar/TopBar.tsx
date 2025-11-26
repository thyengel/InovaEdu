import { Avatar, Button, Container, Menu, Portal } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../images/logo.png";
import { CircleUserRound, Heart, Youtube } from "lucide-react";
import useMutation from "@/hooks/useMutation";
import UserService from "@/services/UserService";
import { useNavigate } from "react-router";

function TopBar() {

  const { mutate } = useMutation({
    mutationFn: UserService.logOutUser,
  })
  const navigate = useNavigate();

  function handleLogout() {
    mutate(undefined, {
      onSuccess: () => {
        navigate("/")
      },
    })
  }

  function handleLogoButton() {
    navigate('/home')
  }

  function hadleButtoncourse() {
    navigate('/curso')
  }

  function handleButtonFavorites() {
    navigate('/favorites')
  }

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
            width: "80px",
            cursor: 'pointer',
          }} onClick={handleLogoButton} />
        <Button
          style={{
            borderRadius: "10px",
            fontSize: '15px',
          }}
          variant="ghost"
          onClick={hadleButtoncourse}>
          <Youtube style={{ width: '25px', height: '25px' }} />
          Cursos
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            fontSize: '15px',
          }}
          onClick={handleButtonFavorites}
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
                <Menu.Item value="logout" onClick={handleLogout}>Sair</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </div>
    </Container>
  )
}

export default TopBar;