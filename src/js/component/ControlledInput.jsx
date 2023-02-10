import React, { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('uy');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, country, isActive };
    const json = JSON.stringify(data, null, 4);  // JSON.stringify(value, replacer, space)
    console.clear();
    console.log(json);
  };

  return (
    <div className="form-control mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Multiples Inputs</h2>
        <div className="mb-3">
          <label>Your name</label>
          <input type='text' className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Choose your country</label>
          <select className="form-control"
                  value={country}
                  onChange={(e) => {setCountry(e.target.value)}}>
            <option value='ca'>Canada</option>
            <option value='es'>Spain</option>
            <option value='ua'>Ukraine</option>
            <option value='gb'>United Kingdom</option>
            <option value='us'>United State</option>
            <option value='uy'>Uruguay</option>
          </select>
        </div>
        <div className="mb-2">
          <input type='checkbox' className="form-check-input me-3"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>    
  )
};

export default ControlledInput;