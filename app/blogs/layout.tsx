
export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="my-8 px-4 md:px-36 md:pb-2 ">
            {children}
      </div> 
    </>
  );
}