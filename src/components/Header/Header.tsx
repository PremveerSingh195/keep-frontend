import ThemeToggler from "../ThemeToggler";

function Header() {
  return (
    <div className="flex flex-col">
      <div className="w-screen h-14 bg-[#FFFFFF] dark:bg-[#202124] flex flex-row justify-between items-center px-5">
        <button className="flex flex-col items-center justify-around w-5 h-5">
          <span className="block w-full h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-full h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-full h-0.5 bg-black dark:bg-white"></span>
        </button>
        <div className="flex flex-row justify-center items-center">
          <ThemeToggler />
          <button className="w-8 h-8 rounded-full overflow-hidden border-black dark:border-white">
            <img src="" alt="" />
          </button>
        </div>
      </div>
      <hr className="dark:bg-white bg-black w-screen" />
    </div>
  );
}
export default Header;
