import { motion } from "framer-motion";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import EditBackdrop from "./EditBackDrop";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useUpdateUserMutation } from "../../redux/ApiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../redux/authSlice";
function EditModal(props) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const dispatch = useDispatch()
  const [updateUser, { isSuccess, data, isError, error, isLoading }] =
    useUpdateUserMutation(props.id);
  const formik = useFormik({
    initialValues: {
      Fname: "",
      Lname: "",
      mobile: props.data.user.mobile,
    },
    onSubmit: async (values) => {
      const { Fname, Lname, mobile } = values;
      if (!Fname && !Lname && !mobile) {
        toast.error("Please enter the field you want to update");
        return;
      }
      await updateUser({
        Fname,
        Lname,
        mobile,
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("update successful", {
        position: "top-right",
      });
      dispatch(
        userUpdate({
          user: data.name,
        })
      );
      props.handleClose;
    } else if (error) {
      toast.error(error.data.message, {
        position: "top-right",
      });
    }
  }, [isSuccess,data,dispatch,error]);

  return (
    <EditBackdrop handleClose={props.handleClose}>
      <ModalDiv
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Container>
          <h2>Update Profile</h2>

          <form action="" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              value={formik.values.Fname}
              id="Fname"
              name="Fname"
              onChange={formik.handleChange}
              placeholder="First Name"
            />
            <input
              type="text"
              value={formik.values.Lname}
              id="Lname"
              name="Lname"
              onChange={formik.handleChange}
              placeholder="Last Name"
            />
            <input
              type="text"
              value={formik.values.mobile}
              id="mobile"
              name="mobile"
              onChange={formik.handleChange}
            />
            <button type="submit">{isLoading ? "Loading..." : "submit"}</button>
          </form>
        </Container>
        <button className="close" onClick={props.handleClose}>
          <MdCancel size="2rem" />
        </button>
      </ModalDiv>
    </EditBackdrop>
  );
}

export default EditModal;

const ModalDiv = styled(motion.div)`
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    height: 95%;
    position: relative;
  }
  width: 60%;
  height: 80%;
  background: #fff;
  display: flex;
  justify-content: center;
  .close {
    @media (max-width: 768px) {
      display: block;
      display: flex;
    }
    display: none;
    position: absolute;
    border: 2px solid #000;
    background: transparent;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    /* font-size: 1rem; */
  }
`;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  h2 {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }
  form {
    width: 80%;
    margin: 0 auto;
    margin-top: 5%;
    height: auto;
    input {
      width: 100%;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      height: 8vh;
      margin-top: 5%;
      padding: 2%;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-size: 1.3vw;
      }
    }
    button {
      width: 100%;
      height: 8vh;
      margin-top: 5%;
      border: none;
      background: #000;
      color: #fff;
      font-size: 1.3vw;
      cursor: pointer;
    }
  }
`;
