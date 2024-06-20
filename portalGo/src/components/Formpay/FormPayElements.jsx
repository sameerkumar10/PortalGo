import styled from 'styled-components';

const FormPayElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Change height to min-height */
  background: #f9f9f9; /* Light background color */

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333; /* Dark text color */
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 300px; /* Change width to max-width */
    padding: 20px;
    background: #fff; /* White background color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  div {
    margin-bottom: 15px;
  }

  label {
    margin-bottom: 5px;
    color: #555; /* Medium text color */
    font-weight: bold;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: calc(100% - 22px); /* Adjust input width to fit within parent container */
  }

  textarea {
    resize: vertical; /* Allow vertical resizing */
    height: 80px; /* Set initial height */
  }

  button {
    padding: 10px 20px;
    background-color: #01bf71; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #00994d; /* Button background color on hover */
  }
`;

export default FormPayElements;

