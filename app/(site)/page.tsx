import MainHeader from "../components/MainHeader";
import SlotItems from "../components/SlotItems";

export default function Home() {
  return (
    <div>
      <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <MainHeader>
          <div className="mb-2 ">
            <h1 className="text-white text-3xl font-semibold">
              Welcome to delivery planner
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 ">
              <SlotItems date="current date" slot="slot 1" href="href" />
            </div>
          </div>
        </MainHeader>
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1
            className="text-white text-2xl font-semibold 
          "
          >
            Planner Queue
          </h1>
        </div>
        {/* <PageContent songs={songs} /> */}
      </div>
    </div>
  );
}
