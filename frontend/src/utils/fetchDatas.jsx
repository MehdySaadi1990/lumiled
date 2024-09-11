import { useEffect, useState } from "react";

export function useFetch(url, token) {
    const [datas, setDatas] = useState([])
    const [error, setError] = useState(false)

    useEffect(()=>{
            async function fetchDatas() {
                if(!url) return
                try {
                    const response = await fetch(url,
                        {
                            method:'GET',
                            headers : {
                                'Authorization':`Bearer ${token}`
                            }})
                        const data = await response.json()
                        setDatas(data)
                } catch (err) {
                    console.log(err);
                    setError(true)
                }
            }
            fetchDatas()
    }, [url, token])
    return  {datas, error}
}
