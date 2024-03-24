import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
