"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
// ServicesNav is removed as requested "Left hand side tab" replaces the need for this navigation

export default function ServicesMain() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("sales-audit");

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setActiveTab(tab);
            // Scroll to grid if tab is present in URL
            setTimeout(() => {
                scrollToTabs();
            }, 100);
        }
    }, [searchParams]);

    const scrollToTabs = () => {
        const element = document.getElementById("services-tabs");
        if (element) {
            const offset = 100;
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
        scrollToTabs();
    };

    return (
        <>
            <ServicesHero activeTab={activeTab} setActiveTab={handleTabChange} />
            <div id="services-tabs">
                <ServicesGrid activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
}
