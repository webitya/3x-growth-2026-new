"use client";

import { useState } from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesNav from "@/components/services/ServicesNav"; // Keeping for now to check if user wants it, but plan to remove or hide. Actually, user asked for Left Tab. Left Tab usually replaces Nav Cards. I will exclude it for now.

export default function ServicesMain() {
    const [activeTab, setActiveTab] = useState("sales-audit");

    const scrollToTabs = () => {
        const element = document.getElementById("services-tabs");
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleTabChange = (id) => {
        setActiveTab(id);
        scrollToTabs(); // Optional: scroll to tabs when clicking hero buttons
    };

    return (
        <>
            <ServicesHero activeTab={activeTab} setActiveTab={handleTabChange} />
            {/* ServicesNav is removed as requested "Left hand side tab" replaces the need for this navigation */}
            <div id="services-tabs">
                <ServicesGrid activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
}
