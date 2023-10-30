import { useEffect, useState } from "react";

export default function LastSalesPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [salesData, setSalesData] = useState();

    useEffect(() => {
        setIsLoading(true);

        fetch(
            "https://react-refresher-ff088-default-rtdb.firebaseio.com/sales.json"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const transformedData = [];
                for (const sale in data) {
                    console.log(sale)
                    transformedData.push({
                        id: sale,
                        username: data[sale].username,
                        volume: data[sale].volume,
                    });
                }
                console.log(transformedData)
                setSalesData(transformedData);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!salesData) {
        return <p>Data Not Found</p>;
    }

    return (
        <ul>
            {salesData.map((sale) => {
                return (
                    <li>
                        <p>Salesman: {sale.username}</p>
                        <p>Sales: {sale.volume}</p>
                    </li>
                );
            })}
        </ul>
    );
}
