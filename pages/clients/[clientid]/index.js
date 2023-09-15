import { useRouter } from "next/router"

export default function ClientPage() {
    // const router = useRouter();
    // you can still reference these methods by destructuring them out too
    const {query, push, replace} = useRouter();

    console.log("query:", query)

    function loadProjectHandler() {
        // router.push("/clients/jim/projecta")
        // router.replace("/clients/jim/projecta")
        push({
            pathname: "[clientid]/[clientprojectid]",
            query: {
                clientid: "jim",
                clientprojectid: "projecta"
            }
        })
        // you can use either router.push() or router.replace()
        // you can also use either a pathname string or an object with pathname & query props
    }

    return (
        <div>
            <h1>Projects for Client {query.clientid}</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}