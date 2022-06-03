const intiState = {
  users: [
    {
      first: "Dheeraj",
      last: "Patil",
      gender: "male",
    },
    {
      first: "Pooja",
      last: "Singh",
      gender: "female",
    },
  ],
};

export const addReducer = (state = intiState, action) => {
  console.log(action);
  switch (action.type) {
    case "add":
      return { ...state, users: action.payload };

    case "remove":
      const data = state.users.filter(
        (user) => user.name !== action.payload.name
      );
      return { users: data };

    default:
      return state;
  }
};
