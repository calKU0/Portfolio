import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const WorkIcon = () => <></>;

function Timeline(props) {
  return (
    <VerticalTimeline>
      {props.type === "education" ? (
        <>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border: "2px solid  var(--icon-color)" }}
            contentArrowStyle={{ borderRight: "10px solid  var(--icon-color)" }}
            date="2022 - present"
            iconStyle={{
              background: "var(--icon-color)",
            }}
            icon={<WorkIcon />}
          >
            <div className="d-flex flex-column">
              <h5 className="vertical-timeline-element-title mb-1">
                <b>Bachelor&apos;s studies</b>
              </h5>
              <h6>UEK Crackow</h6>
              <p className="vertical-timeline-element-subtitle">
                <b>Field:</b> Applied computer science<br></br>
                <b>Specialization:</b> Software engineering
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border: "2px solid  var(--icon-color)" }}
            contentArrowStyle={{ borderRight: "10px solid  var(--icon-color)" }}
            date="2018 - 2022"
            iconStyle={{ background: "var(--icon-color)" }}
            icon={<WorkIcon />}
          >
            <div className="d-flex flex-column">
              <h5 className="vertical-timeline-element-title mb-3">
                <b>High School</b>
              </h5>
              <span className="vertical-timeline-element-subtitle">
                <b>Field: </b> IT
              </span>
            </div>
          </VerticalTimelineElement>
        </>
      ) : (
        <>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border: "2px solid  var(--icon-color)" }}
            contentArrowStyle={{ borderRight: "10px solid  var(--icon-color)" }}
            date="2023 - present"
            iconStyle={{ background: "var(--icon-color)" }}
            icon={<WorkIcon />}
          >
            <div className="d-flex flex-column">
              <h5 className="vertical-timeline-element-title mb-1">
                <b>.NET Developer</b>
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Gąska sp. z o.o.
              </h6>
              <p>Rest api, Windows Services, Winforms, ERP addons, MSSQL</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border: "2px solid  var(--icon-color)" }}
            contentArrowStyle={{ borderRight: "10px solid  var(--icon-color)" }}
            date="2022 - 2023"
            iconStyle={{ background: "var(--icon-color)" }}
            icon={<WorkIcon />}
          >
            <div className="d-flex flex-column">
              <h5 className="vertical-timeline-element-title mb-1">
                <b>Junior IT Specialist</b>
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Gąska sp. z o.o.
              </h6>
              <p>IT support, Helpdesk, MSSQL</p>
            </div>
          </VerticalTimelineElement>
        </>
      )}
    </VerticalTimeline>
  );
}

export default Timeline;
