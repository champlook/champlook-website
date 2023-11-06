import Loading from "./loading";
import { Suspense } from "react";

export default function DashboardLayout({ children }) {
    return <section>
     
        <Suspense fallback={<Loading/>}>{children}</Suspense></section>;
       
  }