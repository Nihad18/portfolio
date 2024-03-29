import React from "react";
import Project from "./Project";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
//!------Images--------------------------------
import Kovrolin from "../images/kovrolin.png";
import WeatherApp from "../images/Weather.png";
import BrandColor from "../images/BrandColorsProjectImage.png";
import SpendMoneyGame from "../images/SpendMoneyGameImage.png";
import RecipePage from "../images/RecipePageResponsive.png";
import MyTeamPage from "../images/MyTeamPage.png";
import MyGallery from "../images/MyGallery.png";
import InteriorConsultant from "../images/InteriorConsultant.png";
import NotFoundPage from "../images/NotFoundPage.png";
//!----------------------------------------------
function Projects() {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const projectItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  let projectsData = [
    {
      image: Kovrolin,
      tag: "#React #Tailwind CSS #i18next",
      title: "Kovrolin.az ",
      description:
        "The main purpose of this site is to present the products of Kovrolin.az. The site consists of 7 pages: home, about, services, gallery, etc. The site is available in 3 languages: Azerbaijani,English and Russian",
      demoLink: "https://kovrolin.az/",
    },
    {
      image: WeatherApp,
      tag: "#React #Redux #Tailwind.css",
      title: "Weather App ",
      description: "Weather App using React and Redux",
      demoLink: "https://weather-app1react.netlify.app/",
      codeLink: "https://github.com/Nihad18/weather-app-react-redux",
    },
    {
      image: BrandColor,
      tag: "#React #SCSS",
      title: "BrandColors Clone ",
      description:
        "The biggest collection of official brand color codes around.",
      demoLink: "https://brandcolors-clone.netlify.app/",
      codeLink: "https://github.com/Nihad18/react-brandcolors-clone",
    },
    {
      image: SpendMoneyGame,
      tag: "#React #CSS",
      title: "Spend money game ",
      description:
        "You can spend a lot of money on this site. The products you buy are added to the cart, you can delete them from the cart if you want.",
      demoLink: "https://spend-money-game.netlify.app/",
      codeLink: "https://github.com/Nihad18/Spend-Bill-Gates-Money-Game",
    },
    {
      image: RecipePage,
      tag: "#HTML #CSS #Bootstrap5 #SCSS",
      title: "Recipe Page",
      description: "Responsive simple template",
      demoLink: "https://recipe-page-devchallengesio.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/recipe-page-master",
    },
    {
      image: MyTeamPage,
      tag: "#HTML #CSS #Bootstrap5",
      title: "My team page",
      description: "Responsive simple template",
      demoLin: "https://keen-mcclintock-d120e8.netlify.app/",
      codeLin:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/my-team-page-master",
    },
    {
      image: MyGallery,
      tag: "#HTML #CSS",
      title: "My gallery",
      description: "Responsive simple template",
      demoLin: "https://my-gallery-devchallengesio.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/my-gallery-master",
    },
    {
      image: InteriorConsultant,
      tag: "#HTML #CSS #Bootstrap5 #JavaScript",
      title: "Interior consultant",
      description: "Responsive simple template",
      demoLink: "https://vigilant-euler-ddbdaf.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/interior-consultant-master",
    },
    {
      image: NotFoundPage,
      tag: "#HTML #CSS",
      title: "404 not found page",
      description: "Responsive simple template",
      demoLink: "https://epic-agnesi-ad1998.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/404-not-found-master",
    },
  ];
  <Helmet>
    <title>Projects</title>
  </Helmet>;
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={container}
      className='project-container'
    >
      {projectsData.map((item, idx) => (
        <motion.div variants={projectItem}>
          <Project
            key={idx}
            image={item.image}
            tag={item.tag}
            title={item.title}
            description={item.description}
            demoLink={item.demoLink}
            codeLink={item.codeLink}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
