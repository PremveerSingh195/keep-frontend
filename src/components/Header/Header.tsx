

function Header() {
  return (
    <div className="h-auto w-screen flex flex-row justify-between items-center p-3">
      <div>
        <img src="/Spotify-Logo-Transparent.png" alt="LOGO" className="h-16 w-40"/>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <button className="text-xl font-medium hover:bg-[#EFEDEC] py-2 px-4 rounded-lg">Log in</button>
        <button className="text-xl font-bold hover:bg-[#CF3520] bg-red-500 text-white py-2 px-4 rounded-lg">Start for free</button>
      </div>
    </div>
  )
}

export default Header