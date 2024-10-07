export default function CodeBlock({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <pre>
      {children}
    </pre>
  );
}
