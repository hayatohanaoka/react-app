import { A } from "./components/anker";

export function TopPage(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-6">トップ</h2>
            <div className="flex space-x-4">
                <A 
                    href="/create" 
                    children="新規作成" 
                    data_testid="create-diary" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                />
                <A 
                    href="/show" 
                    children="一覧" 
                    data_testid="show-diaries" 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                />
            </div>
        </div>
    );
}