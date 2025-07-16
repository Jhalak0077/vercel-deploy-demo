"use client";
import ApplicationProviders from "@/store";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="" id="app-container">
            <ApplicationProviders>
                {children}
            </ApplicationProviders>
        </main>
    );
};
