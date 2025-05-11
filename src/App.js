import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authenication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            console.log(user);
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    // Declare your matching path as a Route element under the Routes Element
    // If you want to render a componentB along with componentA such that both components render
    // then nest componentB under Route of componentA and use the Outlet component in componentA
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                {/* In order to ensure home is also displayed on the '/' path, instead of 
        pattern matching on path we set index=true */}
                <Route index element={<Home />} />
                {/* Match the path /shop/<any> and render <Shop> as we have nested routes 
        defined inside <Shop> that will map any path after /shop */}
                <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
