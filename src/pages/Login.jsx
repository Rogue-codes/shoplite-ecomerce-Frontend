import { useFormik } from "formik";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation } from "../redux/ApiSlice";
import { userLogin } from "../redux/authSlice";

function Login() {
  const [login, { isSuccess, data, error, isError, isLoading }] =
    useLoginMutation();
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      await login({
        email,
        password,
      });
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("login successful", {
        position: "top-right",
      });
      navigate("/");
      dispatch(
        userLogin({
          user: data.name,
          accessToken: data.token,
          id: data.id,
        })
      );
    } else if (error) {
      toast.error(error.data.message, {
        position: "top-right",
      });
    }
  }, [isSuccess, error, data, dispatch]);
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div className="email">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <h6 className="error">{formik.errors.email}</h6>
          ) : (
            ""
          )}
        </div>

        <div className="password">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <h6 className="error">{formik.errors.password}</h6>
          ) : (
            ""
          )}
        </div>
        <button type="submit">{isLoading ? "Loading..." : "Sign In"}</button>
        <p>or</p>
        <Link to="/account/register">
          <button className="create__acct">Create Account</button>
        </Link>
        <br />
        <br />
        <Link to="/" className="forgot__password">
          Forgot your password?
        </Link>
      </Form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 40%;
  h2 {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    text-align: center;
    font-size: 2vw;
    font-weight: 800;
    margin-bottom: 5%;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    text-align: center;
    font-size: 1.2vw;
    margin: 1% 0%;
  }
  .forgot__password {
    @media (max-width: 768px) {
      margin-left: 40%;
    }
    margin-left: 60%;
    color: #000;
  }
  label {
    margin-left: 10%;
  }
  input {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    display: block;
    width: 80%;
    margin: auto;
    margin-top: 2%;
    height: 8vh;
    padding: 2%;
    font-size: 1.2vw;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    &:focus {
      outline: none;
    }
  }
  button {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    width: 80%;
    margin: auto;
    height: 8vh;
    background: #000;
    color: white;
    margin-left: 10%;
    cursor: pointer;
    font-size: 1.3vw;
  }
  .create__acct {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    width: 80%;
    margin: auto;
    height: 8vh;
    background: lightgrey;
    color: black;
    border: none;
    cursor: pointer;
    margin-left: 10%;
    font-size: 1.3vw;
  }
  .error {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    color: red;
    font-size: 1vw;
    margin-left: 12%;
    padding-top: 2%;
  }
  .email {
    margin-bottom: 6%;
  }
  .password {
    margin-bottom: 6%;
  }
`;
