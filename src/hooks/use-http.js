import axios from 'axios';
import { useState } from 'react'; 

const useHttp = (url, applyData) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const sendRequest = async() => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            applyData(response.data);
        }
        catch(error) {
            setIsLoading(false);
            setError(error.message);
            throw new Error('There has been an Error');
        }
    }
    return {
        isLoading,
        error,
        sendRequest
    };
}

export default useHttp;