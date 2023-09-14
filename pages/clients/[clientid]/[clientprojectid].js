import { useRouter } from "next/router"

export default function ClientProjectPage() {
    // const {query} = useRouter();
    const router = useRouter();

    console.log("pathname:", router.pathname);
    console.log("query:", router.query);
    

    return (
        <div>
            <h1>{router.query.clientid}'s Project {router.query.clientprojectid}</h1>
        </div>
    )
}