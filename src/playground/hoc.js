//higher order component - a component (the HOC) that renders another component

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
	return (
		<div>
			<h1>Info</h1>
			<p>the info is: {props.info}</p>
		</div>
	)
};

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin &&
				<p>This is private info. Please don't share!</p>
			}
			<WrappedComponent {...props} />
		</div>
	);
};

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById("app"));


const Auth = (props) => {
	return (
		<div>
			Welcome back!
		</div>
	)
};

const requireAuthentication = (Auth) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? <Auth {...props} /> : <p>Please login</p>}

		</div>
	)
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Auth);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById("app"));










// const AnotherComponent = (takeTheseProps) => {
// 	return (
// 		<div>
// 			<p>Hey did you {takeTheseProps.info}</p>
// 		</div>
// 	)
// }

// const HOC = (ImtheAnotherComponentNow) => {
// 	return (iTookYourProps) => (
// 		<div>
// 			<p>Hey I'm the Higher order component.</p>

// 			{<ImtheAnotherComponentNow {...iTookYourProps} />}
// 		</div>
// 	)
// }
// const RenderMe = HOC(AnotherComponent);


// ReactDOM.render(<RenderMe info="TAKE THESE PROPS" />, document.getElementById("app"));


