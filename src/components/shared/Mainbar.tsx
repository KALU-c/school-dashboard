const MainBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
      {children}
    </div>
  )
}

export default MainBar