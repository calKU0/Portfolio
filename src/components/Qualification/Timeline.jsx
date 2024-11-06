import TimelineItem from "./TimelineItem";

function Timeline(props) {
  return (
    <ul className="timeline">
      {props.type === "education" ? (
        <>
          <TimelineItem
            Name="IT Technical school"
            DateStart={2018}
            DateEnd={2022}
          />
          <TimelineItem
            Name="Bachelor's studies in applied computer science"
            DateStart={2022}
            DateEnd={2024}
          />
        </>
      ) : (
        <>
          <TimelineItem
            Name="Gaska sp. z o.o."
            DateStart={2022}
            DateEnd={2024}
          />
        </>
      )}
    </ul>
  );
}

export default Timeline;
