import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../SearchBox/SearchBox";
import ModalC from "./ModalC";

const ModalA = ({ show, handleClose, switchingModalsB, contacts }) => {
  const [checked, setChecked] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [contact, setContact] = useState({});

  const handleCloseModalC = () => setShowModalC(false);
  const handleShowModalC = (contact) => {
    setShowModalC(true);
    setContact(contact);
  };

  const handleEvenIdContacts = (e) => {
    setChecked(e.target.checked);
  };

  const contactsValue = checked
    ? contacts.filter((contact) => contact.id % 2 === 0)
    : contacts;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal A</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: "auto" }}>
          {" "}
          {/* Add overflowY: auto */}
          <SearchBox />
          {contactsValue?.map((contact) => (
            <div key={contact.id}>
              <p
                onClick={() => handleShowModalC(contact)}
                style={{ cursor: "pointer", padding: "4px" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f5f5f5")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffff")}
              >
                <strong className="font-weight-bold">ID-{contact?.id}: </strong>
                {contact?.phone}
              </p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <aside>
              <input
                onChange={handleEvenIdContacts}
                type="checkbox"
                checked={checked}
                id="only-even"
              />
              <label htmlFor="only-even"> Only Even</label>
            </aside>
            <aside style={{ display: "flex", gap: "10px" }}>
              <Button
                style={{ backgroundColor: "#46139f" }}
                variant="secondary"
              >
                All Contacts
              </Button>
              <Button variant="secondary" onClick={switchingModalsB}>
                US Contacts
              </Button>
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
            </aside>
          </div>
        </Modal.Footer>
      </Modal>
      <ModalC
        show={showModalC}
        handleClose={handleCloseModalC}
        contactDetails={contact}
      />
    </>
  );
};

export default ModalA;
