/* eslint-disable react/react-in-jsx-scope */
import {
  Input,
  AbsoluteCenter,
  Container,
  Field,
  Center,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { Image } from "@chakra-ui/react";
import logo from "../../imagens/logo.png"
import { useNavigate } from "react-router";
import { useState } from "react";
import UserService from "@/services/UserService";
import { useAlert } from "@/hooks/useAlert";
import { AlertStatus } from "@/context/AlertProvider";

function Login() {
  const { dispatchAlert } = useAlert();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleLogin() {
    try {
      UserService.logInUser(email, password);
      navigate("/home")
    } catch (e) {
      const error = e as Error;
      dispatchAlert(AlertStatus.ERROR, error.message ?? '');
    }
  }

  return (
    <AbsoluteCenter>
      <Container
        style={{
          width: "30rem",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          backgroundColor: "#222224a2",
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
          <div>
            <Image rounded="md" src={logo} alt="Logo" style={{
              width: "200px",
            }} />
          </div>
          <Text textStyle="2xl" fontWeight="bold">
            Acesse sua Conta
          </Text>
        </Center>
        <div>
          <Field.Root>
            <Field.Label>E-mail</Field.Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="E-mail"
              style={{
                borderColor: "#ffffff8c"
              }}
            />
          </Field.Root>
        </div>
        <div>
          <Field.Root>
            <Field.Label>Senha</Field.Label>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
              style={{
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
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Entrar
        </Button>
        <div style={{ display: 'flex', gap: '3px', fontSize: '14px', justifyContent: 'flex-end' }}>
          Não possui uma conta? <Link variant="underline" colorPalette='green' href="cadastro">Cadastre-se</Link>
        </div>
      </Container>
    </AbsoluteCenter>
  );
}

export default Login;
