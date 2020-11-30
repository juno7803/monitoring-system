import React from "react"; 
// Reactstrap
import { 
    Container, 
    Nav, 
    NavItem, 
    NavLink 
} from "reactstrap";

function Footer(){
    return(
        <footer className="footer custom">
            <Container fluid>
                <Nav>
                    <NavItem>
                        <NavLink id="brandname" href="">KHU</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Contact Us</NavLink>
                    </NavItem>
                </Nav>
                <div className="copyright">
                    © {new Date().getFullYear()} made with{" "}
                    <i className="tim-icons icon-heart-2" /> by{" "}
                    <a
                    href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Creative Tim
                    </a>{" "}
                    for a better web.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;