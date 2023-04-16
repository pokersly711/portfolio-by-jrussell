/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "James Russell",
  title: "Digital Creator & Full Stack Developer",
  email: "jamesr71172@gmail.com",
  gitHub: "https://github.com/pokersly711",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/james-russell-54a29717b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMHPkulk5QdyOU2AL5QHaDQ%3D%3D",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#375766";
const secondaryColor = "#BFAE99";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
