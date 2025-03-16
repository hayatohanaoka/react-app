import type React from "react";
import { Link } from "react-router";

interface Props {
    href: string;
    children: string;
    data_testid?: string;
    className?: string;
}

export function A(props: Props): React.ReactElement {
    return (
        <div>
            <Link
                to={props.href}
                data-testid={props.data_testid}
                className={props.className}
            >{props.children}</Link>
        </div>
    )
}
