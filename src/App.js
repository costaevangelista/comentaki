import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth";

import Header from "./components/Layouts/Header";
import AuthUser from "./pages/Login";
import { Comments } from "./pages/Comment/Comments";
import NewComment from "./pages/Comment/NewComment";
import UserInfo from "./pages/User/UserInfo";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="row p-1">
          <div className="col-8">
            <NewComment />
          </div>
          <div className="col-4">
            <UserInfo />
          </div>
        </div>
        <Comments />
        <hr />
        <AuthUser />
      </AuthProvider>
    </Router>
  );
}

export default App;
