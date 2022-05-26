import { useEffect, useState } from 'react';

const useAdmin = user => {
    
    const [admin, setAdmin] = useState(false);


    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://aqueous-cove-84612.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: { authorization: `Bearer ${localStorage.getItem('userToken')}` }
            })
                .then(res => res.json())
                .then(data => {
                    
                    setAdmin(data.admin);
                })
        }
    }, [user]);

    return [admin];
}

export default useAdmin;
