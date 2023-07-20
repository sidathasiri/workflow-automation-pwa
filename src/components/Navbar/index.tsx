import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      collapseOnSelect
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand href='#home'>Workflow Monitor</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='Workflows' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                In Progress
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Completed</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#pricing'>FAQ</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
