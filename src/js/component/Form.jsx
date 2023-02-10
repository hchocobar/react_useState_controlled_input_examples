import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = { username, password };
    const json = JSON.stringify(data, null, 4);  // JSON.stringify(value, replacer, space)
    console.clear();
    console.log(json);
  };

  return (
    <div className="form-control mt-5" >
      <form onSubmit={handleSubmit}>
        <h2>Simple Form</h2>
        <div className="mb-3">
          <label>Username:</label>
          <input type="text" className="form-control" 
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" 
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;