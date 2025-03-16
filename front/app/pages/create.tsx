import React, { useState } from "react";
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";
import { SubmitButton } from "./components/submitButton";
import { A } from "./components/anker";

export function CreatePage(): React.ReactElement {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, date, content, image });
    };

    return (
        <>
            <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">新規作成</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input 
                        data_testid="title"
                        type="text"
                        value={title}
                        placeholder="タイトル"
                        onChange={(e) => {setTitle(e.target.value)}}
                        is_required={true}
                        />
                    <Input
                        data_testid="date"
                        type="date"
                        value={date}
                        placeholder="日付"
                        onChange={(e) => {setDate(e.target.value)}}
                        is_required={true}
                        />
                    <Textarea
                        data_testid="main"
                        placeholder="本文"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 rounded h-32"
                        is_required={true}
                    />
                    <Input
                        data_testid="image"
                        type="file"
                        is_required={false}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {preview && (
                        <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded" />
                    )}
                    <SubmitButton
                        data_testid="submit-button"
                        text="保存する"
                    />
                </form>
            </div>
            <div className="max-w-lg mx-auto p-4 rounded-lg shadow-md">
                <div className="flex justify-end space-x-4">
                    <A
                        href="/" 
                        children="トップ" 
                        data_testid="top-page" 
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
                    />
                    <A
                        href="/show" 
                        children="一覧" 
                        data_testid="show-diaries" 
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    />
                </div>
            </div>
        </>
    );
};
