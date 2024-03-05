import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bdFlag from "../../assets/icons/bangladesh.png";
import USFlag from "../../assets/icons/united-states.png";
const ModalC = ({ show, handleClose, contactDetails }) => {
  const { phone, country } = contactDetails;
  const isBdFlag = country?.name === "Bangladesh";
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal C | Contact Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          <img src={isBdFlag ? bdFlag : USFlag} alt="" /> {phone}
        </h5>
        <p>Country: {country?.name}</p>
        {country?.name === "Bangladesh" ? (
          <p>
            Bangladesh, located in South Asia, is renowned for its rich cultural
            heritage, diverse landscapes, and resilient people. With a bustling
            capital city, Dhaka, and vibrant marketplaces, the country offers a
            unique blend of ancient traditions and modern influences. From the
            iconic Sundarbans mangrove forest to its flavorful cuisine,
            Bangladesh captivates visitors with its beauty and charm.
          </p>
        ) : (
          <p>
            The USA, located in North America, is known for its diverse
            geography, rich history, and global influence in politics,
            economics, and culture.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "#ffff",
            borderColor: "#46139f",
            color: "#000000",
          }}
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalC;
