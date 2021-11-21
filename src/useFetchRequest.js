import { useState, useEffect } from "react";

const useFetchRequest = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fecth data for the resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                   
                    console.log("hiuu", data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } 
                    else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 500);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetchRequest;