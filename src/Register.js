import { useState } from "react";
import "./index.css";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(inputs)
  };
  return (
    <form className="form">
      <h1>Create Your Account</h1>

      <div className="form_item">
        <label>Enter your Username:</label>

        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form_item">
        <label>Enter your Age:</label>

        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form_item">
        <label>Enter your Email Address:</label>

        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form_item">
        <label>Enter your Password:</label>

        <input
          type="text"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form_item">
        <label>Choose your sex:</label>
        <div className="sel">
          <select value={inputs.sex} onChange={handleChange}>
            <option value="male" className="sel">
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="form_btn">
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Register;
