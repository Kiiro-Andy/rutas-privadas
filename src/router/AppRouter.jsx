import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar";
import { 
    HomePage,
    DashboardPage,
    LoginPage,
    RegisterPage,
    UsPage,
    RokanPage,
    KiiromePage,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
  <>
    <Routes>
        <Route path="/" element= {<Navbar />}>
            <Route index element= {<HomePage />} />
            <Route path="us" element= {<UsPage />} />
            <Route path="login" element= {<LoginPage />} />
            <Route path="register" element= {<RegisterPage />} />
            <Route 
            path="dashboard" 
            element= {
                <PrivateRoute>
                    <DashboardPage/>
                </PrivateRoute>
            } />
            <Route 
            path="rokan" 
            element= {
                <PrivateRoute>
                    <RokanPage/>
                </PrivateRoute>
            } />
            <Route 
            path="kiirome" 
            element= {
                <PrivateRoute>
                    <KiiromePage/>
                </PrivateRoute>
            } />
        </Route>
    </Routes>
  </>
  );
};
