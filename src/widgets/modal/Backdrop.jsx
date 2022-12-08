import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Backdrop({children,handleClose}) {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
        {children}
    </Container>
  );
}

export default Backdrop;

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index:999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000066;
`;
