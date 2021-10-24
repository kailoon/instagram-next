function Story({ img, username }) {
  return (
    <div>
      <img
        src={img}
        alt={username}
        className="h-14 w-14 object-contain rounded-full p-[2px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform ease-out duration-200"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story
