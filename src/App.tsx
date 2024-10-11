import Header from "./components/Header";
import Informations from "./components/Informations";
import ReceivedTable from "./components/ReceivedTable";
import SpentTable from "./components/SpentTable";
import FloatingButton from "./components/FloatingButton";
import AddDialog from "./components/AddDialog";

const App: React.FC = (): React.JSX.Element => {
  return (
    <div className="bg-neutral-800 text-white">
      <Header />
      <main
        className="py-4 mt-[70px] flex flex-col gap-y-5 min-w-[320px] w-[90%] max-w-[620px] mx-auto"
        style={{ minHeight: "calc(100svh - 70px)" }}
      >
        <section>
          <Informations />
        </section>
        <section>
          <ReceivedTable />
        </section>
        <section>
          <SpentTable />
        </section>
        <section>
          <FloatingButton />
          <AddDialog />
        </section>
      </main>
    </div>
  );
};

export default App;
