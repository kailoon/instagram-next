import faker from "faker"
import { Profiler, useEffect, useState } from "react"

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt={profile.username}
            className="rounded-full w-10 h-10 p-[2px] border mr-4"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <p className="text-xs truncate text-gray-400">
              Works at {profile.company.name}
            </p>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
