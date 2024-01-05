export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Portfolio & Blog Page</title>
      </head>
      <body>{children}</body>
    </html>
  )
}