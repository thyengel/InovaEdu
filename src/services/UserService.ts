const USERS_KEY = 'users';
export const LOGGED_USER_KEY = 'logged_user';
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

class UserService {
  createUser({ name, email, password }: { name: string, email: string, password: string }) {
    const users = localStorage.getItem(USERS_KEY); // pega todos os usuários do local storage: ESTÃO EM STRING!
    if (!users) {
      localStorage.setItem(USERS_KEY, JSON.stringify([{ id: 1, name, email, password }]));
      return;
    }
    const formattedUsers = JSON.parse(users) as User[];
    if (formattedUsers.find((user) => user.email === email)) {
      throw new Error('Usuário já cadastrado');
    }
    const updatedUsers = [...formattedUsers, { name, email, password, id: formattedUsers.length + 1 }]
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  }

  logInUser(data: { email: string, password: string } | undefined) {
    const users = localStorage.getItem(USERS_KEY);
    if (!users) {
      throw new Error('Credenciais inválidas! Por favor tente novamente');
    }
    const formattedUsers = JSON.parse(users) as User[];
    const user = formattedUsers.find(user => user.email === data?.email && user.password === data?.password);
    if (!user) {
      throw new Error('Credenciais inválidas! Por favor tente novamente')
    }
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
  }

  logOutUser() {
    localStorage.removeItem(LOGGED_USER_KEY);
  }

}

export default new UserService();