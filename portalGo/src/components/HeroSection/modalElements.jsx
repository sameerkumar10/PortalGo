import styled from 'styled-components';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; 

const inputStyles = `
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: black; 
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: white;
  background-color: #01bf71; 
  border-radius: 0.75rem;
  padding: 1.25rem 2.5rem;
`;

export const ModalHeader = styled.div`
  align-self: flex-end;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
`;

export const ModalText = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  max-width: 20rem;
  text-align: center;
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const ModalInput = styled.input`
  ${inputStyles}
  margin-bottom: 1rem; 
`;

export const ModalSubmitButton = styled.button`
  ${inputStyles}
  margin-top: 1rem; 
  background-color: black;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-weight: 500;
`;

export const ModalPhoneInput = styled(PhoneInput)`
  ${inputStyles}
  margin-bottom: 1rem; 
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white; 
  color: black; /* Set text color to black */
`;

export const InputField = styled.input`
  ${inputStyles}
  margin-bottom: 1rem; 
`;