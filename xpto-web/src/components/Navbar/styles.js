import styled from "styled-components";
import { Navbar as BSNavbar } from "react-bootstrap";


export const NavbarStyle = styled(BSNavbar)`
    height: 65px;
    box-shadow: 1px 7px 5px rgb(0, 0, 0, 0.3);
    position: sticky;
    background: white;
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    :hover {
    transition: all 0.3s;
    transform: scale(1.01);
  }

  > h4 {

    > a {
        color: black;
        text-decoration: none;

        :hover {
            color: var(--green-gray);
        }
    } 
  }
`;

export const LogoContainer = styled.div`
    display: grid;
    height: 100%;
    padding: 20px;
    max-width: 40%;
`;

export const Logo = styled.img`
    max-width: 30%;
    max-height: 100vh;
    min-width: 100px;
    
`;