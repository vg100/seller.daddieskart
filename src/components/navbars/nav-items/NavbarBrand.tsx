import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarToggleButton from './NavbarToggleButton';
import { Link } from 'react-router-dom';

const NavbarBrand = () => {
  const {
    config: { navbarTopShape, navbarPosition }
  } = useAppContext();
  const { breakpoints } = useBreakpoints();
  const logoStyle = {
    fontFamily: 'Comic Sans MS',
    color: '#333',
    fontSize: '28px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const dotStyle = {
    color: '#FF6347',
    fontSize: '32px',
  };

  const comStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  };

  return (
    <>
      <div className="navbar-logo">
        {breakpoints.down('lg') && <NavbarToggleButton />}
        <Navbar.Brand
          as={Link}
          to="/"
          className={classNames({
            'me-1 me-sm-3':
              navbarTopShape === 'slim' || navbarPosition === 'horizontal'
          })}
        >
          {navbarTopShape === 'slim' ? (
            <>
              DaddiesKart{' '}
              <span className="text-body-highlight d-none d-sm-inline">
                slim
              </span>
            </>
          ) : (
            <div className="d-flex align-items-center">
              {/* <img src={logo} alt="phoenix" width={27} /> */}

              <div className="" style={logoStyle}>
              <span style={{ fontWeight: 'bold' }}>S</span>eller
              <span style={dotStyle}>.</span>
                <span style={{ fontWeight: 'bold' }}>d</span>addies
                <span style={{ color: '#FF6347', fontWeight: 'bold' }}>K</span>art
                <span style={dotStyle}>.</span>
                <span style={comStyle}>com</span>
              </div>

              {/* <p className="logo-text ms-2 d-none d-sm-block">DaddiesKart <span>Seller Pannel</span></p> */}
            </div>
          )}
        </Navbar.Brand>
      </div>
    </>
  );
};

export default NavbarBrand;
