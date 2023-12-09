import ListBar from "./ListBar";

const SideBar = () => {
  return (
    <aside className="fixed w-40 lg:w-48 xl:w-60 h-screen bg-[#6148FF] z-10  flex flex-col">
      <div className="flex justify-center">
        <img
          className="w-32 h-32 lg:w-40 lg:h-40 "
          src="/logo-course.svg"
          alt=""
        />
      </div>
      <ListBar />
    </aside>
  );
};

export default SideBar;
