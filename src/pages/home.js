import {Header} from "../components/header/header";
import {Projects} from "./projects";

export function Home() {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <Projects/>
                </div>
            </main>
        </>
    )
}
