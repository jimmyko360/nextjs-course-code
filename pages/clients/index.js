import Link from "next/link";

export default function ClientsListPage() {
    const clients = [
        { id: "jim", name: "Jim" },
        { id: "my", name: "My" },
    ];
    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map((client) => {
                    return (
                        <li key={client.id}>
                            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                            <Link
                                href={{
                                    pathname: "/clients/[clientid]",
                                    query: { clientid: client.id },
                                }}
                            >
                                {client.name}
                            </Link>
                            {/* You can use either of these formats to create Links (you would only use one at a time obviously) */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
