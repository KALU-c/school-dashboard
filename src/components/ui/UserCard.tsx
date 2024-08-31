import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-kalPurple even:bg-kalYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white text-green-500 rounded-lg px-2 py-1">2024/25</span>
        <Image src="/more.png" alt="more" width={20} height={20} className="cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-3">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}<span>s</span></h2>
    </div>
  )
}
export default UserCard
