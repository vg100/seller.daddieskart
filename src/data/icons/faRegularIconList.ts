import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashCan,
  faTrashAlt,
  faMessage,
  faCommentAlt,
  faFileLines,
  faFileAlt,
  faFileText,
  faCalendarDays,
  faCalendarAlt,
  faHandPointRight,
  faFaceSmileBeam,
  faSmileBeam,
  faFaceGrinStars,
  faGrinStars,
  faAddressBook,
  faContactBook,
  faComments,
  faPaste,
  faFileClipboard,
  faFaceGrinTongueSquint,
  faGrinTongueSquint,
  faFaceFlushed,
  faFlushed,
  faSquareCaretRight,
  faCaretSquareRight,
  faSquareMinus,
  faMinusSquare,
  faCompass,
  faSquareCaretDown,
  faCaretSquareDown,
  faFaceKissBeam,
  faKissBeam,
  faLightbulb,
  faFlag,
  faSquareCheck,
  faCheckSquare,
  faCircleDot,
  faDotCircle,
  faFaceDizzy,
  faDizzy,
  faFutbol,
  faFutbolBall,
  faSoccerBall,
  faPenToSquare,
  faEdit,
  faHourglassHalf,
  faHourglass2,
  faEyeSlash,
  faHand,
  faHandPaper,
  faHandSpock,
  faFaceKiss,
  faKiss,
  faFaceGrinTongue,
  faGrinTongue,
  faChessBishop,
  faFaceGrinWink,
  faGrinWink,
  faFaceGrinWide,
  faGrinAlt,
  faFaceFrownOpen,
  faFrownOpen,
  faHandPointUp,
  faBookmark,
  faHandPointDown,
  faFolder,
  faFolderBlank,
  faUser,
  faSquareCaretLeft,
  faCaretSquareLeft,
  faStar,
  faChessKnight,
  faFaceLaughSquint,
  faLaughSquint,
  faFaceLaugh,
  faLaugh,
  faFolderOpen,
  faClipboard,
  faChessQueen,
  faHandBackFist,
  faHandRock,
  faSquareCaretUp,
  faCaretSquareUp,
  faChartBar,
  faBarChart,
  faWindowRestore,
  faSquarePlus,
  faPlusSquare,
  faImage,
  faFolderClosed,
  faLemon,
  faHandshake,
  faGem,
  faCirclePlay,
  faPlayCircle,
  faCircleCheck,
  faCheckCircle,
  faCircleStop,
  faStopCircle,
  faIdBadge,
  faFaceLaughBeam,
  faLaughBeam,
  faRegistered,
  faAddressCard,
  faContactCard,
  faVcard,
  faFaceTired,
  faTired,
  faFontAwesome,
  faFontAwesomeFlag,
  faFontAwesomeLogoFull,
  faFaceSmileWink,
  faSmileWink,
  faFileWord,
  faFilePowerpoint,
  faEnvelopeOpen,
  faFileZipper,
  faFileArchive,
  faSquare,
  faSnowflake,
  faNewspaper,
  faFaceKissWinkHeart,
  faKissWinkHeart,
  faStarHalfStroke,
  faStarHalfAlt,
  faFileExcel,
  faFaceGrinBeam,
  faGrinBeam,
  faObjectUngroup,
  faCircleRight,
  faArrowAltCircleRight,
  faFaceRollingEyes,
  faMehRollingEyes,
  faObjectGroup,
  faHeart,
  faFaceSurprise,
  faSurprise,
  faCirclePause,
  faPauseCircle,
  faCircle,
  faCircleUp,
  faArrowAltCircleUp,
  faFileAudio,
  faFileImage,
  faCircleQuestion,
  faQuestionCircle,
  faFaceMehBlank,
  faMehBlank,
  faEye,
  faFaceSadCry,
  faSadCry,
  faFileCode,
  faWindowMaximize,
  faFaceFrown,
  faFrown,
  faFloppyDisk,
  faSave,
  faCommentDots,
  faCommenting,
  faFaceGrinSquint,
  faGrinSquint,
  faHandPointer,
  faHandScissors,
  faFaceGrinTears,
  faGrinTears,
  faCalendarXmark,
  faCalendarTimes,
  faFileVideo,
  faFilePdf,
  faComment,
  faEnvelope,
  faHourglass,
  faHourglassEmpty,
  faCalendarCheck,
  faHardDrive,
  faHdd,
  faFaceGrinSquintTears,
  faGrinSquintTears,
  faRectangleList,
  faListAlt,
  faCalendarPlus,
  faCircleLeft,
  faArrowAltCircleLeft,
  faMoneyBill1,
  faMoneyBillAlt,
  faClock,
  faClockFour,
  faKeyboard,
  faClosedCaptioning,
  faImages,
  faFaceGrin,
  faGrin,
  faFaceMeh,
  faMeh,
  faIdCard,
  faDriversLicense,
  faSun,
  faFaceLaughWink,
  faLaughWink,
  faCircleDown,
  faArrowAltCircleDown,
  faThumbsDown,
  faChessPawn,
  faCreditCard,
  faCreditCardAlt,
  faBell,
  faFile,
  faHospital,
  faHospitalAlt,
  faHospitalWide,
  faChessRook,
  faStarHalf,
  faChessKing,
  faCircleUser,
  faUserCircle,
  faCopy,
  faShareFromSquare,
  faShareSquare,
  faCopyright,
  faMap,
  faBellSlash,
  faHandLizard,
  faFaceSmile,
  faSmile,
  faHandPeace,
  faFaceGrinHearts,
  faGrinHearts,
  faBuilding,
  faFaceGrinBeamSweat,
  faGrinBeamSweat,
  faMoon,
  faCalendar,
  faFaceGrinTongueWink,
  faGrinTongueWink,
  faClone,
  faFaceAngry,
  faAngry,
  faRectangleXmark,
  faRectangleTimes,
  faTimesRectangle,
  faWindowClose,
  faPaperPlane,
  faLifeRing,
  faFaceGrimace,
  faGrimace,
  faCalendarMinus,
  faCircleXmark,
  faTimesCircle,
  faXmarkCircle,
  faThumbsUp,
  faWindowMinimize,
  faSquareFull,
  faNoteSticky,
  faStickyNote,
  faFaceSadTear,
  faSadTear,
  faHandPointLeft
} from '@fortawesome/free-regular-svg-icons';

