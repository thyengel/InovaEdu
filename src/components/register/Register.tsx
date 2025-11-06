import {
  AbsoluteCenter,
  Button,
  Center,
  Container,
  Field,
  Input,
  Text,
  Link,
  Stack,
} from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "../ui/password-input";
import { Image } from "@chakra-ui/react";
import logo from "../../images/logo.png";
import { type Options, passwordStrength } from "check-password-strength";
import { useState, useMemo } from "react";
import UserService from "@/services/UserService";
import { useAlert } from "@/hooks/useAlert";
import { AlertStatus } from "@/context/AlertProvider";
import { useNavigate } from "react-router";
import useMutation from "@/hooks/useMutation";

const strengthOptions: Options<string> = [
  { id: 1, value: "fraca", minDiversity: 0, minLength: 0 },
  { id: 2, value: "média", minDiversity: 2, minLength: 6 },
  { id: 3, value: "forte", minDiversity: 3, minLength: 8 },
  { id: 4, value: "forte", minDiversity: 4, minLength: 10 },
];

function Cadastro() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({ mutationFn: UserService.createUser })
  const { dispatchAlert } = useAlert();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const strength = useMemo(() => {
    if (!password) return 0;
    const result = passwordStrength(password, strengthOptions);
    return result.id;
  }, [password]);

  function handleRegisterUser() {
    if (!email) {
      setIsEmailValid(false);
    }
    if (!name) {
      setIsNameValid(false);
    }
    if (!password) {
      setIsPasswordValid(false);
    }
    if (email && name && password) {
      mutate(
        { data: { name, email, password } },
        {
          onError: (e) => {
            const error = e as Error;
            dispatchAlert(AlertStatus.ERROR, error.message ?? '');
          },
          onSuccess: () => {
            dispatchAlert(AlertStatus.SUCCESS, "Usuário cadastrado com sucesso!");
            navigate("/");
          }
        })
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
            <Image
              rounded="md"
              src={logo}
              alt="Logo"
              style={{
                width: "200px",
              }}
            />
          </div>
          <Text textStyle="2xl" fontWeight="bold">
            Crie sua conta
          </Text>
        </Center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Field.Root invalid={!isNameValid}>
            <Field.Label>Nome</Field.Label>
            <Input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Nome"
              style={{
                ...(isNameValid && { borderColor: "#ffffff8c" }),
              }}
            />
            <Field.ErrorText>Campo obrigatório</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!isEmailValid}>
            <Field.Label>Email</Field.Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="E-mail"
              style={{
                ...(isEmailValid && { borderColor: "#ffffff8c" }),
              }}
            />
            <Field.ErrorText>Campo obrigatório</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!isPasswordValid}>
            <Field.Label>Senha</Field.Label>
            <Stack
              gap="3"
              style={{
                width: "100%",
              }}
            >
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Senha"
                style={{
                  borderColor: "#ffffff8c",
                }}
              />
              <PasswordStrengthMeter value={strength} />
            </Stack>
          </Field.Root>
        </div>
        <Button
          variant="solid"
          colorPalette={"green"}
          style={{
            borderRadius: "15px",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={handleRegisterUser}
          loading={isLoading}
        >
          Cadastrar
        </Button>
        <div
          style={{
            display: "flex",
            gap: "3px",
            fontSize: "14px",
            justifyContent: "flex-end",
          }}
        >
          Já possui uma conta?{" "}
          <Link variant="underline" colorPalette="green" href="/">
            Entrar
          </Link>
        </div>
      </Container>
    </AbsoluteCenter>
  );
}

export default Cadastro;
