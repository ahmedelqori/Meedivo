import React, { useState } from "react";
import "./NavBar.style.jsx";
import {
  Header,
  Announce,
  Nav,
  Logo,
  List,
  Link,
  Button,
  AnnounceTitle,
  Login,
  LoginButton,
} from "./NavBar.style.jsx";

const Navbar = () => {
  const [closeAnnounce, setCloseAnnounce] = useState(false);

  const closeAnnouncement = () => {
    if (!closeAnnounce) setCloseAnnounce(true);
  };
  return (
    <Header>
      {closeAnnounce ? (
        ""
      ) : (
        <Announce>
          <AnnounceTitle>
            🎉 Big Promotion! Get 50% off on our premium membership! 🎉
          </AnnounceTitle>
          <Button onClick={closeAnnouncement}>×</Button>
        </Announce>
      )}
      <Nav>
        <div className="flex justify-between items-center gap-5">
          <Logo>LEET TEST</Logo>
          <List className="list-none flex gap-5">
            <li>
              <Link href="#explore">Explore</Link>
            </li>
            <li>
              <Link href="#problems">Problems</Link>
            </li>
            <li>
              <Link href="#contest">Contest</Link>
            </li>
            <li>
              <Link href="#discuss">Discuss</Link>
            </li>
            <li>
              <Link href="#interview">Interview</Link>
            </li>
            <li>
              <Link href="#store">Store</Link>
            </li>
          </List>
        </div>
        <Login>
          <LoginButton>Sing In</LoginButton>
          <LoginButton>Sing Up</LoginButton>
        </Login>
      </Nav>
    </Header>
  );
};

export default Navbar;
