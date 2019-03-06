import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";

export const Header = ({ startLogin }) => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header-content">
					<Link to="/dashboard" className="header--title">
            <img className="header-logo" src="/images/logo.png" alt="logo" />
            <h1 className="header-main">Tax Track</h1>
					</Link>
					<button className="button" onClick={startLogin}>Login with Google</button>
				</div>
			</div>
			
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Header);