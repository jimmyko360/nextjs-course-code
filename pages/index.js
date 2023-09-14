import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Home - Welcome</h1>
            <ul>
                <li>
                    <Link replace={false} href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link replace={false} href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    );
}

