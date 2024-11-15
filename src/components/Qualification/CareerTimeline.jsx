import { Timeline } from "rsuite";

function CareerTimeline(props) {
  return (
    <Timeline align="alternate">
      {props.type === "education" ? (
        <>
          <Timeline.Item>
            <p>2018 - 2022</p>
            <h5>High School</h5>
            <p>
              <b>Field: </b> IT
            </p>
            <img
              src="zs3-logo.png"
              className="timeline__image"
              alt="zs3-logo"
            ></img>
          </Timeline.Item>
          <Timeline.Item>
            <p>2022 - now</p>
            <h5>Bachelor&apos;s studies</h5>
            <h6>UEK Crackow</h6>
            <p>
              <b>Field:</b> Applied computer science<br></br>
              <b>Specialization:</b> Software engineering
            </p>
            <img
              src="uek-logo.png"
              className="timeline__image"
              alt="UEK logo"
            ></img>
          </Timeline.Item>
        </>
      ) : (
        <>
          <Timeline.Item>
            <p>2022 - 2023</p>
            <h5>Junior IT Specialist</h5>
            <h6>Gąska sp. z o.o.</h6>
            <p>IT support, Helpdesk, MSSQL</p>
            <img
              src="gaska-logo.png"
              className="timeline__image"
              alt="Gąska sp. z o.o. - logo"
            ></img>
          </Timeline.Item>
          <Timeline.Item>
            <p>2023 - now</p>
            <h5>.NET Developer</h5>
            <h6>Gąska sp. z o.o.</h6>
            <p>Rest api, Windows Services, Winforms, ERP addons, MSSQL</p>
            <img
              src="gaska-logo.png"
              className="timeline__image"
              alt="Gąska sp. z o.o. - logo"
            ></img>
          </Timeline.Item>
        </>
      )}
    </Timeline>
  );
}

export default CareerTimeline;
