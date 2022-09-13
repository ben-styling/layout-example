import { useRouter } from "next/router";
import { useState } from "react";
import { Tabs, Tab } from "../src/Tabs";

const routes = ["/", "/my-bookings"];

export default function Layout({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    router.push(routes[index]);
  };

  const router = useRouter();
  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Book a table" />
        <Tab label="My bookings" />
      </Tabs>
      <main>{children}</main>
      <footer>A footer</footer>
    </>
  );
}
