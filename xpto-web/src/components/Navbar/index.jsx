import { Link } from "react-router-dom";
import { NavbarStyle, LogoContainer, Logo } from "./styles";




const Navbar = ({ children }) => {
    return (
        <NavbarStyle>
            <LogoContainer>
                <Link to="/" >
                    <Logo src={`${process.env.PUBLIC_URL}/logo_xpto_color.png`}
                        sizes="(media-condition) width" />
                </Link>
            </LogoContainer>
            <h4>
                <Link to="/services">Serviços</Link>
            </h4>
            <h4>
                <Link to="/budget">Orçamentos</Link>
            </h4>
            <h4>
                <Link to="/contact">Contato</Link>
            </h4>
            {children}
        </NavbarStyle>
    )

}
export default Navbar;