import type React from "react";

export function Footer(): React.ReactElement {
    return (
        <footer 
            data-testid="footer" 
            className="bg-gray-800 text-white text-center py-4 mt-8 shadow-inner"
        >
            <p className="text-sm">© 2025 diary-app</p>
        </footer>
    );
}