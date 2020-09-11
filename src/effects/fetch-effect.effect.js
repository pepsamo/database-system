import { useState, useEffect } from "react"
import { retrieveUsers } from "../reducers/actions";

function useFetch(url, dispatch) {
    const [data, setData] = useState(null);
    useEffect(() => {
        dispatch({ type: 'LOAD_USERS_START' });
        const fetchData = () => {
            fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    setData(json);
                    dispatch(retrieveUsers(json));
                })
                .catch(() => {
                    dispatch({ type: 'LOAD_USERS_FAIL' });
                });
        }
        fetchData();
    }, []);
    return data;
}

export default useFetch;