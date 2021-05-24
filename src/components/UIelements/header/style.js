import styled from "styled-components";

import { TextField } from "@material-ui/core";

export const MainContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: yellow;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    height: 800px;
  }
`;

export const TitleContainer = styled.div`
  width: 23.33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 400px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h1`
  font: 20px;
  color: black;
  margin: 0;
  padding: 0;
`;

export const SearchContainer = styled.div`
  width: 33.33%;
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
  width: 33.33%;
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
