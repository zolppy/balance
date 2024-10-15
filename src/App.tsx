import AddModal from "./components/AddModal";
import FloatingButton from "./components/FloatingButton";
import Header from "./components/Header";
import Informations from "./components/Informations";
import ReceivedTable from "./components/ReceivedTable";
import RemoveModal from "./components/RemoveModal";
import SpentTable from "./components/SpentTable";

const App = () => {
  return (
    <>
      <Header />
      <main
        className="py-4 mt-[70px] flex flex-col gap-y-5 min-w-[320px] w-[90%] max-w-[620px] mx-auto"
        style={{ minHeight: "calc(100svh - 70px)" }}
      >
        <section>
          <Informations />
        </section>
        <section>
          <article>
            <ReceivedTable />
          </article>
        </section>
        <section>
          <article>
            <SpentTable />
          </article>
        </section>
        <FloatingButton />
        <AddModal />
        <RemoveModal />
      </main>
    </>
  );
};

export default App;
