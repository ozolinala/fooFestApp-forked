import { List } from "antd";
import styles from "@/styles/Program.module.css";

function DaySchedule({ day, venues }) {
  const schedule = venues.map((venue) => ({
    venue: venue.venue,
    events: venue.schedule[day] || [],
  }));

  const filteredSchedule = schedule.map((item) => ({
    ...item,
    events: item.events.filter((event) => event.act !== "break"),
  }));

  return (
    <List
      dataSource={filteredSchedule}
      renderItem={(item) => (
        <List.Item>
          <h3>{item.venue}</h3>
          <div className={styles.ActInfoContainer}>
            {item.events.length > 0 ? (
              item.events.map((event, index) => (
                <div className={styles.ActInfo} key={index}>
                  <p>{event.act.toUpperCase()}</p>
                  <p>
                    {event.start.split(":")[0]}-{event.end.split(":")[0]}
                  </p>
                </div>
              ))
            ) : (
              <p>No events</p>
            )}
          </div>
        </List.Item>
      )}
    />
  );
}

export default DaySchedule;
