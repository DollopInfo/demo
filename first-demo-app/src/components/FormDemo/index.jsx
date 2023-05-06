import { useState } from "react";

const FormDemo = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [showForm, setShowForm] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={submit} className="m-5">
          <h2>Form Demo</h2>
          <input
            name="firstName"
            type={"text"}
            onChange={handleChange}
            placeholder="firstname"
            required
          />
          <input
            name="lastName"
            type={"text"}
            onChange={handleChange}
            placeholder="lastname"
            required
          />
          <input
            name="email"
            type={"email"}
            onChange={handleChange}
            placeholder="email"
            required
          />
          <input
            name="password"
            type={"password"}
            onChange={handleChange}
            placeholder="password"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div>Resume</div>
      )}
    </>
  );
};

export default FormDemo;
