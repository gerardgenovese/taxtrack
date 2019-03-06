import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";

export const LoginPage = ({ startLogin }) => {
  return(
    <div className="box-layout">
      <div className="box-layout--box">
        <div className="box-layout--pos">
          <h1 className="box-layout--title">Tax Track</h1>
          <div className="box-layout--box-slogan">Keep Track of your yearly Tax Deductions</div>

        </div>
      {/* <h1 className="box-layout--title">Track your yearly Tax Deductions</h1> */}
      {/* <p className="box-layout--title2">Track your yearly Tax Deductions</p> */}
      {/* <button className="button" onClick={startLogin}>Login with Google</button> */}
      </div>
  
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);