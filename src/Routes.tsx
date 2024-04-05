import { RouteObject, createBrowserRouter } from 'react-router-dom';

import App1 from './App1'

import MainLayoutProvider from './providers/MainLayoutProvider';
import MainLayout from './layouts/MainLayout';
import Ecommerce from './pages/dashboard/ecommerce';
import AddProduct from './pages/apps/e-commerce/admin/AddProduct';
import Products from './pages/apps/e-commerce/admin/Products';
import Customers from './pages/apps/e-commerce/admin/Customers';
import Orders from './pages/apps/e-commerce/admin/Orders';
import OrderDetails from './pages/apps/e-commerce/admin/OrderDetails';
import Refund from './pages/apps/e-commerce/admin/Refund';
import CustomerDetails from './pages/apps/e-commerce/admin/CustomerDetails';
import Analytics from './pages/apps/crm/Analytics';
import DealDetails from './pages/apps/crm/DealDetails';
import ReportDetails from './pages/apps/crm/ReportDetails';
import Leads from './pages/apps/crm/Leads';
import LeadDetails from './pages/apps/crm/LeadDetails';
import Reports from './pages/apps/crm/Reports';
import AddContact from './pages/apps/crm/AddContact';
import CreateNew from './pages/apps/project-management/CreateNew';
import ProjectListView from './pages/apps/project-management/ProjectListView';
import ProjectCardView from './pages/apps/project-management/ProjectCardView';
import ProjectBoardView from './pages/apps/project-management/ProjectBoardView';
import ProjectTodoList from './pages/apps/project-management/ProjectTodoList';
import ProjectDetails from './pages/apps/project-management/ProjectDetails';
import CreateAnEvent from './pages/apps/events/CreateAnEvent';
import EventDetail from './pages/apps/events/EventDetail';
import Kanban from './pages/apps/kanban/Kanban';
import Boards from './pages/apps/kanban/Boards';
import CreateBoard from './pages/apps/kanban/CreateBoard';
import Chat from './pages/apps/chat/Chat';
import ChatHomepage from './pages/apps/chat/ChatHomepage';
import ChatConversation from './pages/apps/chat/ChatConversation';
import SocialProfile from './pages/apps/social/SocialProfile';
import Settings from './pages/apps/social/Settings';
import Feed from './pages/apps/social/Feed';
import Calendar from './pages/apps/calendar/Calendar';
import Inbox from './pages/apps/email/Inbox';
import EmailDetail from './pages/apps/email/EmailDetail';
import Compose from './pages/apps/email/Compose';
import Starter from './pages/pages/Starter';
import FaqAccordion from './pages/faq/FaqAccordion';
import PricingColumn from './pages/pages/pricing/PricingColumn';
import PricingGrid from './pages/pages/pricing/PricingGrid';
import Notification from './pages/notifications/Notifications';
import Members from './pages/Members';
import ComingSoon from './pages/ComingSoon';
import VerticalSidenav from './pages/pages/layouts/VerticalSidenav';
import DarkModeDemo from './pages/pages/layouts/DarkModeDemo';
import SidenavCollapse from './pages/pages/layouts/SidenavCollapse';
import Darknav from './pages/pages/layouts/Darknav';
import TopnavSlim from './pages/pages/layouts/TopnavSlim';
import NavbarTopSlim from './pages/pages/layouts/NavbarTopSlim';
import NavbarTop from './pages/pages/layouts/NavbarTop';
import NavbarHorizontalSlim from './pages/pages/layouts/NavbarHorizontalSlim';
import ComboNav from './pages/pages/layouts/ComboNav';
import ComboNavSlim from './pages/pages/layouts/ComboNavSlim';
import DualNav from './pages/pages/layouts/DualNav';
import FaqTab from './pages/faq/FaqTab';
import Timeline from './pages/pages/Timeline';
import BasicTableExample from './pages/modules/tables/BasicTableExample';
import AdvanceTableExample from './pages/modules/tables/AdvanceTableExample';
import ECharts from './pages/modules/charts/ECharts';
import GanttChart from './pages/modules/charts/GanttChart';
import PhoenixLoader from './components/common/PhoenixLoader';
import { Suspense } from 'react';
import FontAwesomeExample from './pages/modules/components/FontAwesomeExample';
import FeatherIconsExample from './pages/modules/components/FeatherIconsExample';
import UniconsExample from './pages/modules/components/UniconsExample';
import AccordionExample from './pages/modules/components/AccordionExample';
import AvatarExample from './pages/modules/components/AvatarExample';
import AlertsExample from './pages/modules/components/AlertsExample';
import ButtonExample from './pages/modules/components/ButtonExample';
import BadgeExample from './pages/modules/components/BadgeExample';
import BreadcrumbExample from './pages/modules/components/BreadcrumbExample';
import CardExample from './pages/modules/components/CardExample';
import BootstrapCarousel from './pages/modules/components/BootstrapCarousel';
import SwiperCarousel from './pages/modules/components/SwiperCarousel';
import CollapseExample from './pages/modules/components/CollapseExample';
import DropdownExample from './pages/modules/components/DropdownExample';
import ListGroupExample from './pages/modules/components/ListGroupExample';
import CountupExample from './pages/modules/components/CountupExample';
import DraggableExample from './pages/modules/components/DraggableExample';
import ModalExample from './pages/modules/components/ModalExample';
import OffcanvasExample from './pages/modules/components/OffcanvasExample';
import ProgressbarExample from './pages/modules/components/ProgressbarExample';
import PlaceholderExample from './pages/modules/components/PlaceholderExample';
import PaginationExample from './pages/modules/components/PaginationExample';
import PopoversExample from './pages/modules/components/PopoversExample';
import SpinnerExample from './pages/modules/components/SpinnerExample';
import ToastsExample from './pages/modules/components/ToastsExample';
import TooltipExample from './pages/modules/components/TooltipExample';
import CalendarExample from './pages/modules/components/CalendarExample';
import NavsExample from './pages/modules/components/NavsExample';
import TabsExample from './pages/modules/components/TabsExample';
import NavbarExample from './pages/modules/components/NavbarExample';
import LightboxExample from './pages/modules/components/LightboxExample';
import FormControlExample from './pages/modules/forms/basic/FormControlExample';
import InputGroupExample from './pages/modules/forms/basic/InputGroupExample';
import SelectExample from './pages/modules/components/SelectExample';
import ChecksExample from './pages/modules/components/ChecksExample';
import RangeExample from './pages/modules/components/RangeExample';
import FloatingLabelExample from './pages/modules/components/FloatingLabelExample';
import FormLayoutExample from './pages/modules/components/FormLayoutExample';
import EditorExample from './pages/modules/forms/advance/EditorExample';
import AdvanceSelectExample from './pages/modules/forms/advance/AdvanceSelectExample';
import DatePickerExample from './pages/modules/forms/advance/DatePickerExample';
import EmojiButtonExample from './pages/modules/forms/advance/EmojiButtonExample';
import FileUploaderExample from './pages/modules/forms/advance/FileUploaderExample';
import RatingExample from './pages/modules/forms/advance/RatingExample';
import FormValidationExample from './pages/modules/components/FormValidationExample';
import WizardExample from './pages/modules/forms/WizardExample';
import BackgroundExample from './pages/modules/utilities/BackgroundExample';
import BorderExample from './pages/modules/utilities/BorderExample';
import ColorsExample from './pages/modules/utilities/ColorsExample';
import DisplayExample from './pages/modules/utilities/DisplayExample';
import GridExample from './pages/modules/utilities/GridExample';
import FlexExample from './pages/modules/utilities/FlexExample';
import StackExample from './pages/modules/utilities/StackExample';
import FloatExample from './pages/modules/utilities/FloatExample';
import InteractionsExample from './pages/modules/utilities/InteractionsExample';
import OpacityExample from './pages/modules/utilities/OpacityExample';
import OverflowExample from './pages/modules/utilities/OverflowExample';
import PositionExample from './pages/modules/utilities/PositionExample';
import ShadowsExample from './pages/modules/utilities/ShadowsExample';
import SizingExample from './pages/modules/utilities/SizingExample';
import SpacingExample from './pages/modules/utilities/SpacingExample';
import TypographyExample from './pages/modules/utilities/TypographyExample';
import VerticalAlignExample from './pages/modules/utilities/VerticalAlignExample';
import VisibilityExample from './pages/modules/utilities/VisibilityExample';
import GettingStarted from './pages/documentation/GettingStarted';
import DesignFile from './pages/documentation/DesignFile';
import Configuration from './pages/documentation/customization/Configuration';
import Color from './pages/documentation/customization/Color';
import Styling from './pages/documentation/customization/Styling';
import DarkMode from './pages/documentation/customization/DarkMode';
import ChangeLog from './pages/documentation/ChangeLog';
import Migrations from './pages/documentation/Migrations';
import Widgets from './pages/modules/Widgets';
import Default from './pages/pages/landing/Default';
import Alternate from './pages/pages/landing/Alternate';
import Error404 from './pages/error/Error404';
import Error403 from './pages/error/Error403';
import Error500 from './pages/error/Error500';
import SimpleSignIn from './pages/pages/authentication/simple/SignIn';
import SimpleSignUp from './pages/pages/authentication/simple/SignUp';
import SimpleSignOut from './pages/pages/authentication/simple/SignOut';
import SimpleResetPassword from './pages/pages/authentication/simple/ResetPassword';
import SimpleLockScreen from './pages/pages/authentication/simple/LockScreen';
import SimpleTwoFA from './pages/pages/authentication/simple/TwoFA';
import SimpleForgotPassword from './pages/pages/authentication/simple/ForgotPassword';
import SplitSignIn from './pages/pages/authentication/split/SignIn';
import SplitSignUp from './pages/pages/authentication/split/SignUp';
import SplitSignOut from './pages/pages/authentication/split/SignOut';
import SplitForgotPassword from './pages/pages/authentication/split/ForgotPassword';
import SplitResetPassword from './pages/pages/authentication/split/ResetPassword';
import SplitLockScreen from './pages/pages/authentication/split/LockScreen';
import SplitTwoFA from './pages/pages/authentication/split/TwoFA';
import CardSignIn from './pages/pages/authentication/card/SignIn';
import CardSignUp from './pages/pages/authentication/card/SignUp';
import CardForgotPassword from './pages/pages/authentication/card/ForgotPassword';
import CardSignOut from './pages/pages/authentication/card/SignOut';
import CardResetPassword from './pages/pages/authentication/card/ResetPassword';
import CardTwoFA from './pages/pages/authentication/card/TwoFA';
import CardLockScreen from './pages/pages/authentication/card/LockScreen';
import Showcase from './pages/Showcase';

