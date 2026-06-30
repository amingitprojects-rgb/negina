import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Provinces from "./pages/Provinces";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import UserPanelLayout from "./pages/UserPanel";
import UserDashboard from "./components/user-panel/UserDashboard";
import WalletPanel from "./components/user-panel/WalletPanel";
import NewAdPage from "./components/user-panel/new-ad/NewAdPage";
import MyAdsPage from "./components/user-panel/MyAdsPage";
import MyChats from "./components/user-panel/MyChats";
import Support from "./components/user-panel/Support.";
import Authentication from "./components/user-panel/Authentication";
import Rules from "./components/user-panel/Rules";
import AdsPage from "./pages/Ads";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/provinces" element={<Provinces />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/user-panel" element={<UserPanelLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="my-ads" element={<MyAdsPage />} />
          <Route path="wallet" element={<WalletPanel />} />
          <Route path="new-ad" element={<NewAdPage />} />
          <Route path="chats" element={<MyChats />} />
          <Route path="support" element={<Support />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="rules" element={<Rules />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
