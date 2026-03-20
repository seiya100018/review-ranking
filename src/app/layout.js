export const metadata = {
  title: 'レビュー数ランキング',
  description: 'Google Places API でレビュー数ランキングを作成',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
