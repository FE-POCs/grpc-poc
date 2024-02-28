import { User, UserStatus } from "../proto/users_pb";

export function userToClass({ id, name, age, status }: User.AsObject) {
  const user = new User();
  user.setId(id);
  user.setName(name);
  user.setAge(age);
  user.setStatus(status);
  return user;
}

export const users: User[] = [
  { id: 1, name: "Jay", age: 24, status: UserStatus.BUSY },
  { id: 2, name: "Nakul", age: 23, status: UserStatus.OFFLINE },
  { id: 3, name: "Hassan", age: 22, status: UserStatus.AVAILABLE },
].map(userToClass);
