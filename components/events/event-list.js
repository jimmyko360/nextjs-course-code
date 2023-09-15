import EventItem from "./event-item";
import classes from "./event-list.module.css"

export default function EventList({events}) {
    return (
        <ul className={classes.list}>
            {events.map((event) => {
                return <EventItem event={event} key={event.id}/>;
            })}
        </ul>
    );
}
