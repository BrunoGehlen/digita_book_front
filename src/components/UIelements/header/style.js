import styled from "styled-components";

import { TextField } from "@material-ui/core";

export const MainContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: yellow;

  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font: 20px;
  color: black;
  margin: 0;
  padding: 0;
`;

export const SearchContainer = styled.div`
  width: 40rem;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 8vh;
`;

export const SearchInput = styled(TextField)`
  width: 30rem;
  height: 8vh;
  background: white;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    transition: background-color 5000s ease-in-out 0s;
  }
  label {
    color: black;
  }
  :hover {
    > label {
      color: black;
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 10rem;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    border: 2px solid black;
    border-radius: 100%;
  }
  p {
    text-align: center;
    font-size: 12px;
    margin: 0 0 0 10px;
    padding: 0;
  }
`;
