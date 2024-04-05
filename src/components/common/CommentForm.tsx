import {
  faCalendarDays,
  faImage,
  faLocationDot,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const CommentForm = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="commentForm">
        <Form.Control placeholder="Add comment" as="textarea" rows={3} />
      </Form.Group>
      <div className="d-flex align-items-center gap-3">
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faImage} className="fs-8" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faCalendarDays} className="fs-8" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faLocationDot} className="fs-8" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faTag} className="fs-8" />
        </Button>
        <Button variant="primary" className="px-6 ms-auto">
          Comment
        </Button>
      </div>
    </>
  );
};

export default CommentForm;
