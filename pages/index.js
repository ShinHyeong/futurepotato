import { useSelector } from "react-redux";
import Login from "../components/LoginSignup/login";
import Mainpage from "../components/Mainpage";
const index = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {postList} = useSelector((state)=>state.mainpage);
    
    return(
        <>
            {isLoggedIn ? <Mainpage /> : <Login /> }
        </>
    );
};
export default index;