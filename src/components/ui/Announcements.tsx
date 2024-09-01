const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2024-09-09",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, facere?"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    date: "2024-09-08",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, facere?"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    date: "2024-09-10",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, facere?"
  },
]

const Announcements = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-sm text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {announcements.map(announcement => (
          <div key={announcement.id} className="p-5 bg-kalPurpleLight rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">{announcement.title}</h1>
              <span className="text-xs text-gray-400 bg-white rounded-xl p-2">{announcement.date}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Announcements