import type React from "react";

interface Props {
    data_testid?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    is_required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea(props: Props): React.ReactElement {
    return (
        <textarea
            data-testid={props.data_testid}
            value={props.value}
            placeholder={props.placeholder ?? "入力してください"}
            className={props.className ?? "border p-2 rounded"}
            required={props.is_required}
            onChange={props.onChange}
        />
    )
}