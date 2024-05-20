export type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
const initialValues = {
  name: " ",
  surname: " ",
  email: " ",
  password: " ",
};

function createOrUpdateUser(initialValues: User, data: Partial<User>): User {
  return { ...initialValues, ...data };
}

createOrUpdateUser(initialValues, {
  email: "user@mail.com",
  password: "password123",
});
