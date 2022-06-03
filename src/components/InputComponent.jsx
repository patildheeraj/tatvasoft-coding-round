import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../action/actionType";

const InputComponent = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    first: "",
    last: "",
    gender: "",
  });

  const dispatch = useDispatch();

  const handleFirstName = (e) => {
    setFirst(e.target.value);
  };
  const handleLastName = (e) => {
    setLast(e.target.value);
  };
  const handleSelect = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = () => {
    if (first === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return false;
    }
    setData({ first: first, last: last, gender: gender });
    console.log(first, last, gender);
    console.log(data);
    dispatch(addUser(data));
  };

  return (
    <div className="container border mt-5">
      <h2 className="text-center">Input Component</h2>
      <div className="form-group mt-5 ">
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          onChange={handleFirstName}
          value={first}
        />
        {error && <span className="text-danger">Name is Required.</span>}
      </div>
      <div className="form-group mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          onChange={handleLastName}
          value={last}
        />
      </div>
      <div className="form-group mt-5">
        <select
          name="gender"
          className="form-select"
          value={gender}
          onChange={handleSelect}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group mt-5 text-center mb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
