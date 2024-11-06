function TimelineItem(props) {
  var years = props.DateEnd - props.DateStart;
  return (
    <li className="timeline-item">
      <div className="timeline-body">
        <div className="timeline-meta">
          <span>
            {years} {years === 1 ? "year" : "years"}
          </span>
        </div>
        <div className="timeline-content timeline-indicator">
          <h6 className="mb-1">{props.Name}</h6>
          <span className="text-secondary fs-7">
            {props.DateStart} - {props.DateEnd}
          </span>
        </div>
      </div>
    </li>
  );
}
export default TimelineItem;
