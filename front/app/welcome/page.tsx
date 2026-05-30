import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center">
      <div className="max-w-2xl text-center text-white px-6">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tight">
          ToDo List
        </h1>

        <p className="mb-8 text-xl text-gray-200">
          タスクを整理し、毎日をもっとスマートに。
        </p>

        <div className="mb-10">
          <div className="inline-block rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-2xl">
            <p className="text-lg">
              ✔ タスク管理
            </p>
            <p className="text-lg">
              ✔ 進捗確認
            </p>
            <p className="text-lg">
              ✔ 効率アップ
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:scale-105"
          >
            ログイン
          </Link>

          <Link
            href="/register"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-indigo-700"
          >
            新規登録
          </Link>
        </div>
      </div>
    </main>
  );
}