const Ping = () => {
  return (
    <div className="realtive">
        <div className="absolute -left-4 top-1">
            <span className="flex size-[11px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 "></span>
                <span className="relative inline-flex size-[11px] h-full w-full rounded-full bg-primary/75"></span>
            </span>
        </div>
    </div>
  )
}
export default Ping