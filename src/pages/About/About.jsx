import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2 className="aboutTitle">About Us</h2>
      <p className="aboutText">
        Welcome to our blog! We are passionate about sharing our thoughts and
        experiences with the world. Our mission is to provide valuable and
        informative content on various topics.
      </p>
      <p className="aboutText">
        Whether it's technology, travel, lifestyle, or any other subject, you'll
        find interesting articles and stories here. We believe in the power of
        knowledge and the joy of sharing it.
      </p>
      <p className="aboutText">
        Our team of writers and contributors is dedicated to bringing you
        high-quality content. We hope you enjoy your visit to our blog and find
        the information you're looking for.
      </p>

      <br/>
      <br/>

      <h3 className="aboutSubtitle">Our Mission</h3>
      <p className="aboutText">
        Our mission is to inspire, educate, and entertain our readers. We aim to
        be a trusted source of information on a wide range of topics, from
        informative guides to inspiring stories.
      </p>
      <br/>
      <br/>

      <h3 className="aboutSubtitle">Our Team</h3>
      <p className="aboutText">
        Meet our dedicated team of writers, editors, and contributors who work
        tirelessly to create and curate content that you'll enjoy.
      </p>
    </div>
  );
}
