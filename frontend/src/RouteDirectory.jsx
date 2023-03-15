import { Routes, Route } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import { ErrorView } from "./views/ErrorView";

export default function RouteDirectory() {
    return (
        <>
            <Routes>
                <Route path="*" element={<MainMenu />} />
                <Route path="/error" element={<ErrorView />} />
            </Routes>
        </>
    )
}