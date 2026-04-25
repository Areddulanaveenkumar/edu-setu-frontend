import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
       <div className="p-10">Home Content</div>
       <div className="bg-red-500 text-white p-4">
  Tailwind Test
</div>
    </>
  );
}

export default App;