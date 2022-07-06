import React from "react";
import Project from "./Project";
import { Helmet } from "react-helmet";
//!------Images--------------------------------
import BrandColor from "../images/BrandColorsProjectImage.png";
import SpendMoneyGame from "../images/SpendMoneyGameImage.png";
import RecipePage from "../images/RecipePageResponsive.png";
import MyTeamPage from "../images/MyTeamPage.png";
import MyGallery from "../images/MyGallery.png";
import InteriorConsultant from "../images/InteriorConsultant.png";
import NotFoundPage from "../images/NotFoundPage.png";
//!----------------------------------------------
function Projects() {
  let projectsData = [
    {
      image: BrandColor,
      tag1: "#React",
      tag2: "#SCSS",
      title: "BrandColors Clone ",
      description: "The biggest collection of official brand color codes around.",
      demoLink: "https://brandcolors-clone.netlify.app/",
      codeLink: "https://github.com/Nihad18/react-brandcolors-clone",
    },
    {
      image: SpendMoneyGame,
      tag1: "#React",
      tag2: "#CSS",
      tag3: "",
      tag4: "",
      title: "Spend money game ",
      description: "You can spend a lot of money on this site. The products you buy are added to the cart, you can delete them from the cart if you want.",
      demoLink: "https://spend-money-game.netlify.app/",
      codeLink: "https://github.com/Nihad18/Spend-Bill-Gates-Money-Game",
    },
    {
      image: RecipePage,
      tag1: "#HTML",
      tag2: "#CSS",
      tag3: "#Bootstrap5",
      tag4: "SCSS",
      title: "Recipe Page",
      description: "Responsive simple template",
      demoLink: "https://recipe-page-devchallengesio.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/recipe-page-master",
    },
    {
      image: MyTeamPage,
      tag1: "#HTML",
      tag2: "#CSS",
      tag3: "#Bootstrap5",
      title: "My team page",
      description: "Responsive simple template",
      demoLin: "https://keen-mcclintock-d120e8.netlify.app/",
      codeLin:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/my-team-page-master",
    },
    {
      image: MyGallery,
      tag1: "#HTML",
      tag2: "#CSS",
      title: "My gallery",
      description: "Responsive simple template",
      demoLin: "https://my-gallery-devchallengesio.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/my-gallery-master",
    },
    {
      image: InteriorConsultant,
      tag1: "#HTML",
      tag2: "#CSS",
      tag3: "#Bootstrap5",
      tag4: "#JavaScript",
      title: "Interior consultant",
      description: "Responsive simple template",
      demoLink: "https://vigilant-euler-ddbdaf.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/interior-consultant-master",
    },
    {
      image: NotFoundPage,
      tag1: "#HTML",
      tag2: "#CSS",
      title: "404 not found page",
      description: "Responsive simple template",
      demoLink: "https://epic-agnesi-ad1998.netlify.app/",
      codeLink:
        "https://github.com/Nihad18/Devchallenges.io-Responsive-Web-Development/tree/main/404-not-found-master",
      },
  ];
      <Helmet>
        <title>Projects</title>
      </Helmet>
  return (
    <div className='project-container'>
      {projectsData.map((item, idx) => (
        <Project
          key={idx}
          image={item.image}
          tag1={item.tag1}
          tag2={item.tag2}
          tag3={item.tag3}
          tag4={item.tag4}
          title={item.title}
          description={item.description}
          demoLink={item.demoLink}
          codeLink={item.codeLink}
        />
      ))}
    </div>
  );
}

export default Projects;
