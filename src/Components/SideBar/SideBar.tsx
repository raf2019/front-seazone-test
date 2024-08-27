import { useState } from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './styles.css'

export const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        &equiv;
      </Button>

      <Offcanvas placement='start' name='start' show={show} scroll={true} backdrop={true} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          <header>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    className='reactRouterDomLink'
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/welcome"
                    className='reactRouterDomLink'
                  >
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property"
                    className='reactRouterDomLink'
                  >
                    Property
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}