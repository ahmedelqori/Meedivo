import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #928e8e;
  }
`;

export const Announce = styled.div`
  background-color: #697565;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  color: white;
  animation: slideDown 0.5s ease forwards;
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const AnnounceTitle = styled.span``;

export const Button = styled.button`
  cursor: pointer;
`;

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin-left: auto;
  margin-right: auto;
  color: #3c3d37;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #007bff;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const LoginButton = styled.div`
  background-color: white;
  color: #3c3d37;
  font-weight: 600;
  font-size: 1rem;
  padding: 5px 10px;
  &:hover {
    color: white;
    background-color: #697565;
    border-radius: 10px;
  }
  cursor: pointer;
`;
