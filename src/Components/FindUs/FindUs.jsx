import DayCard from "./dayCard"
const FindUS = () => {
    return (
        <>
            <div className="w-full p-10 flex flex-col items-center mt-[7vh]">
                <h1 className='w-full text-center text-4xl font-extralight'>Find Us</h1>
                <p className='text-center md:w-[60vh] text-sm sm:text-2xl font-quote p-10 mb-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dicta a deleniti! Et nihil exercitationem perferendis quos ut dignissimos sed.</p>
                <div className="flex flex-wrap gap-14 justify-center">
                <DayCard day={"Monday"} openTime={"02:00"} closeTime={"09:00"} work={false} />
                <DayCard day={"Tuesday"} openTime={"02:00"} closeTime={"09:00"} work={true} />
                <DayCard day={"Wednesday"} openTime={"02:00"} closeTime={"09:00"} work={true} />
                <DayCard day={"Thursday"} openTime={"02:00"} closeTime={"09:00"} work={true} />
                <DayCard day={"Friday"} openTime={"02:00"} closeTime={"09:00"} work={true} />
                <DayCard day={"Saturday"} openTime={"02:00"} closeTime={"09:00"} work={true} />
                <DayCard day={"Sunday"} openTime={"02:00"} closeTime={"09:00"} work={true} />

            </div>
        </div > 
        </>
    )
}

export default FindUS