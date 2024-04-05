import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faHome,
  faShoppingCart,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EcomProfilePersonalInfo from '../../../../components/forms/EcomProfilePersonalInfo';
import EcomProfileOrdersTable from '../../../../components/tables/EcomProfileOrdersTable';
import EcomProfileReviewsTable from '../../../../components/tables/EcomProfileReviewsTable';
import EcomProfileStoresTable from '../../../../components/tables/EcomProfileStoresTable';
import EcomWishlistTable from '../../../../components/tables/EcomWishlistTable';
import { Nav, Tab } from 'react-bootstrap';

interface TabLink {
  id: string;
  label: string;
  number?: number;
  icon: IconProp;
  content: JSX.Element;
}

const tabLinks: TabLink[] = [
  {
    id: 'orders',
    label: 'Orders',
    number: 35,
    icon: faShoppingCart,
    content: <EcomProfileOrdersTable />
  },
  {
    id: 'review',
    label: 'Reviews',
    number: 24,
    icon: faStar,
    content: <EcomProfileReviewsTable />
  },
  {
    id: 'wishlist',
    label: 'Wishlist',
    icon: faHeart,
    content: <EcomWishlistTable />
  },
  {
    id: 'stores',
    label: 'Stores',
    icon: faHome,
    content: <EcomProfileStoresTable />
  },
  {
    id: 'personal-info',
    label: 'Personal info',
    icon: faUser,
    content: <EcomProfilePersonalInfo />
  }
];

const ProfileDetailsTab = () => {
  return (
    <Tab.Container defaultActiveKey="orders">
      <Nav className="mb-3 pb-1 gap-3 nav-underline flex-nowrap scrollbar">
        {tabLinks.map(item => (
          <Nav.Item key={item.id}>
            <Nav.Link eventKey={item.id} className="text-nowrap">
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}{' '}
              {item.number && (
                <span className="text-body-tertiary fw-normal">
                  ({item.number})
                </span>
              )}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content>
        {tabLinks.map(item => (
          <Tab.Pane
            key={item.id}
            eventKey={item.id}
            // title={
            //   <>
            //     <FontAwesomeIcon icon={item.icon} className="me-2" />
            //     {item.label}{' '}
            //     {item.number && (
            //       <span className="text-body-tertiary fw-normal">({item.number})</span>
            //     )}
            //   </>
            // }
          >
            {item.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default ProfileDetailsTab;
