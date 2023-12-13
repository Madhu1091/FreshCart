import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password Required"),
      email: Yup.string().email("Invalid email address").required("Email Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="container-fluid">
      <div className="row logInPage">
        <div className="col-md-6 col-sm-12">
          <img src="https://freshcart.codescandy.com/assets/images/svg-graphics/fp-g.svg"/>
        </div>
        <div className="col-md-6 col-sm-12 ">
            <h2 className="heading">Sign into the FreshCart</h2>
            <p className="para">Welcome back to FreshCart! Enter your email to get started.</p>
          <form onSubmit={formik.handleSubmit} className="my-form">
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3 ">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                }`}
                id="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-3 form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="rememberMe"
      name="rememberMe"
      onChange={formik.handleChange}
      checked={formik.values.rememberMe}
    />
    <label className="form-check-label" htmlFor="rememberMe">
      Remember me
    </label>
  </div>

  <div className="mb-3">
    <p>Forgot Password?<span>Reset it</span></p>
  </div>
            <button type="submit" className="signIn">
              Sign In
            </button>
            <div className="mb-3">
    <p>Don't have an account?<span>Sign up</span></p>
  </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
