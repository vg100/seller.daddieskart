import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const WizardFormFooter = ({
  className,
  nextBtnLabel = 'Next',
  handleSubmit
}: {
  className?: string;
  nextBtnLabel?: string;
  handleSubmit?: () => void;
}) => {
  const { selectedStep, goToStep, getCanNextPage, getCanPreviousPage } =
    useWizardFormContext();

  return (
    <div
      className={classNames(className, 'd-flex justify-content-between mb-0')}
    >
      <Button
        variant="link"
        className={classNames('p-0', {
          'd-none': !getCanPreviousPage
        })}
        startIcon={<FontAwesomeIcon icon={faChevronLeft} className="fs-10" />}
        onClick={() => goToStep(selectedStep - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        className={classNames('ms-auto px-6')}
        endIcon={<FontAwesomeIcon icon={faChevronRight} className="fs-10" />}
        onClick={() => {
          if (getCanNextPage) {
            goToStep(selectedStep + 1);
          } else {
            if (handleSubmit) {
              handleSubmit();
            }
          }
        }}
      >
        {nextBtnLabel}
      </Button>
    </div>
  );
};

export default WizardFormFooter;
