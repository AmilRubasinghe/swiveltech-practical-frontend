import Navbar from "@/components/navbar/navbar";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
    return (
        <div >
            <Navbar />
            <div className="container mx-auto px-8 py-5">{children}</div>
        </div>
    )
}

export default layout