
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;

    useEffect(() => {
        const runningUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json', },
                body:JSON.stringify(runningUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const userToken = data.token;
                    localStorage.setItem('userToken',userToken);
                    setToken(userToken);
                })
        }

    }, [email]);

    return [token];
}

export default useToken;