const ecommerceRoutes: RouteObject[] = [
    {
        element: <App1 />,
        children:[
            {
                path: '/',
                element: (
                  <MainLayoutProvider>
                    <MainLayout />
                  </MainLayoutProvider>
                ),
                children:[
                    {
                        index: true,
                        element: <Ecommerce />
                      },
                      {
                        path: '/apps',
                        children: [
                          {
                            path: 'e-commerce/admin',
                            children: [
                              {
                                path: 'add-product',
                                element: <AddProduct />
                              },
                              {
                                path: 'products',
                                element: <Products />
                              },
                              {
                                path: 'customers',
                                element: <Customers />
                              },
                              {
                                path: 'orders',
                                element: <Orders />
                              },
                              {
                                path: 'order-details',
                                element: <OrderDetails />
                              },
                              {
                                path: 'refund',
                                element: <Refund />
                              },
                              {
                                path: 'customer-details',
                                element: <CustomerDetails />
                              }
                            ]
                          },
                          {
                            path: 'crm',
                            children: [
                              {
                                path: 'analytics',
                                element: <Analytics />
                              },
                              // {
                              //   path: 'deals',
                              //   element: <Deals />
                              // },
                              {
                                path: 'deal-details',
                                element: <DealDetails />
                              },
                              {
                                path: 'report-details',
                                element: <ReportDetails />
                              },
                              {
                                path: 'leads',
                                element: <Leads />
                              },
                              {
                                path: 'lead-details',
                                element: <LeadDetails />
                              },
                              {
                                path: 'reports',
                                element: <Reports />
                              },
                              {
                                path: 'add-contact',
                                element: <AddContact />
                              }
                            ]
                          },
                          {
                            path: 'project-management',
                            children: [
                              {
                                path: 'create-new',
                                element: <CreateNew />
                              },
                              {
                                path: 'project-list-view',
                                element: <ProjectListView />
                              },
                              {
                                path: 'project-card-view',
                                element: <ProjectCardView />
                              },
                              {
                                path: 'project-board-view',
                                element: <ProjectBoardView />
                              },
                              {
                                path: 'todo-list',
                                element: <ProjectTodoList />
                              },
                              {
                                path: 'project-details',
                                element: <ProjectDetails />
                              }
                            ]
                          },
                          {
                            path: 'events',
                            children: [
                              {
                                path: 'create-an-event',
                                element: <CreateAnEvent />
                              },
                              {
                                path: 'event-detail',
                                element: <EventDetail />
                              }
                            ]
                          },
                          {
                            path: 'kanban',
                            children: [
                              {
                                path: 'kanban',
                                element: <Kanban />
                              },
                              {
                                path: 'boards',
                                element: <Boards />
                              },
                              {
                                path: 'create-board',
                                element: <CreateBoard />
                              }
                            ]
                          },
                          {
                            path: 'chat',
                            element: <Chat />,
                            children: [
                              {
                                index: true,
                                element: <ChatHomepage />
                              },
                              {
                                path: ':userId/conversation',
                                element: <ChatConversation />
                              }
                            ]
                          },
                          {
                            path: 'social',
                            children: [
                              {
                                path: 'profile',
                                element: <SocialProfile />
                              },
                              {
                                path: 'settings',
                                element: <Settings />
                              },
                              {
                                path: 'feed',
                                element: <Feed />
                              }
                            ]
                          },
                          {
                            path: 'calendar',
                            element: <Calendar />
                          },
                          {
                            path: 'email',
                            children: [
                              {
                                path: 'inbox',
                                element: <Inbox />
                              },
                              {
                                path: 'email-detail',
                                element: <EmailDetail />
                              },
                              {
                                path: 'compose',
                                element: <Compose />
                              }
                            ]
                          }
                        
                        ]
                      },
                      {
                        path: '/pages',
                        children: [
                          {
                            path: 'starter',
                            element: <Starter />
                          },
                          {
                            path: 'faq',
                            children: [
                              {
                                path: 'faq-accordion',
                                element: <FaqAccordion />
                              },
                              {
                                path: 'faq-tab',
                                element: <FaqTab />
                              }
                            ]
                          },
                          {
                            path: 'pricing',
                            children: [
                              {
                                path: 'pricing-column',
                                element: <PricingColumn />
                              },
                              {
                                path: 'pricing-grid',
                                element: <PricingGrid />
                              }
                            ]
                          },
                          {
                            path: 'notifications',
                            element: <Notification />
                          },
                          {
                            path: 'members',
                            element: <Members />
                          },
                          {
                            path: 'timeline',
                            element: <Timeline />
                          },
                          {
                            path: 'coming-soon',
                            element: <ComingSoon />
                          },
                          {
                            path: 'demo',
                            children: [
                              {
                                path: 'vertical-sidenav',
                                element: <VerticalSidenav />
                              },
                              {
                                path: 'dark-mode',
                                element: <DarkModeDemo />
                              },
                              {
                                path: 'sidenav-collapse',
                                element: <SidenavCollapse />
                              },
                              {
                                path: 'darknav',
                                element: <Darknav />
                              },
                              {
                                path: 'topnav-slim',
                                element: <TopnavSlim />
                              },
                              {
                                path: 'navbar-top-slim',
                                element: <NavbarTopSlim />
                              },
                              {
                                path: 'navbar-top',
                                element: <NavbarTop />
                              },
                              {
                                path: 'horizontal-slim',
                                element: <NavbarHorizontalSlim />
                              },
                              {
                                path: 'combo-nav',
                                element: <ComboNav />
                              },
                              {
                                path: 'combo-nav-slim',
                                element: <ComboNavSlim />
                              },
                              {
                                path: 'dual-nav',
                                element: <DualNav />
                              }
                            ]
                          }
                        ]
                      },
                      {
                        path: '/modules',
                        children: [
                          // {
                          //   path: 'tables',
                          //   children: [
                          //     {
                          //       path: 'basic-tables',
                          //       element: <BasicTableExample />
                          //     },
                          //     {
                          //       path: 'advance-tables',
                          //       element: <AdvanceTableExample />
                          //     }
                          //   ]
                          // },
                          // {
                          //   path: 'charts',
                          //   children: [
                          //     {
                          //       path: 'e-charts',
                          //       element: <ECharts />
                          //     },
                          //     {
                          //       path: 'gantt-chart',
                          //       element: <GanttChart />
                          //     }
                          //   ]
                          // },
                          // {
                          //   path: 'icons',
                          //   children: [
                          //     {
                          //       path: 'font-awesome',
                          //       element: (
                          //         <Suspense fallback={<PhoenixLoader />}>
                          //           <FontAwesomeExample />
                          //         </Suspense>
                          //       )
                          //     },
                          //     {
                          //       path: 'feather',
                          //       element: (
                          //         <Suspense fallback={<PhoenixLoader />}>
                          //           <FeatherIconsExample />
                          //         </Suspense>
                          //       )
                          //     },
                          //     {
                          //       path: 'unicons',
                          //       element: (
                          //         <Suspense fallback={<PhoenixLoader />}>
                          //           <UniconsExample />
                          //         </Suspense>
                          //       )
                          //     }
                          //   ]
                          // },
                          // {
                          //   path: 'components',
                          //   children: [
                          //     {
                          //       path: 'accordion',
                          //       element: <AccordionExample />
                          //     },
                          //     {
                          //       path: 'avatar',
                          //       element: <AvatarExample />
                          //     },
                          //     {
                          //       path: 'alerts',
                          //       element: <AlertsExample />
                          //     },
                          //     {
                          //       path: 'button',
                          //       element: <ButtonExample />
                          //     },
                          //     {
                          //       path: 'badge',
                          //       element: <BadgeExample />
                          //     },
                          //     {
                          //       path: 'breadcrumb',
                          //       element: <BreadcrumbExample />
                          //     },
                          //     {
                          //       path: 'card',
                          //       element: <CardExample />
                          //     },
                          //     {
                          //       path: 'carousel/bootstrap',
                          //       element: <BootstrapCarousel />
                          //     },
                          //     {
                          //       path: 'carousel/swiper',
                          //       element: <SwiperCarousel />
                          //     },
                          //     {
                          //       path: 'collapse',
                          //       element: <CollapseExample />
                          //     },
                          //     {
                          //       path: 'dropdown',
                          //       element: <DropdownExample />
                          //     },
                          //     {
                          //       path: 'list-group',
                          //       element: <ListGroupExample />
                          //     },
                          //     {
                          //       path: 'countup',
                          //       element: <CountupExample />
                          //     },
                          //     {
                          //       path: 'draggable',
                          //       element: <DraggableExample />
                          //     },
                          //     {
                          //       path: 'modal',
                          //       element: <ModalExample />
                          //     },
                          //     {
                          //       path: 'offcanvas',
                          //       element: <OffcanvasExample />
                          //     },
                          //     {
                          //       path: 'progress-bar',
                          //       element: <ProgressbarExample />
                          //     },
                          //     {
                          //       path: 'placeholder',
                          //       element: <PlaceholderExample />
                          //     },
                          //     {
                          //       path: 'pagination',
                          //       element: <PaginationExample />
                          //     },
                          //     {
                          //       path: 'popovers',
                          //       element: <PopoversExample />
                          //     },
                          //     {
                          //       path: 'spinners',
                          //       element: <SpinnerExample />
                          //     },
                          //     {
                          //       path: 'toast',
                          //       element: <ToastsExample />
                          //     },
                          //     {
                          //       path: 'tooltips',
                          //       element: <TooltipExample />
                          //     },
                          //     {
                          //       path: 'calendar',
                          //       element: <CalendarExample />
                          //     },
                          //     {
                          //       path: 'navs-and-tabs/navs',
                          //       element: <NavsExample />
                          //     },
                          //     {
                          //       path: 'navs-and-tabs/tabs',
                          //       element: <TabsExample />
                          //     },
                          //     {
                          //       path: 'navs-and-tabs/navbar',
                          //       element: <NavbarExample />
                          //     },
                          //     {
                          //       path: 'pictures/lightbox',
                          //       element: <LightboxExample />
                          //     }
                          //   ]
                          // },
                          // {
                          //   path: 'forms',
                          //   children: [
                          //     {
                          //       path: 'form-control',
                          //       element: <FormControlExample />
                          //     },
                          //     {
                          //       path: 'input-group',
                          //       element: <InputGroupExample />
                          //     },
                          //     {
                          //       path: 'select',
                          //       element: <SelectExample />
                          //     },
                          //     {
                          //       path: 'checks',
                          //       element: <ChecksExample />
                          //     },
                          //     {
                          //       path: 'range',
                          //       element: <RangeExample />
                          //     },
                          //     {
                          //       path: 'floating-labels',
                          //       element: <FloatingLabelExample />
                          //     },
                          //     {
                          //       path: 'layout',
                          //       element: <FormLayoutExample />
                          //     },
                          //     {
                          //       path: 'editor',
                          //       element: <EditorExample />
                          //     },
                          //     {
                          //       path: 'advance-select',
                          //       element: <AdvanceSelectExample />
                          //     },
                          //     {
                          //       path: 'date-picker',
                          //       element: <DatePickerExample />
                          //     },
                          //     {
                          //       path: 'emoji-button',
                          //       element: <EmojiButtonExample />
                          //     },
                          //     {
                          //       path: 'file-uploader',
                          //       element: <FileUploaderExample />
                          //     },
                          //     {
                          //       path: 'rating',
                          //       element: <RatingExample />
                          //     },
                          //     {
                          //       path: 'validation',
                          //       element: <FormValidationExample />
                          //     },
                          //     {
                          //       path: 'wizard',
                          //       element: <WizardExample />
                          //     }
                          //   ]
                          // },
                          // {
                          //   path: 'utilities',
                          //   children: [
                          //     {
                          //       path: 'background',
                          //       element: <BackgroundExample />
                          //     },
                          //     {
                          //       path: 'borders',
                          //       element: <BorderExample />
                          //     },
                          //     {
                          //       path: 'colors',
                          //       element: <ColorsExample />
                          //     },
                          //     {
                          //       path: 'display',
                          //       element: <DisplayExample />
                          //     },
                          //     {
                          //       path: 'grid',
                          //       element: <GridExample />
                          //     },
                          //     {
                          //       path: 'flex',
                          //       element: <FlexExample />
                          //     },
                          //     {
                          //       path: 'stack',
                          //       element: <StackExample />
                          //     },
                          //     {
                          //       path: 'float',
                          //       element: <FloatExample />
                          //     },
                          //     {
                          //       path: 'interactions',
                          //       element: <InteractionsExample />
                          //     },
                          //     {
                          //       path: 'opacity',
                          //       element: <OpacityExample />
                          //     },
                          //     {
                          //       path: 'overflow',
                          //       element: <OverflowExample />
                          //     },
                          //     {
                          //       path: 'position',
                          //       element: <PositionExample />
                          //     },
                          //     {
                          //       path: 'shadows',
                          //       element: <ShadowsExample />
                          //     },
                          //     {
                          //       path: 'sizing',
                          //       element: <SizingExample />
                          //     },
                          //     {
                          //       path: 'spacing',
                          //       element: <SpacingExample />
                          //     },
                          //     {
                          //       path: 'typography',
                          //       element: <TypographyExample />
                          //     },
                          //     {
                          //       path: 'vertical-align',
                          //       element: <VerticalAlignExample />
                          //     },
                          //     {
                          //       path: 'visibility',
                          //       element: <VisibilityExample />
                          //     }
                          //   ]
                          // }
                        ]
                      },
                      // {
                      //   path: '/documentation',
                      //   children: [
                      //     {
                      //       path: 'getting-started',
                      //       element: <GettingStarted />
                      //     },
                      //     {
                      //       path: 'design-file',
                      //       element: <DesignFile />
                      //     },
                      //     {
                      //       path: 'customization',
                      //       children: [
                      //         {
                      //           path: 'configuration',
                      //           element: <Configuration />
                      //         },
                      //         {
                      //           path: 'color',
                      //           element: <Color />
                      //         },
                      //         {
                      //           path: 'styling',
                      //           element: <Styling />
                      //         },
                      //         {
                      //           path: 'dark-mode',
                      //           element: <DarkMode />
                      //         }
                      //       ]
                      //     }
                      //   ]
                      // },
                      // {
                      //   path: 'changelog',
                      //   element: <ChangeLog />
                      // },
                      // {
                      //   path: 'migrations',
                      //   element: <Migrations />
                      // },
                      {
                        path: 'widgets',
                        element: <Widgets />
                      }

                ]
            },
            {
              path: 'pages/landing',
              children: [
                {
                  path: 'default',
                  element: <Default />
                },
                {
                  path: 'alternate',
                  element: <Alternate />
                }
              ]
            },
            {
              path: '/pages/errors/',
              children: [
                {
                  path: '404',
                  element: <Error404 />
                },
                {
                  path: '403',
                  element: <Error403 />
                },
                {
                  path: '500',
                  element: <Error500 />
                }
              ]
            },
            {
              path: '/pages/authentication/simple/',
              children: [
                {
                  path: 'sign-in',
                  element: <SimpleSignIn />
                },
                {
                  path: 'sign-up',
                  element: <SimpleSignUp />
                },
                {
                  path: 'sign-out',
                  element: <SimpleSignOut />
                },
                {
                  path: 'forgot-password',
                  element: <SimpleForgotPassword />
                },
                {
                  path: 'reset-password',
                  element: <SimpleResetPassword />
                },
                {
                  path: 'lock-screen',
                  element: <SimpleLockScreen />
                },
                {
                  path: '2FA',
                  element: <SimpleTwoFA />
                }
              ]
            },
            {
              path: '/pages/authentication/split/',
              children: [
                {
                  path: 'sign-in',
                  element: <SplitSignIn />
                },
                {
                  path: 'sign-up',
                  element: <SplitSignUp />
                },
                {
                  path: 'sign-out',
                  element: <SplitSignOut />
                },
                {
                  path: 'forgot-password',
                  element: <SplitForgotPassword />
                },
                {
                  path: 'reset-password',
                  element: <SplitResetPassword />
                },
                {
                  path: 'lock-screen',
                  element: <SplitLockScreen />
                },
                {
                  path: '2FA',
                  element: <SplitTwoFA />
                }
              ]
            },
            {
              path: '/pages/authentication/card/',
              children: [
                {
                  path: 'sign-in',
                  element: <CardSignIn />
                },
                {
                  path: 'sign-up',
                  element: <CardSignUp />
                },
                {
                  path: 'sign-out',
                  element: <CardSignOut />
                },
                {
                  path: 'forgot-password',
                  element: <CardForgotPassword />
                },
                {
                  path: 'reset-password',
                  element: <CardResetPassword />
                },
                {
                  path: 'lock-screen',
                  element: <CardLockScreen />
                },
                {
                  path: '2FA',
                  element: <CardTwoFA />
                }
              ]
            },
            {
              path: 'showcase',
              element: <Showcase />
            },
            {
              path: '*',
              element: <Error404 />
            }
        ]
    }
]

const AuthRoutes:RouteObject[]=[
  {
    element: <App1 />,
    children:[
      {
        path: '/',
        element: <CardSignIn />
      }
    ]
  }
]





const routes: RouteObject[] = [
    ...AuthRoutes,
];

export const router = createBrowserRouter(routes);

export default routes;
