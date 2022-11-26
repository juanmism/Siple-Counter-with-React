import React from "react";
import "../../styles/index.css";

//create your first component
function Home(props) {
	return (
		<div>
			<div className="num">
				<h2>Simple Counter</h2>
				<div>
				<i className="fa fa-clock"></i>
				</div>
			<div>{Math.floor(props.count%1000000-props.count%100000)/100000}</div>
			<div>{Math.floor(props.count%100000-props.count%10000)/10000}</div>
			<div>{Math.floor(props.count%10000-props.count%1000)/1000}</div>
			<div>{Math.floor(props.count%1000-props.count%100)/100}</div>
			<div>{Math.floor(props.count%100-props.count%10)/10}</div>
			<div>{Math.floor(props.count%10)}</div>
			

			
				
			</div>
		</div>
	);
}

export default Home;
