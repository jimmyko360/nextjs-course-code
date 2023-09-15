import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem({ event }) {
    const { id, title, location, date, image } = event;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(",", "\n");

    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button
                        link={{
                            pathname: "/events/[eventid]",
                            query: {
                                eventid: id,
                            },
                        }}
                    >
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
