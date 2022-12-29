import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useRegisterMutation } from "../redux/ApiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
function Register() {
  const [register, { data, isSuccess, isError, error, isLoading }] = useRegisterMutation();
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Fname: "",
      Lname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const { Fname, Lname, email, mobile, password } = values;
      await register({
        Fname,
        Lname,
        email,
        mobile,
        password,
      });
    },
    validate: (values) => {
      let errors = {};
      if (!values.Fname) {
        errors.Fname = "Required";
      }
      if (!values.Lname) {
        errors.Lname = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.mobile) {
        errors.mobile = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword =
          "confirm password does not match with password!!";
      }
      return errors;
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("registration successful", {
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
  }, [isSuccess, data, dispatch, error]);
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <div className="title">
          <div className="Fname">
            <label htmlFor="">First Name</label>
            <input
              value={formik.values.Fname}
              onChange={formik.handleChange}
              type="text"
              onBlur={formik.handleBlur}
              name="Fname"
              id="Fname"
            />
            {formik.touched.Lname && formik.errors.Fname ? (
              <p className="error">{formik.errors.Lname}</p>
            ) : (
              ""
            )}
          </div>

          <div className="Lname">
            <label htmlFor="">Last Name</label>
            <input
              value={formik.values.Lname}
              onChange={formik.handleChange}
              type="text"
              onBlur={formik.handleBlur}
              name="Lname"
              id="Lname"
            />
            {formik.touched.Lname && formik.errors.Lname ? (
              <p className="error">{formik.errors.Lname}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="email">
          <label htmlFor="">Email</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            onBlur={formik.handleBlur}
            name="email"
            id="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <div className="mobile">
          <label htmlFor="">Phone</label>
          <input
            value={formik.values.mobile}
            onChange={formik.handleChange}
            type="text"
            onBlur={formik.handleBlur}
            name="mobile"
            id="mobile"
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <p className="error">{formik.errors.mobile}</p>
          ) : (
            ""
          )}
        </div>

        <div className="password">
          <label htmlFor="">Password</label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            onBlur={formik.handleBlur}
            name="password"
            id="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>

        <div className="confirmPassword">
          <label htmlFor="">Confirm Password</label>
          <input
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            type="password"
            onBlur={formik.handleBlur}
            name="confirmPassword"
            id="confirmPassword"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="error">{formik.errors.confirmPassword}</p>
          ) : (
            ""
          )}
        </div>

        <button type="submit">
            {
                isLoading ? ("Loading...") :
                "register"
            }
        </button>
      </Form>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  @media (max-width: 768px) {
    min-height: 50vh;
    border: 1px solid #000;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;
const Form = styled.form`
  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
  }
  width: 60%;
  /* height: 90vh; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  padding: 2%;
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1% 2%;
    .Fname {
      width: 48%;
      label {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        display: block;
        font-size: 1.2vw;
      }
      input {
        width: 100%;
        height: 8vh;
        padding: 2%;
        &:focus {
          outline: none;
        }
      }
      .error {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        color: red;
        font-size: 1vw;
        padding-top: 2%;
      }
    }
    .Lname {
      width: 48%;
      label {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        display: block;
        font-size: 1.2vw;
      }
      input {
        width: 100%;
        height: 8vh;
        padding: 2%;
      }
    }
    .error {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: red;
      font-size: 1vw;
      padding-top: 2%;
    }
  }
  .email {
    width: 100%;
    padding: 1% 2%;
    label {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      display: block;
      font-size: 1.2vw;
    }
    input {
      width: 100%;
      height: 8vh;
      padding: 2%;
      &:focus {
        outline: none;
      }
    }
    .error {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: red;
      font-size: 1vw;
      padding-top: 2%;
    }
  }
  .mobile {
    width: 100%;
    padding: 1% 2%;
    label {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      display: block;
      font-size: 1.2vw;
    }
    input {
      width: 100%;
      height: 8vh;
      padding: 2%;
      &:focus {
        outline: none;
      }
    }
    .error {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: red;
      font-size: 1vw;
      padding-top: 2%;
    }
  }
  .password {
    width: 100%;
    padding: 1% 2%;
    label {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      display: block;
      font-size: 1.2vw;
    }
    input {
      width: 100%;
      height: 8vh;
      padding: 2%;
      &:focus {
        outline: none;
      }
    }
    .error {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: red;
      font-size: 1vw;
      padding-top: 2%;
    }
  }
  .confirmPassword {
    width: 100%;
    padding: 1% 2%;
    label {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      display: block;
      font-size: 1.2vw;
    }
    input {
      width: 100%;
      height: 8vh;
      padding: 2%;
      &:focus {
        outline: none;
      }
    }
    .error {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: red;
      font-size: 1vw;
      padding-top: 2%;
    }
  }
  button {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    width: 95%;
    height: 8vh;
    border: none;
    margin-left: 2.5%;
    background: #000;
    color: #fff;
    margin-top: 3%;
    font-size: 1.2vw;
  }
`;