export const faRegularIconList: { [key: string]: IconProp } = {
  faTrashCan,
  faTrashAlt,
  faMessage,
  faCommentAlt,
  faFileLines,
  faFileAlt,
  faFileText,
  faCalendarDays,
  faCalendarAlt,
  faHandPointRight,
  faFaceSmileBeam,
  faSmileBeam,
  faFaceGrinStars,
  faGrinStars,
  faAddressBook,
  faContactBook,
  faComments,
  faPaste,
  faFileClipboard,
  faFaceGrinTongueSquint,
  faGrinTongueSquint,
  faFaceFlushed,
  faFlushed,
  faSquareCaretRight,
  faCaretSquareRight,
  faSquareMinus,
  faMinusSquare,
  faCompass,
  faSquareCaretDown,
  faCaretSquareDown,
  faFaceKissBeam,
  faKissBeam,
  faLightbulb,
  faFlag,
  faSquareCheck,
  faCheckSquare,
  faCircleDot,
  faDotCircle,
  faFaceDizzy,
  faDizzy,
  faFutbol,
  faFutbolBall,
  faSoccerBall,
  faPenToSquare,
  faEdit,
  faHourglassHalf,
  faHourglass2,
  faEyeSlash,
  faHand,
  faHandPaper,
  faHandSpock,
  faFaceKiss,
  faKiss,
  faFaceGrinTongue,
  faGrinTongue,
  faChessBishop,
  faFaceGrinWink,
  faGrinWink,
  faFaceGrinWide,
  faGrinAlt,
  faFaceFrownOpen,
  faFrownOpen,
  faHandPointUp,
  faBookmark,
  faHandPointDown,
  faFolder,
  faFolderBlank,
  faUser,
  faSquareCaretLeft,
  faCaretSquareLeft,
  faStar,
  faChessKnight,
  faFaceLaughSquint,
  faLaughSquint,
  faFaceLaugh,
  faLaugh,
  faFolderOpen,
  faClipboard,
  faChessQueen,
  faHandBackFist,
  faHandRock,
  faSquareCaretUp,
  faCaretSquareUp,
  faChartBar,
  faBarChart,
  faWindowRestore,
  faSquarePlus,
  faPlusSquare,
  faImage,
  faFolderClosed,
  faLemon,
  faHandshake,
  faGem,
  faCirclePlay,
  faPlayCircle,
  faCircleCheck,
  faCheckCircle,
  faCircleStop,
  faStopCircle,
  faIdBadge,
  faFaceLaughBeam,
  faLaughBeam,
  faRegistered,
  faAddressCard,
  faContactCard,
  faVcard,
  faFaceTired,
  faTired,
  faFontAwesome,
  faFontAwesomeFlag,
  faFontAwesomeLogoFull,
  faFaceSmileWink,
  faSmileWink,
  faFileWord,
  faFilePowerpoint,
  faEnvelopeOpen,
  faFileZipper,
  faFileArchive,
  faSquare,
  faSnowflake,
  faNewspaper,
  faFaceKissWinkHeart,
  faKissWinkHeart,
  faStarHalfStroke,
  faStarHalfAlt,
  faFileExcel,
  faFaceGrinBeam,
  faGrinBeam,
  faObjectUngroup,
  faCircleRight,
  faArrowAltCircleRight,
  faFaceRollingEyes,
  faMehRollingEyes,
  faObjectGroup,
  faHeart,
  faFaceSurprise,
  faSurprise,
  faCirclePause,
  faPauseCircle,
  faCircle,
  faCircleUp,
  faArrowAltCircleUp,
  faFileAudio,
  faFileImage,
  faCircleQuestion,
  faQuestionCircle,
  faFaceMehBlank,
  faMehBlank,
  faEye,
  faFaceSadCry,
  faSadCry,
  faFileCode,
  faWindowMaximize,
  faFaceFrown,
  faFrown,
  faFloppyDisk,
  faSave,
  faCommentDots,
  faCommenting,
  faFaceGrinSquint,
  faGrinSquint,
  faHandPointer,
  faHandScissors,
  faFaceGrinTears,
  faGrinTears,
  faCalendarXmark,
  faCalendarTimes,
  faFileVideo,
  faFilePdf,
  faComment,
  faEnvelope,
  faHourglass,
  faHourglassEmpty,
  faCalendarCheck,
  faHardDrive,
  faHdd,
  faFaceGrinSquintTears,
  faGrinSquintTears,
  faRectangleList,
  faListAlt,
  faCalendarPlus,
  faCircleLeft,
  faArrowAltCircleLeft,
  faMoneyBill1,
  faMoneyBillAlt,
  faClock,
  faClockFour,
  faKeyboard,
  faClosedCaptioning,
  faImages,
  faFaceGrin,
  faGrin,
  faFaceMeh,
  faMeh,
  faIdCard,
  faDriversLicense,
  faSun,
  faFaceLaughWink,
  faLaughWink,
  faCircleDown,
  faArrowAltCircleDown,
  faThumbsDown,
  faChessPawn,
  faCreditCard,
  faCreditCardAlt,
  faBell,
  faFile,
  faHospital,
  faHospitalAlt,
  faHospitalWide,
  faChessRook,
  faStarHalf,
  faChessKing,
  faCircleUser,
  faUserCircle,
  faCopy,
  faShareFromSquare,
  faShareSquare,
  faCopyright,
  faMap,
  faBellSlash,
  faHandLizard,
  faFaceSmile,
  faSmile,
  faHandPeace,
  faFaceGrinHearts,
  faGrinHearts,
  faBuilding,
  faFaceGrinBeamSweat,
  faGrinBeamSweat,
  faMoon,
  faCalendar,
  faFaceGrinTongueWink,
  faGrinTongueWink,
  faClone,
  faFaceAngry,
  faAngry,
  faRectangleXmark,
  faRectangleTimes,
  faTimesRectangle,
  faWindowClose,
  faPaperPlane,
  faLifeRing,
  faFaceGrimace,
  faGrimace,
  faCalendarMinus,
  faCircleXmark,
  faTimesCircle,
  faXmarkCircle,
  faThumbsUp,
  faWindowMinimize,
  faSquareFull,
  faNoteSticky,
  faStickyNote,
  faFaceSadTear,
  faSadTear,
  faHandPointLeft
};
