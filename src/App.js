import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authenication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  // Declare your matching path as a Route element under the Routes Element
  // If you want to render a componentB along with componentA such that both components render
  // then nest componentB under Route of componentA and use the Outlet component in componentA
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* In order to ensure home is also displayed on the '/' path, instead of 
        pattern matching on path we set index=true */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
