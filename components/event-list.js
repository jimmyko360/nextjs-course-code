import EventItem from "./event-item";

export default function EventList({events}) {
    return (
        <ul>
            {events.map((event) => {
                return <EventItem event={event} key={event.id}/>;
            })}
        </ul>
    );
}
