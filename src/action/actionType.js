export const addUser = (user) => {
  console.log(user);
  return {
    type: "add",
    payload: user,
  };
};

export const removeUser = (user) => {
  return {
    type: "remove",
    payload: user,
  };
};
