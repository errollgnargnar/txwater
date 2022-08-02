import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import MenuTabs from "./common/MenuTabs";

export default function Home({location}) {
    let navigate = useNavigate();
    useEffect(() => {
        let accessToken = sessionStorage.getItem("accessToken");

        if (accessToken) {
            navigate('/home')
        }

        if(!accessToken) {
            navigate('/login');
        }
    },[]);

    return (
        <div>
            <MenuTabs location={location} />
        </div>
    )
}