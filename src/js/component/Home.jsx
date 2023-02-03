import React from "react";
import ControlledInput from "./ControlledInput.jsx";
import Form from "./Form.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center mt-5">React - Entradas controladas</h1>
			<ControlledInput/>
			<Form/>
		</div>
	);
};

export default Home;
