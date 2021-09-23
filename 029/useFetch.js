import { useState, useEffect } from 'react'

const useFetch = (url) => {
    
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toDos, setToDos] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            setToDos(data)
            setLoading(false)
            setError(null)
        })
        .catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, [url]);

    return { toDos, isLoading, error }

}

export default useFetch;