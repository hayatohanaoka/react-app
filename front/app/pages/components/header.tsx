import type React from "react";

export function Header(): React.ReactElement {
    return (
        <header className="text-white py-4 shadow-md">
            <h1 data-testid="header" className="text-center text-2xl font-bold">
                日記帳
            </h1>
        </header>
    );
}