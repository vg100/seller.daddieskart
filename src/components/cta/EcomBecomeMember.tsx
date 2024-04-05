import React from 'react';
import { Col, Row } from 'react-bootstrap';
import illustration30 from '../../assets/img/spot-illustrations/light_30.png';
import illustration30Dark from '../../assets/img/spot-illustrations/dark_30.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const EcomBecomeMember = () => {
  return (
    <Row className="flex-center mb-15 mt-11 gy-6">
      <Col xs="auto">
        <img src={illustration30} alt="" className="d-dark-none" width={305} />
        <img
          src={illustration30Dark}
          alt=""
          className="d-light-none"
          width={305}
        />
      </Col>
      <Col xs="auto">
        <div className="text-center text-lg-start">
          <h3 className="text-body-highlight mb-2">
            <span className="fw-semibold">Want to have the</span> ultimate
            customer experience?
          </h3>
          <h1 className="display-3 fw-semibold mb-4">
            Become a <span className="text-primary fw-bolder">member</span>{' '}
            today!
          </h1>
          <Link
            to="/sign-up"
            className="btn btn-lg btn-primary px-7"
          >
            Sign up
            <FontAwesomeIcon icon={faChevronRight} className="ms-2 fs-9" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default EcomBecomeMember;
