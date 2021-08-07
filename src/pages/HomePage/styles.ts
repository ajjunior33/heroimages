import styled from "styled-components";
export const Header = styled.header`
  width: 100%;
  max-width: 1080px;
  margin: 30px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 50px;
  }
  strong {
    color: #081946;
    font-size: 24px;
  }
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    margin: 5px 15px;
  }
  li a {
    color: rgba(61, 66, 79, 0.65);
    text-decoration: none;
    &:hover {
      color: rgba(61, 66, 79, 1);
    }
  }
`;
export const ListItens = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    margin: 0 15px;
    span{
      padding:5px;
      border-radius:8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(26, 33, 188, .15);
    }
  }
`;
