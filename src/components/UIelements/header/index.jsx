import {
  MainContainer,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  ProfileContainer,
} from "./style";
import { RiBook3Fill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <MainContainer>
        <RiBook3Fill size="3.5rem" />
        <Title>DIGITABOOK</Title>
        <SearchContainer>
          <SearchInput
            label="pesquisa"
            name="pesquisa"
            variant="outlined"
            placeholder="oque vc procura"
          />
        </SearchContainer>
        <ProfileContainer>
          <MdPerson size="3rem" />
          <p>Login ou cadastro</p>
        </ProfileContainer>
        <FaShoppingCart />
      </MainContainer>
    </>
  );
};

export default Header;
