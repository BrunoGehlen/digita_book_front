import {
  MainContainer,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  ProfileContainer,
  TitleContainer,
} from "./style";
import { RiBook3Fill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <RiBook3Fill size="3.5rem" />
          <Title>DIGITABOOK</Title>
        </TitleContainer>
        <ProfileContainer>
          <MdPerson size="3rem" />
          <p>Login ou cadastro</p>
        </ProfileContainer>
        <FaShoppingCart size="2.5rem" />
      </MainContainer>
    </>
  );
};

export default Header;
