import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/auth";

export const Header = ({ startLogout }) => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header-content">
					<Link to="/dashboard" className="header--title">
						<img className="header-logo" src="/images/logo.png" alt="logo" />
            <h1 className="header-main">Tax Track</h1>
					</Link>
					<div className="header-links">
						<Link to="/dashboard" className="header--title">
						<button className="button button--link">Deductions</button>
						</Link>
						<button className="button button--link button--link-last" onClick={startLogout}>Logout</button>
					</div>
				</div>
			</div>
			
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);