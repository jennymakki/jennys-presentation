export default function BackButton () {
return (<div className="mt-8">
<button
  onClick={() => window.history.back()}
  className="text-white font-bold bg-[#FF6F61] px-5 py-1 text-2xl rounded hover:bg-[#FF8A75] hover:cursor-pointer"
>
  Back
</button>
</div> )
}