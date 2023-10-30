import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
    // const [isLoading, setIsLoading] = useState(false);
    const [salesData, setSalesData] = useState(props.sales);

    const { data, error, isLoading } = useSWR(
        "https://react-refresher-ff088-default-rtdb.firebaseio.com/sales.json",
        (url) => {
            return fetch(url).then((res) => res.json());
            // .then((parsedData) => {
            //     const transformedData = [];
            //     for (const sale in parsedData) {
            //         transformedData.push({
            //             id: sale,
            //             username: parsedData[sale].username,
            //             volume: parsedData[sale].volume,
            //         });
            //     }
            //     return transformedData;
            // });
        }
    );

    useEffect(() => {
        // FOR USE WITH useSWR
        console.log("in useEffect:", data)
        const transformedData = [];
        for (const sale in data) {
            transformedData.push({
                id: sale,
                username: data[sale].username,
                volume: data[sale].volume,
            });
        }
        setSalesData(transformedData);

        // FOR USE WITHOUT useSWR

        // console.log("in useEffect")
        // setIsLoading(true);
        // fetch(
        //     "https://react-refresher-ff088-default-rtdb.firebaseio.com/sales.json"
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         const transformedData = [];
        //         for (const sale in data) {
        //             transformedData.push({
        //                 id: sale,
        //                 username: data[sale].username,
        //                 volume: data[sale].volume,
        //             });
        //         }
        //         setSalesData(transformedData);
        //         setIsLoading(false);
        //     });
    }, [data]);

    if (error) {
        console.log(error);
        return <p>Failed to Load</p>;
    }

    if (isLoading && !salesData) {
        return <p>Loading...</p>;
    }

    if (!salesData) {
        return <p>Data Not Found</p>;
    }

    return (
        <ul>
            {salesData.map((sale) => {
                return (
                    <li key={sale.id}>
                        <p>Salesman: {sale.username}</p>
                        <p>Sales: {sale.volume}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        "https://react-refresher-ff088-default-rtdb.firebaseio.com/sales.json"
    );

    const data = await response.json();

    const transformedData = [];

    for (const sale in data) {
        transformedData.push({
            id: sale,
            username: data[sale].username,
            volume: data[sale].volume,
        });
    }
    return {
        props: {
            sales: transformedData,
        },
        revalidate: 5,
    };
}
