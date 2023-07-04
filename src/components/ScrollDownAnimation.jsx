
export default function ScrollDownAnimation() {

  return (
    <div className="absolute w-7 h-12 border border-[#323757] bottom-20 left-[50%] translate-x-[-50%] rounded-full">
      <div className="absolute animate-[scroll_3s_ease-in-out_infinite] w-1 h-1 bg-[#323757] rounded-full top-2 left-[50%] translate-x-[-50%]"></div>
    </div>
  )
}
