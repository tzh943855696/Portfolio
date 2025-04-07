
export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="container bg-blue md:px-28 md:pb-2 my-8">
            {children}
        </div> 
    </>
  );
}