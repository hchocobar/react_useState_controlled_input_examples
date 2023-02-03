import React, { useState } from "react";

const ControlledInput = () => {
    const [product, setProduct] = useState('');
    const [selected, setSelected] = useState('Uruguay');
    const [isActive, setIsActive] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            product, selected, isActive
        };
        const json = JSON.stringify(data, null, 4);
        console.clear();
      	console.log(json);
  	};

    return (
        <div>
            <h3>Multiples Inputs</h3>
            <form onSubmit={handleSubmit}>
                    <input
                    id='id-product'
                    name='product'
                    type='text'
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    />
                    <select
                    id='id-select'
                    name='select'
                    value={selected}
                    onChange={(e) => {setSelected(e.target.value)}}
                    >
                        <option value='Canada'>Canada</option>
                        <option value='Spain'>Spain</option>
                        <option value='Uruguay'>Uruguay</option>
                    </select>
                    <input
                    id='id-check'
                    name='active'
                    type='checkbox'
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                    />
                <button type="submit">Enviar</button>
            </form>
        </div>    
    )
};

export default ControlledInput;