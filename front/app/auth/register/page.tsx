'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
    // 1. 入力データを管理する状態（State）
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    // 2. 「登録完了したかどうか」を管理するフラグ
    const [isRegistered, setIsRegistered] = useState(false);

    // 3. 登録ボタンを押したときの処理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 画面の勝手なリロードを防ぐ魔法の言葉

        // ここに本来はバックエンドにデータを送る処理を書きますが、
        // 今回は画面だけなので、そのまま登録完了フラグを「true」にします。
        setIsRegistered(true);
    };

    // 4. 【登録完了後】の画面
    if (isRegistered) {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.successIcon}>🎉</div>
                    <h2 style={styles.title}>登録が完了しました！</h2>
                    <p style={styles.text}>ようこそ、{name || 'ゲスト'} さん！</p>
                    <p style={styles.subText}>アカウントの作成に成功しました。</p>
                    <button
                        onClick={() => setIsRegistered(false)}
                        style={styles.backButton}
                    >
                        戻る（実験用）
                    </button>
                </div>
            </div>
        );
    }

    // 5. 【入力フォーム】の画面（初期状態）
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>ユーザー新規登録</h2>
                <p style={styles.subtitle}>必要事項を入力してアカウントを作成してください。</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>お名前</label>
                        <input
                            type="text"
                            placeholder="山田 太郎"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>メールアドレス</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>パスワード</label>
                        <input
                            type="password"
                            placeholder="8文字以上のパスワード"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        アカウントを登録する
                    </button>
                </form>
            </div>
        </div>
    );
}

// 🎨 簡易的なおしゃれスタイリング（CSS-in-JS）
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'sans-serif',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    title: {
        margin: '0 0 10px 0',
        color: '#333333',
        fontSize: '24px',
    },
    subtitle: {
        margin: '0 0 30px 0',
        color: '#666666',
        fontSize: '14px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        color: '#555555',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cccccc',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#0070f3',
        color: '#ffffff',
        border: 'none',
        padding: '14px',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.2s',
    },
    successIcon: {
        fontSize: '48px',
        marginBottom: '16px',
    },
    text: {
        fontSize: '18px',
        color: '#333333',
        margin: '10px 0',
    },
    subText: {
        fontSize: '14px',
        color: '#777777',
        marginBottom: '24px',
    },
    backButton: {
        backgroundColor: '#eaeaea',
        color: '#333333',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
    }
};