import UserCard from "@/components/ui/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 gap-4 flex flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        {/* user-cards */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher"/>
          <UserCard type="parent"/>
          <UserCard type="staff"/>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage
