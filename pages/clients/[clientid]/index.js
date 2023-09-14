import { useRouter } from "next/router"

export default function ClientPage() {
    const {query} = useRouter();

    return (
        <div>
            <h1>{query.clientid}'s Projects</h1>
        </div>
    )
}