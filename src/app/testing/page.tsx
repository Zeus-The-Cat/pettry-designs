import ApiTestPage from "@/components/ApiTestPage.component";
import { Components } from "./components.component";
import { redirect } from "next/navigation";

export default function LandingPage() {
    if (process.env.NODE_ENV !== 'development') {
        redirect('/')
        return null
    }
    return <Components />
    return <ApiTestPage />;
}