import { useRouter } from "next/router"

export default function ClientPage() {
    const {query} = useRouter();

    console.log("query:", query)

    return (
        <div>
            <h1>Projects for Client {query.clientid}</h1>
        </div>
    )
}