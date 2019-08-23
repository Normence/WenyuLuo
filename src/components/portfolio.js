import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const webProjectItems = [
  {
    imgSrc: "./img/HeightLandmark.png",
    heading: "Height Beijing Landmarks",
    description: "An ingenious trip to discover the most famous landmarks of the Beijing city from the perspective of their height.",
    src: 'http://wenyuluo.com/HeightLandmark',
  },
  {
    imgSrc: "./img/TytoItinerary.png",
    heading: "TYTO Itinerary Builder",
    description: "A TripAdvisor intern hackathon project that helps you build your itinerary easily with products from TripAdvisor.",
    src: 'http://wenyuluo.com/TytoItinerary',
  },
  // {
  //   imgSrc: "./img/portfolio-2.jpg",
  //   heading: "Ice Cream",
  //   description:
  //     "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  // },
  // {
  //   imgSrc: "./img/portfolio-3.jpg",
  //   heading: "Strawberries",
  //   description:
  //     "Strawberries are such a tasty snack, especially with a little sugar on top!"
  // },
  // {
  //   imgSrc: "./img/portfolio-4.jpg",
  //   heading: "Workspace",
  //   description:
  //     "A yellow workspace with some scissors, pencils, and other objects."
  // }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-2">Portfolio</h3>
          <h2 className="mb-5">Web Projects</h2>
        </div>
        <div>
          {webProjectItems.map((project, index) => (
            <div className="mb-5" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href={project.src}>
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
        <div className="content-section-heading text-center">
          <h2 className="mb-5">Game Projects</h2>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className='mb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7AxXwMAbs-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nSnVwmP-nSA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);


export default PortfolioSection;
