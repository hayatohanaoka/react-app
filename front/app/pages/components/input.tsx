import type React from "react";

interface Props {
    data_testid?: string;
    type: string;
    value?: string;
    title?: string;
    placeholder?: string;
    className?: string;
    is_required?: boolean;
    accept?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: Props): React.ReactElement {
    return (
        <input
            data-testid={props.data_testid}
            type={props.type ?? "text"}
            value={props.value ?? ""}
            placeholder={props.placeholder ?? "入力してください"}
            className={props.className ?? "border p-2 rounded"}
            required={props.is_required ?? false}
            accept={props.accept}
            onChange={props.onChange}
        />
    );
}
