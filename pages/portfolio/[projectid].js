import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
    // const router = useRouter();
    const { query } = useRouter();

    // console.log("pathname:", router.pathname);
    // console.log("query:", router.query);

    return (
        <div>
            <h1>Portfolio Projects</h1>
            <h3>{query.projectid}</h3>
        </div>
    );
}
