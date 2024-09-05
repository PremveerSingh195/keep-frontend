function HomePage() {
  return (
    <div className="w-screen  flex flex-row justify-center items-center mt-12 gap-10">
        <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-bold text-black">Organize your <br/> work and <br/> life, finally.</h1>
            <h2 className="text-3xl font-medium text-[#6F6C6A]">Simplify life for both you and your team. <br/> The world’s #1 task manager and to-do <br/> list app.</h2>
            <button className="w-[250px] h-[80px] text-2xl font-bold text-white bg-[#E34432] rounded-2xl ">Start for free</button>
        </div>
        <div className="ml-12">
            <img src="/imagesbanner.png" alt="banner" className="w-[750px]"/>
        </div>
    </div>
  )
}
export default HomePage