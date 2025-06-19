import Header from "@/components/header"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[#f5f5f5] items-center min-h-screen gap-16 font-roboto">
      <header className="row-start-1">
        <Header />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div>
          <h1 className="font-roboto">Jennys sida</h1>
        </div>
      </main>
      <footer className="row-start-3 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}
