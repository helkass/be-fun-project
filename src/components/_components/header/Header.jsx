import React from "react";
import {
  NavbarWrapper,
  HeaderWrapper,
  AboutHeaderWrapper,
  LinkWrapper,
  Logo,
  ContentCenterWrapper,
  InputWrapper,
  SideContent,
  ButtonCategory,
  RightWrapper,
  ButtonAuthWrapper,
  ButtonAuth,
  LocationWrapper,
  MobileIcon,
  MobileNavbarWrapper,
  MobileFlex,
  MobileContent,
} from "./headerStyled";
import { IoIosPhonePortrait, IoIosArrowDown } from "react-icons/io";
import LinkAboutHaader from "../../atoms/link/Link";
import tokopediaLogo from "../../../assets/tokopedia-logo.svg";
import { Link } from "react-router-dom";
import { BsSearch, BsCartFill, BsBag } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import {
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { HiOutlineBars3, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { ContentWrapper } from "../footer/footerStyled";
import LinkTitle from "../../atoms/link/Link";
import { mobileNavContents } from "./data";
import { RiBillLine } from "react-icons/ri";
import { SlPlane } from "react-icons/sl";
import { GrMoney } from "react-icons/gr";

const Header = () => {
  const [header, setHeader] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <HeaderWrapper shadowEffect={header}>
      <AboutHeader />
      <NavbarWrapper>
        {/* logo */}
        <SideContent>
          <Link to="/">
            <Logo src={tokopediaLogo} alt="logo-tokopedia" />
          </Link>
          <ButtonCategory>Kategori</ButtonCategory>
        </SideContent>
        <ContentCenterWrapper>
          <InputWrapper>
            <BsSearch />
            <input
              type="search"
              name="search"
              placeholder="Cari di Tokopedia"
            />
          </InputWrapper>
          <LinkWrapper>
            {linksRecommendations.map((link) => (
              <LinkAboutHaader key={link} color="rgba(0,0,0,0.64)">
                {link}
              </LinkAboutHaader>
            ))}
          </LinkWrapper>
          {/* mobile only */}
          <MobileIcon>
            <AiOutlineMail size={24} />
          </MobileIcon>
          <MobileIcon>
            <MdOutlineNotifications size={24} />
          </MobileIcon>
          <MobileIcon>
            <AiOutlineShoppingCart size={24} />
          </MobileIcon>
          <MobileIcon onClick={() => setShowNav(!showNav)}>
            <HiOutlineBars3 size={24} />
          </MobileIcon>
        </ContentCenterWrapper>
        <RightWrapper>
          <SideContent>
            <ButtonCategory padding="4px">
              <BsCartFill size={20} />
            </ButtonCategory>
            <ButtonAuthWrapper>
              <ButtonAuth>Masuk</ButtonAuth>
              <ButtonAuth color="white">Daftar</ButtonAuth>
            </ButtonAuthWrapper>
          </SideContent>
          <LocationWrapper>
            <TfiLocationPin size={15} />
            Dikirim ke
            <span>Jakarta Pusat</span>
            <IoIosArrowDown size={15} />
          </LocationWrapper>
        </RightWrapper>
      </NavbarWrapper>
      {/* on mobile only */}
      <MobileNavbar isOpen={showNav} isClose={() => setShowNav(false)} />
    </HeaderWrapper>
  );
};

const AboutHeader = () => {
  return (
    <AboutHeaderWrapper>
      <LinkWrapper>
        <LinkAboutHaader to="/" fs="12px">
          <IoIosPhonePortrait size={20} />
          download tokopedia app
        </LinkAboutHaader>
      </LinkWrapper>
      <LinkWrapper>
        {links.map((link) => (
          <LinkAboutHaader fs="12px" key={link.title} to="/">
            {link.title}
          </LinkAboutHaader>
        ))}
      </LinkWrapper>
    </AboutHeaderWrapper>
  );
};

const MobileNavbar = ({ isOpen, isClose }) => {
  return (
    <MobileNavbarWrapper isOpen={isOpen}>
      <MobileFlex>
        <button onClick={isClose}>
          <AiOutlineClose size={20} />
        </button>
        <h4>Menu Utama</h4>
      </MobileFlex>
      <MobileFlex>
        <ButtonAuth color="white">Masuk</ButtonAuth>
        <ButtonAuth>Daftar</ButtonAuth>
      </MobileFlex>
      <MobileContent>
        {mobileNavContents.map((nav, idx) => (
          <ContentWrapper rowGap="1.5rem" key={idx}>
            <h4>{nav.title}</h4>
            {nav.content.map((ct, idx) => {
              const Icon = icons[idx];
              return (
                <LinkTitle fs="0.9rem" to="/" key={idx}>
                  <Icon size={20} color="#003" />
                  {ct}
                </LinkTitle>
              );
            })}
          </ContentWrapper>
        ))}
      </MobileContent>
    </MobileNavbarWrapper>
  );
};

const links = [
  {
    title: "tentang tokopedia",
    link: "/",
  },
  {
    title: "mitra tokopedia",
    link: "/",
  },
  {
    title: "mulai berjualan",
    link: "/",
  },
  {
    title: "promo",
    link: "/",
  },
  {
    title: "tokopedia care",
    link: "/",
  },
];

const icons = [
  RiBillLine,
  AiOutlineHeart,
  AiOutlineStar,
  HiOutlineBuildingStorefront,
  BsBag,
  RiBillLine,
  SlPlane,
  GrMoney,
  HiOutlineDotsCircleHorizontal,
];

const linksRecommendations = [
  "Poco M5",
  "Pel Lantai",
  "Kaos Polos",
  "Iphone 14 Pro Ibox",
  "Lem Sepatu",
  "Jersey Bola",
];

export default Header;
