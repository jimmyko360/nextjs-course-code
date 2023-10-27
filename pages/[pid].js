import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

export default function ProductDetailPage(props) {
    const { loadedProduct } = props;

    // if (!loadedProduct) {
    //     return <p>Loading...</p>
    // }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

async function fetchData() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    console.log(context);
    console.log(context.params);

    const data = await fetchData();
    const product = data.products.find((product) => productId === product.id);

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    const data = await fetchData();
    const paths = data.products.map((product) => ({
        params: { pid: product.id },
    }));

    return {
        // paths: [
        //     { params: { pid: "p1" } },
        //     { params: { pid: "p2" } },
        //     { params: { pid: "p3" } },
        // ],
        paths: paths,
        fallback: false,
        // fallback: true,
        // fallback: "blocking",
    };
}
