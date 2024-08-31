const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 min-w-[50px]">
      {children}
    </div>
  )
}

export default Sidebar
