import React, { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
          username, password
        };
        const json = JSON.stringify(data, null, 4);
        console.clear();
      	console.log(json);
  	};

    return (
        <div>
      <form onSubmit={handleSubmit}>
        <h2>Simple Form</h2>
        <div>
          <label>Username: </label>
          <input type="text" value={username}
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
</div>
    );
};

export default Form;