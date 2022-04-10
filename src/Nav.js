import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <Navbar id="navigation" variant="dark" expand="md">
  <Container>
    <Navbar.Brand id="logo-text">Timeless Impressions</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color: 'white'}} href="https://rinkeby.etherscan.io/address/0x0bec212fc7d9393a0cd301279b6f3b53c3f745d3" target="_blank" rel="noopener">Contract</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="https://testnets.opensea.io/collection/timeless-impressions-nft-collection" target="_blank" rel="noopener">OpenSea</Nav.Link>
        <NavDropdown title="Social Media" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://mobile.twitter.com/dmcdonald1991" target="_blank" rel="noopener">Twitter</NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/dominik.mcdonald.731" target="_blank" rel="noopener">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="https://www.instagram.com/nikolas0/?hl=en" target="_blank" rel="noopener">Instagram</NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/dominik-mcdonald-a70ab2146" target="_blank" rel="noopener">LinkedIn</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/DDMcDonald91" target="_blank" rel="noopener">GitHub</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
