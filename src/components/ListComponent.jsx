import React, { useState } from "react";
import { useSelector } from "react-redux";

const ListComponent = () => {
  const states = useSelector((state) => state.addReducer.users);
  const [users, setUsers] = useState(states);

  const handleRemove = (e) => {
    console.log(e);
  };

  return (
    <div className="container border mt-5">
      <h2 className="text-center">List Component</h2>
      <ul>
        {users.map((item, ind) => (
          <>
            <li key={ind}>
              {`${item.gender === "male" ? "Mr." : "Mrs."} ${item.first} ${
                item.last
              } `}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
