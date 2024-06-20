import React, { useRef, useState } from "react";
import { X, GitPullRequestDraft } from "lucide-react";
import axios from "axios";
import {
  Overlay,
  ModalContent,
  ModalHeader,
  ModalButton,
  ModalBody,
  ModalTitle,
  ModalForm,
  ModalInput,
  ModalSubmitButton,
} from "./modalElements";
const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting with:", { name, phone, isValidName, isValidPhone });

    if (isValidName && isValidPhone) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/requestdemo",
          { name, phone }
        );
        console.log("Server response:", response);

        if (response.data.success) {
          console.log("Data saved successfully:", response.data);
          onClose();
        } else {
          setError(response.data.error || "Unknown error occurred");
        }
      } catch (error) {
        const errorMessage = error.response
          ? error.response.data.error
          : "Network error or server not responding";
        console.error("Submission Error:", errorMessage);
        setError(errorMessage);
      }
    } else {
      setError("Please fill out all fields correctly.");
    }
  };

  const handlePhoneChange = (value, isValid) => {
    setPhone(value);
    setIsValidPhone(isValid);
  };
  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    marginBottom: "1rem", 
    color: "black",
  };

  return (
    <Overlay ref={modalRef} onClick={closeModal}>
      <ModalContent>
        <ModalHeader>
          <ModalButton
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={30} />
          </ModalButton>
        </ModalHeader>
        <ModalBody>
          <ModalTitle>Let's get you started</ModalTitle>
          <ModalForm onSubmit={handleSubmit}>
            <ModalInput
              type="text"
              placeholder="Enter your Name"
              autoComplete="name"
              value={name}
              onChange={(e) => {
                const nameValue = e.target.value;
                setName(nameValue);
                setIsValidName(nameValue.trim() !== "");
              }}
              required
              style={inputStyle} // Apply your styles here
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              autoComplete="tel"
              value={phone}
              onChange={(e) => {
                const phoneValue = e.target.value;
                handlePhoneChange(phoneValue, /^\d{10}$/.test(phoneValue));
              }}
              required
              style={inputStyle} // Apply the same styles to this input as well
            />

            {error && <div style={{ color: "red" }}>{error}</div>}
            <ModalSubmitButton type="submit">
              <GitPullRequestDraft />
              Request Demo
            </ModalSubmitButton>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
