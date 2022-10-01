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
  margin-top: 40px;
`;

export const DeleteButton = styled(SubmitButton)`
  font-size: 1rem;
  background-color: red;
  color: white;
`;

export const EditButton = styled(SubmitButton)`
  font-size: 1rem;
  background-color: orange;
  color: white;
`;