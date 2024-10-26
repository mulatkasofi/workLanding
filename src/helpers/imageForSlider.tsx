import firstImg from '../img/workIcons/workImg1.png';
import secondImg from '../img/workIcons/workImg2.png';
import thirdImg from '../img/workIcons/workImg3.png';
import fifthImg from '../img/workIcons/workImg5.png';
import sixImg from '../img/workIcons/workImg6.png';
import sevenImg from '../img/workIcons/workImg7.png';
import eightIng from '../img/workIcons/workImg8.png';
import nineImg from '../img/workIcons/workImg9.png'
import tenImg from '../img/workIcons/workIng10.png'
import { useTranslation } from 'react-i18next';

export const useImageForSliderArrowData = () => {
  const { t } = useTranslation();

  const imageForSliderArrow = [
    {
      link: "https://www.behance.net/gallery/210003233/Landing-page-for-casino",
      img: nineImg,
      title: t("latestWorkSlide.landingPage"),
    },
    {
      link: "https://www.behance.net/gallery/205176055/Marketing-agency-landing-page",
      img: eightIng,
      title: t("latestWorkSlide.landingPage"),
    },
    {
      link: "https://www.behance.net/gallery/193340783/interner-magazin-vinilovyh-plastinok",
      img: firstImg,
      title: t("latestWorkSlide.onlineStore"),
    },
    {
      link: "https://www.behance.net/gallery/210213219/design-for-website-landing-page",
      img: tenImg,
      title: t("latestWorkSlide.landingPage"),
    },
    {
      link: "https://www.behance.net/gallery/179360543/sajt-dlja-stomatologii",
      img: secondImg,
      title: t("latestWorkSlide.corporate"),
    },
    {
      link: "https://www.behance.net/gallery/193342945/onlajn-shkola-jazykov-programmirovanija",
      img: thirdImg,
      title: t("latestWorkSlide.onlineSchool"),
    },
    {
      link: "https://www.behance.net/gallery/193343855/lending-barbershop",
      img: fifthImg,
      title: t("latestWorkSlide.landingPage"),
    },
    {
      link: "https://www.behance.net/gallery/193342669/lending-dlja-avto",
      img: sixImg,
      title: t("latestWorkSlide.landingPage"),
    },
    {
      link: "https://www.behance.net/gallery/165504921/COMMERCIAL-PROJEKT-FOR-CONVERSE-LANDING-PAGE",
      img: sevenImg,
      title: t("latestWorkSlide.landingPage"),
    },
  ];

  return imageForSliderArrow;
};
