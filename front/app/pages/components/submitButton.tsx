import type React from "react";

interface Props {
    data_testid?: string;
    className?: string;
    text: string;
}

export function SubmitButton(props: Props): React.ReactElement {
    return (
    <button
        data-testid={props.data_testid}
        type="submit"
        className={props.className ?? "bg-blue-500 text-white p-2 rounded"}
    >
        {props.text}
    </button>
    )
}