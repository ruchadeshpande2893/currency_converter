import Heading from "./Heading";
import Content from "./Content";
import "./App.css";

export default function App() {
    return (
        <div className="parent-container">
            <div className="container">
                <Heading />
                <Content />
            </div>
        </div>
    )
}