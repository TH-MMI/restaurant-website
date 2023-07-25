const DayCard = ({day , openTime , closeTime ,work}) => {
    return(
        
        <div className="w-[35vh] border border-gray-300 p-5 flex flex-col items-center gap-2">
            <h1 className="font-bold text-xl md:text-2xl mb-3">{day}</h1>
            {work?(<>
            <p className="text-lg font-semibold">Golden Gate Park</p>
            <a className="underline w-[80%] text-center " href="/findus">4976 Fulton Street San Francisco, CA 94121</a>
            <p className="p-2 px-5 bg-green-600 rounded-full text-white mt-4 text-sm md:text-md">{openTime} pm – {closeTime} pm</p></>) : <h1 className="h-full flex items-center text-lg md:text-2xl font-semibold  text-red-600">+-- CLOSE --+</h1>}
            
        </div>
        
    
    )
}
export default DayCard