import React from "react";

import Footer from "../Footer/Footer";
import axios from "axios";
import { useFormik } from "formik";
import { Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Logincss.css";

const validateForm = (formValue) => {
  const errors = {};
  const reg_exp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  //   if (!formValue.username) {
  //     errors.username = "enter the username";
  // }
  // else if (formValue.username.length < 5) {
  //     errors.username = "minimum length 5";
  // }

  if (!formValue.email) {
    errors.email = "enter the email";
  } else if (!reg_exp.test(formValue.email)) {
    errors.email = "invalid email";
  }
  if (!formValue.password) {
    errors.password = "enter the password";
  } else if (reg_exp.test(formValue.password)) {
    errors.password = "Invalid password";
  }

  //  if (password.test(formValue.ConfirmPassword)) {
  //   errors.password = "Invalid password"
  // }

  console.log(errors);
  return errors;
};

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // userName:"",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("https://project-node-1.herokuapp.com/postLoginData", values)
        .then((res) => {
          // console.log("axius res", res);
          console.log("axius res", res.data);
          window.localStorage.setItem("Token", res.data.token);
          window.sessionStorage.setItem("Token", res.data.token);
          alert("you are login");
          navigate("/");
        })
        .catch((err) => {
          console.log("error in axius", err);
        });
    },
  });

  return (
    <div>
      <div id="loginbackground">
        <h1 id="account">My account</h1>
      </div>
      <div>
        <div className="logincontainer">
          <div className="form">
            <h1 style={{ fontFamily: "Fira Sans" }}>Login</h1>
            <form
              onSubmit={formik.handleSubmit}
              className="signUp"
              action=""
              method="get"
            >
              <div className="formGroup">
                <label id="label" for="username">
                  Username or email address&nbsp;
                  <span className="required">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email ID"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  required
                  autoComplete="off"
                  style={{
                    padding: "15px",
                    fontSize: "large",
                    border: "2px solid rgb(27, 27, 27)",
                  }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span>{formik.errors.email}</span>
                ) : null}
                <br />
              </div>
              <div className="formGroup">
                <label id="label" for="username">
                  Password&nbsp;<span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  required
                  autoComplete="off"
                  style={{
                    padding: "15px",
                    fontSize: "large",
                    border: "2px solid rgb(27, 27, 27)",
                  }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <span>{formik.errors.password}</span>
                ) : null}
                <br />
              </div>
              {/* <div className="formGroup">
                <input
                  type="password"
                  id="confirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={formik.values.ConfirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  autocomplete="off"
                />
                {formik.touched.ConfirmPassword &&
                formik.errors.ConfirmPassword ? (
                  <span>{formik.errors.ConfirmPassword}</span>
                ) : null}
                <br />
              </div> */}
              {/* <div className="checkBox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="text">I agree with term & conditions</span>
              </div> */}
              <div className="formGroup">
                <button
                  id="button2"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn2"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="reg-tag">
              <Nav.Link as={Link} to="/registration">
                Create a Account?
              </Nav.Link>
            </p>
          </div>
        </div>
      </div>
      <div></div>

      <div></div>
    </div>
  );
}

export default Login;
