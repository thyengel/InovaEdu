import {
  Input,
  AbsoluteCenter,
  Container,
  Field,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";

function Login() {
  return (
    <AbsoluteCenter>
      <Container
        style={{
          width: "30rem",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          backgroundColor: "#222224",
          padding: "2rem",
          borderRadius: "12px",
        }}
      >
        <Center
          style={{
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div>Logo</div>
          <Text textStyle="2xl" fontWeight="bold">
            Acesse sua Conta
          </Text>
        </Center>
        <div>
          <Field.Root>
            <Field.Label>E-mail</Field.Label>
            <Input placeholder="E-mail" style={{
              border: "solid",
              borderColor: "#ffffff8c"
            }} />
          </Field.Root>
        </div>
        <div>
          <Field.Root>
            <Field.Label>Senha</Field.Label>
            <PasswordInput placeholder="Senha" style={{
              border: "solid",
              borderColor: "#ffffff8c"
            }} />
          </Field.Root>
        </div>
        <Button
          variant="solid"
          colorPalette={"green"}
          style={{
            borderRadius: "15px",
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Entrar
        </Button>
      </Container>
    </AbsoluteCenter>
  );
}

export default Login;
