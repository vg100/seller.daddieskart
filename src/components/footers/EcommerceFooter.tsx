import {
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkItem = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-body-tertiary fw-semibold fs-9 mb-1">
      {children}
    </Link>
  );
};

const EcommerceFooter = () => {
  return (
    <section className="bg-body-highlight dark__bg-gray-1100 py-9">
      <div className="container-small">
        <Row className="justify-content-between gy-4">
          <Col xs={12} lg={4}>
            <Logo className="mb-3" />
            <p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
            Discover your style sanctuary! From must-have essentials to statement pieces, find everything you need to redefine your fashion game. Shop now and shine brighter! Your style evolution starts here.    </p>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">About Daddieskart</h5>
            <Stack>
              <LinkItem to="#!">Careers</LinkItem>
              <LinkItem to="#!">Affiliate Program</LinkItem>
              <LinkItem to="#!">Privacy Policy</LinkItem>
              <LinkItem to="#!">Terms & Conditions</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Stay Connected</h5>
            <Stack>
              <LinkItem to="#!">Blogs</LinkItem>
              <Link to="#!" className="mb-1 fw-semibold fs-9">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-primary me-2 fs-8"
                />
                <span className="text-body-secondary">Facebook</span>
              </Link>
              <Link to="#!" className="mb-1 fw-semibold fs-9">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="text-info me-2 fs-8"
                />
                <span className="text-body-secondary">Twitter</span>
              </Link>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Customer Service</h5>
            <Stack>
              <LinkItem to="#!">Help Desk</LinkItem>
              <LinkItem to="#!">Support, 24/7</LinkItem>
              <LinkItem to="#!">Community of DaddiesKart</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Payment Method</h5>
            <Stack>
              <LinkItem to="#!">Cash on Delivery</LinkItem>
              <LinkItem to="#!">Online Payment</LinkItem>
              <LinkItem to="#!">PayPal</LinkItem>
              <LinkItem to="#!">Installment</LinkItem>
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EcommerceFooter;
