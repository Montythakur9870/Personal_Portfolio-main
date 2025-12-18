import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import Flip from "react-reveal/Flip";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {/* KMIITT - The detailed Industrial Project */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KMIITT (IT Industrial Training Live Project)
          </h3>
          <p>
            Built using the <b>MERN Stack and TypeScript</b>. 
            I managed the complete architecture including Frontend, Backend, Server, and API creation.
            Integrated <b>Rich Text Editors</b> in the Admin Dashboard for dynamic content management 
            and implemented complex CRUD operations using various libraries.
          </p>
        </VerticalTimelineElement>

        {/* Khiladi India */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Khiladi India
          </h3>
          <p>
            A sports-focused multi-vendor web application.
            Features include vendor management, job postings, and interactive infographic sections 
            for data visualization.
          </p>
        </VerticalTimelineElement>

        {/* Bruchi Video Stream */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bruchi Video Stream
          </h3>
          <p>
            A dynamic video streaming platform similar to YouTube. 
            Includes a powerful Admin Dashboard for managing video content and users.
          </p>
        </VerticalTimelineElement>

        {/* Monty_AI Chat Assistant */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Monty_AI Chat Assistant
          </h3>
          <p>
            An AI-powered chat assistant built with MERN. 
            Integrated with AI APIs to provide real-time responses and intelligent interaction.
          </p>
        </VerticalTimelineElement>

        {/* Ebox Cinema */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ebox Cinema
          </h3>
          <p>
            A full-stack MERN movie ticket booking application featuring a modern UI built with Tailwind CSS.
            Includes complete user workflows for browsing movies, selecting showtimes/seats, 
            and secure user authentication.
          </p>
        </VerticalTimelineElement>

        {/* Kitchen Crockery */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kitchen Crockery
          </h3>
          <p>
            An e-commerce style product showcase website for kitchenware. 
            Features dynamic product sliders and a gold-themed UI design.
          </p>
        </VerticalTimelineElement>

        {/* Italian Chaska */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Italian Chaska
          </h3>
          <p>
            A restaurant and food service website built to showcase menus and services dynamically.
          </p>
        </VerticalTimelineElement>

        {/* Iconic Interior */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iconic Interior
          </h3>
          <p>
            A portfolio website for an interior design business, featuring image galleries and service listings managed via a backend.
          </p>
        </VerticalTimelineElement>

        {/* Dr. Baisoya & Ramanuuj */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dr. Baisoya & Ramanuuj
          </h3>
          <p>
            Developed professional websites for medical and educational clients. 
            Focused on responsive design, appointment/contact forms, and user-friendly interfaces.
          </p>
        </VerticalTimelineElement>

        {/* Indian Victory */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Indian Victory
          </h3>
          <p>
            Developed a comprehensive dynamic website using the MERN stack. 
            Focused on scalable backend architecture.
          </p>
        </VerticalTimelineElement>

        {/* NCR Local */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NCR Local
          </h3>
          <p>
             A local directory platform built on the MERN stack. 
             Engineered to handle search functionality and listing management.
          </p>
        </VerticalTimelineElement>

        {/* Personal Portfolio */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Personal Portfolio
          </h3>
          <p>
            A fully responsive React.js portfolio website to showcase my skills, experience, and projects.
          </p>
        </VerticalTimelineElement>

        {/* Krystal Movies - General */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Krystal Movies Pvt Ltd
          </h3>
          <p>
            Contributed to the development of core digital platforms using React.js and Node.js. 
            Optimized code performance and managed database integrations.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;