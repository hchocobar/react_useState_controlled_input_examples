import React from "react";

export const FormObject = () => {
  const [data, setData] = useState({
    name: "",
    numOfQs: 0,
  });

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData((previousData) => {
      return { ...previousData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = JSON.stringify(data, null, 4); // JSON.stringify(value, replacer, space)
    console.clear();
    console.log(json);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control mt-5">
      <h2>Simple Form</h2>
      <div className="mb-3">
        <label>Username:</label>
        <input            type="text" className="form-control"
          placeholder="username"
          name="name"
          value={data.name}
          onChange={handleDataChange}
        />
      </div>
      <div className="mb-3">
        <label>Password:</label>
        <input           type="number" className="form-control"
          name="numOfQs"
          value={data.numOfQs}
          onChange={handleDataChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
