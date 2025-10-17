const USERS_KEY = 'users';
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

class UserService {
  createUser(name: string, email: string, password: string) {
    const users = localStorage.getItem(USERS_KEY); // pega todos os usuários do local storage: ESTÃO EM STRING!
    if (!users) {
      localStorage.setItem(USERS_KEY, JSON.stringify([{ id: 1, name, email, password }]));
      return;
    }
    const formattedUsers = JSON.parse(users) as User[];
    const updatedUsers = [...formattedUsers, { name, email, password, id: formattedUsers.length + 1 }]
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  }

}

export default new UserService();