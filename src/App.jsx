import React from "react";
import Navbar from "./components/Navbar.jsx";
import ObjectEditor from "./pages/ObjectEditor.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { Route, Routes } from "react-router";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/object-editor",
    element: <ObjectEditor />,
  },
];

const App = () => {
  return (
    <div className="h-screen flex flex-col md:overflow-hidden">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
