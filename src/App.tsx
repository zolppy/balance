import AddModal from "./components/AddModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Informations from "./components/Informations";
import ReceivedTable from "./components/ReceivedTable";
import RemoveModal from "./components/RemoveModal";
import EditModal from "./components/EditModal";
import SpentTable from "./components/SpentTable";

const App = () => {
  return (
    <>
      <Header />
      <main
        className="py-4 mt-[80px] flex flex-col gap-y-5 min-w-[320px] w-[90%] max-w-[620px] mx-auto"
        style={{ minHeight: "calc(100svh - 80px - 70px)" }}
      >
        <section>
          <article>
            <Informations />
          </article>
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
        <AddModal />
        <RemoveModal />
        <EditModal />
      </main>
      <Footer />
    </>
  );
};

export default App;
