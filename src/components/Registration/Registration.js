import React, { useEffect, useState } from "react";
import "./Registration.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const ValidateForm = (formValue) => {
  const errors = {};
  const reg_exp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2.4}$/;

  // if (!formValue.firstname) {
  //   errors.firstname = "please enter first name";
  // } else if (formValue.firstname.length < 3) {
  //   errors.firstname = "minlength 3";
  // }
  // if (!formValue.lastname) {
  //   errors.lastname = "please enter last name";
  // } else if (formValue.lastname.length < 3) {
  //   errors.lastname = "minlength 3";
  // }
  if (!formValue.username) {
    errors.username = "please enter first name";
  } else if (formValue.username.length < 3) {
    errors.username = "minlength 3";
  }
  if (!formValue.email) {
    errors.username = "please enter email";
  } else if (reg_exp.test(formValue.email)) {
    errors.username = "invalid email";
  }
  console.log("Error:", errors);
  return errors;
};
function Reg() {
  const navigate = useNavigate();
  // const[initialState,setChangeState]=useState();
  const formik = useFormik({
    initialValues: {
      // firstname: "",
      // lastname: "",
      username: "",
      email: "",
      password: "",
    },
    validate: ValidateForm,
    onSubmit: (values) => {
      console.log("recieved values:", values);
      let userData = {
        // fname: values.firstname,
        // lname: values.lastname,
        username: values.username,
        email: values.email,
        password: values.password,
      };
      axios
        // .post("https://nodeprojectapi.herokuapp.com/register", userData)
        .post(
          "https://node-project-storage.herokuapp.com/postUserData",
          userData
        )

        .then((res) => {
          console.log("Axios Res: ", res);
          alert("You have successfully registered your data");

          navigate("/login");
        })
        .catch((err) => {
          console.log("Error in Axios: ", err);
        });
    },
  });

  return (
    <div className="regmainsignup">
      <div id="signupbackground">
        <h1 id="signupaccount"> Sign Up</h1>
      </div>
      <br></br>

      <div className="userreg">
        <h1
          className="reg-heading"
          style={{ fontFamily: "Fira Sans", textAlign: "left" }}
        >
          User Registration
        </h1>
        <form className="reg-form" onSubmit={formik.handleSubmit}>
          {/* First Name:{" "}
          <input
            type="text"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <span style={{ color: "red" }}>{formik.errors.firstname}</span>
          ) : null}
          <br></br>
          Last Name:{" "}
          <input
            type="text"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <span style={{ color: "red" }}>{formik.errors.lastname}</span>
          ) : null}
          <br></br> */}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              padding: "15px",
              fontSize: "large",
              border: "2px solid rgb(27, 27, 27)",
            }}
          />
          {formik.touched.username && formik.errors.username ? (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          ) : null}
          <br></br>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              padding: "15px",
              fontSize: "large",
              border: "2px solid rgb(27, 27, 27)",
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          ) : null}
          <br></br>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              padding: "15px",
              fontSize: "large",
              border: "2px solid rgb(27, 27, 27)",
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          ) : null}
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            style={{ fontSize: "16px" }}
            className="signupsubmit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
