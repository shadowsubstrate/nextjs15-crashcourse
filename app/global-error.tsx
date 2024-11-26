"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h1>GlobalError</h1>
        <h2>{error.message}</h2>
      </body>
    </html>
  );
}
