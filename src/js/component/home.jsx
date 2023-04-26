import React from "react";
import {Navegacion} from "/workspace/react-hello/src/js/component/navbar.jsx";
import { Jumbo } from "./jum.jsx";
import {Tarjeta} from "./card.jsx";
import "/workspace/react-hello/src/styles/carta.css"


//include images into your bundle
import hh from "/workspace/react-hello/src/img/hh.jpg";
import aa from "/workspace/react-hello/src/img/aa.jpg";
import dd from "/workspace/react-hello/src/img/dd.jpg";

//create your first component
const Home = () => {
	return (
		<>
		 <Navegacion/>
		 <Jumbo/>
		 
		 <div className="tarjet">
		 	<Tarjeta title="Articulo1" text="Esta es una breve descripcion del articulo que se agrega en la carta " im={hh}/>
		 	<Tarjeta title="Articulo1" text="Esta es una breve descripcion del articulo que se agrega en la carta " im={aa}/>
			<Tarjeta title="Articulo1" text="Esta es una breve descripcion del articulo que se agrega en la carta " im={dd}/>	
			<Tarjeta title="Articulo1" text="Esta es una breve descripcion del articulo que se agrega en la carta " im={hh}/>
		 </div>
		
		</>
		
	);
};

export default Home;
