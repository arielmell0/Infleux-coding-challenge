import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: green;
  height: 40px;
  width: 250px;
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
  font-family: Roboto, sans-serif;
  font-size: 1.3rem;
  color: white;
  text-align: center;
  margin: 40px 0 20px 0;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    color: #ffff;
    animation-name: flash;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;

export const DeleteButton = styled(SubmitButton)`
  width: 100px;
  font-size: 1rem;
  background-color: red;
  color: white;
  margin: 10px 0 10px;
`;

export const EditButton = styled(SubmitButton)`
  width: 100px;
  font-size: 1rem;
  background-color: orange;
  color: white;
  margin: 10px 0 10px;
`;
