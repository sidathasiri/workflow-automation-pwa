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
        <Navbar.Brand href='/'>Workflow Monitor</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='Workflows' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/workflows/inprogress'>
                In Progress
              </NavDropdown.Item>
              <NavDropdown.Item href='/workflows/completed'>
                Completed
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#faq'>FAQ</Nav.Link>
            <Nav.Link eventKey={2} href='#profile'>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
