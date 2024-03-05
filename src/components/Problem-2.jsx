import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";

const Problem2 = () => {
  const navigate = useNavigate();
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contacts, setContacts] = useState([]);

  const rootUrl = "/problem-2";
  const modalA = "/problem-2/modal-a";
  const modalB = "/problem-2/modal-b";
  const handleShowModalA = () => {
    window.history.pushState(null, "", modalA);
    setShowModalA(true);
  };
  const handleShowModalB = () => {
    window.history.pushState(null, "", modalB);
    setShowModalB(true);
  };
  const handleCloseModalA = () => {
    window.history.pushState(null, "", rootUrl);
    setShowModalA(false);
  };
  const handleCloseModalB = () => {
    window.history.pushState(null, "", rootUrl);
    setShowModalB(false);
  };

  const switchingModalsB = () => {
    window.history.pushState(null, "", modalB);
    setShowModalA(false);
    setShowModalB(true);
  };
  const switchingModalsA = () => {
    window.history.pushState(null, "", modalA);
    setShowModalA(true);
    setShowModalB(false);
  };

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }, []);
  console.log(contacts);
  const USContacts = contacts.filter(
    (contact) => contact.country?.name === "United States"
  );

  const location = useLocation();
  // Check the current route and open the modal accordingly

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={handleShowModalA}
              className="btn btn-lg btn-outline-primary"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={handleShowModalB}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      <ModalA
        show={showModalA}
        handleClose={handleCloseModalA}
        switchingModalsB={switchingModalsB}
        contacts={contacts}
      />
      <ModalB
        show={showModalB}
        handleClose={handleCloseModalB}
        switchingModalsA={switchingModalsA}
        USContacts={USContacts}
      />
    </>
  );
};

export default Problem2;
