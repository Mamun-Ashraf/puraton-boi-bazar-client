import { useEffect, useState } from "react";

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://puraton-boi-bazar-server.vercel.app/users/allbuyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;