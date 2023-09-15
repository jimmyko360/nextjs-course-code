import EventList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>Home Page</h1>
            <EventList events={featuredEvents} />
        </div>
    );
}
