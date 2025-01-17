import React from 'react'
import { Container, Menu, MenuItem, Logo, SpanBank } from '../styles/style-components/Navbar-style'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const userGlobal = useSelector((state) => state.userSave);

  return (
    <Container>
      <Logo>
        <SpanBank>Sicherheit</SpanBank> Bank
      </Logo>
      <Menu>

        <MenuItem>
          <Link style={{ textDecoration: 'none', color: 'white'  }} to="/">
            Home
          </Link>
        </MenuItem>
        {userGlobal ? (
          <>
            <MenuItem>
              <Link to="/Misturnos" style={{ textDecoration: 'none', color: 'white'  }}>
                Mis Turnos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/newturn" style={{ textDecoration: 'none', color: 'white'  }}>
                Agendar Turno
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/register">
                Register
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ textDecoration: 'none', color: 'white'  }} to="/login">
                Login
              </Link>
            </MenuItem>
          </>
        )}

      </Menu>
    </Container>
  );
};



export default Navbar;