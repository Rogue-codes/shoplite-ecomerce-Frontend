import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetUserQuery } from "../../redux/ApiSlice";
import Error from "../../widgets/errorScreen/Error";
import Loading from "../../widgets/loadingScreen/Loading";
import { FiEdit } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import EditModal from "../../widgets/editModal/EditModal";
function Profile() {
  const id = useSelector((state) => state.user.id);

  const { data, isLoading, error } = useGetUserQuery(id);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : data ? (
        <>
          <div className="edit">
            <FiEdit />
            <p>edit</p>
          </div>
          <div className="value">
            <p className="label">Name:</p>
            <div className="field">
              <h2>{data.user.name}</h2>
            </div>
          </div>

          <div className="value">
            <p className="label">Email:</p>
            <div className="field">
              <h2>{data.user.email}</h2>
            </div>
          </div>

          <div className="value">
            <p className="label">Phone:</p>
            <div className="field">
              <h2>{data.user.mobile}</h2>
            </div>
          </div>
          <AnimatePresence
            initial={false}
            // exitBeforeEnter={true}
            mode="wait"
            onExitComplete={() => null}
          >
            {showModal && <EditModal handleClose={close} data={data} id ={data.user._id}  />}
          </AnimatePresence>
        </>
      ) : null}
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  position: relative;
  .value {
    margin-top: 5%;
    .label {
      margin-left: 10%;
      margin-bottom: 1%;
      font-size: 1.5vw;
    }
    .field {
      width: 80%;
      margin: 0 auto;
      padding: 3%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .edit {
    position: absolute;
    right: 5%;
    top: -8%;
    display: flex;
    font-size: 1rem;
    width: 10%;
    justify-content: center;
    gap: 2%;
    align-items: center;
    cursor: pointer;
  }
`;
