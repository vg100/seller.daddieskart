import React from 'react';
import error403Illustration from 'assets/img/spot-illustrations/403-illustration.png';
import dark403Illustration from 'assets/img/spot-illustrations/dark403-illustration.png';
import light403 from 'assets/img/spot-illustrations/403.png';
import dark403 from 'assets/img/spot-illustrations/dark_403.png';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Error403 = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <div>
      <div className="px-3">
        <Row className="min-vh-100 flex-center p-5">
          <Col xs={12} xl={10} xxl={8}>
            <Row className="justify-content-center align-items-center g-5">
              <Col xs={12} lg={6} className="text-center order-lg-1">
                <img
                  src={error403Illustration}
                  alt=""
                  width={400}
                  className="img-fluid w-lg-100 d-dark-none"
                />
                <img
                  src={dark403Illustration}
                  alt=""
                  width={540}
                  className="img-fluid w-md-50 w-lg-100 d-light-none"
                />
              </Col>
              <Col xs={12} lg={6} className="text-center text-lg-start">
                <img
                  src={light403}
                  className="img-fluid mb-6 w-50 w-lg-75 d-dark-none"
                  alt=""
                />
                <img
                  src={dark403}
                  className="img-fluid mb-6 w-50 w-lg-75 d-light-none"
                  alt=""
                />
                <h2 className="text-body-secondary fw-bolder mb-3">
                  Access Forbidden!
                </h2>
                <p className="text-body mb-5">
                  You don’t have permission to access this resource.
                </p>
                <Button variant="primary" size="lg" as={Link} to="/">
                  Go Home
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Error403;
