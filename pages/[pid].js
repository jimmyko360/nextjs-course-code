import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

export default function ProductDetailPage(props) {
    return (
        <Fragment>
            <h1>{props.loadedProduct.title}</h1>
            <p>{props.loadedProduct.description}</p>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    console.log(context);
    console.log(context.params);

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    const product = data.products.find((product) => productId === product.id);

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: "p1" } },
            { params: { pid: "p2" } },
            { params: { pid: "p3" } },
        ],
        fallback: false,
    };
}