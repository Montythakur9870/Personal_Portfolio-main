import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import {
  DiReact,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
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
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {/* Languages */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiJavascript1 />}
        >
          <h3 className="vertical-timeline-element-title">JAVASCRIPT (ES6+)</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">TYPESCRIPT</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">C / C++</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<StorageIcon />}
        >
          <h3 className="vertical-timeline-element-title">DATA STRUCTURES & ALGORITHMS (DSA)</h3>
        </VerticalTimelineElement>

        {/* Frontend Frameworks & Libraries */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiReact />}
        >
          <h3 className="vertical-timeline-element-title">REACT JS & REDUX</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiCss3 />}
        >
          <h3 className="vertical-timeline-element-title">TAILWIND CSS</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiBootstrap />}
        >
          <h3 className="vertical-timeline-element-title">BOOTSTRAP</h3>
        </VerticalTimelineElement>

        {/* Backend & Database */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiNodejs />}
        >
          <h3 className="vertical-timeline-element-title">NODE JS</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiNodejs />}
        >
          <h3 className="vertical-timeline-element-title">EXPRESS JS</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiMongodb />}
        >
          <h3 className="vertical-timeline-element-title">MONGODB & MONGOOSE</h3>
        </VerticalTimelineElement>

        {/* Tools & Version Control */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiGit />}
        >
          <h3 className="vertical-timeline-element-title">GIT & GITHUB</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">POSTMAN (API TESTING)</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;