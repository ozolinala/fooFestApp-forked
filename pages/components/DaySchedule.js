import { List } from "antd";

function DaySchedule({ day, venues }) {
  const schedule = venues.map((venue) => ({
    venue: venue.venue,
    events: venue.schedule[day] || [], // Set a default empty array if venue.schedule[day] is undefined
  }));

  return (
    <List
      dataSource={schedule}
      renderItem={(item) => (
        <List.Item>
          <h2>{item.venue}</h2>
          {item.events.length > 0 ? (
            item.events.map((event, index) => (
              <div key={index}>
                <p>Act: {event.act}</p>
                <p>Start: {event.start}</p>
                <p>End: {event.end}</p>
              </div>
            ))
          ) : (
            <p>No events</p>
          )}
        </List.Item>
      )}
    />
  );
}

export default DaySchedule;
