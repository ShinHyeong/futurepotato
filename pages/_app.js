import "./app.css";
import wrapper from "../store/configureStore";

const App = ({Component}) => {
    return (
        <Component />
    )
}

export default wrapper.withRedux(App);