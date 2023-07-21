const Testimonial = () => {
    return (
        <>
            <aside className="flex flex-col overflow-hidden items-start text-left gap-4 rounded-lg h-[230px] w-[277px] bg-white p-5 shadow-lg prose-sm lg:h-[222px] lg:w-[277px]">
                <div className="flex flex-row gap-2 h-6">
                    <img src="/star.svg" alt="star" className="animate-spin-slow w-6 h-6 m-0"/>
                    <img src="/star.svg" alt="star" className="animate-spin-slow w-6 h-6 m-0"/>
                    <img src="/star.svg" alt="star" className="animate-spin-slow w-6 h-6 m-0"/>
                    <img src="/star.svg" alt="star" className="animate-spin-slow w-6 h-6 m-0"/>
                    <img src="/star.svg" alt="star" className="animate-spin-slow w-6 h-6 m-0"/>
                </div>
                <q className="font-notosans font-light italic leading-5">Sunny has been an outstanding contributor to our team&apos;s UI development. Highly recommended.</q>
                <div className="flex flex-row gap-3 justify-start">
                    <img className="w-14 h-14 m-0 flex-1 rounded-full" src="/PRAG.jpeg" alt="Avatar"/>
                    <div className="flex flex-col flex-grow">
                        <span className="font-bold text-base">Pragati Balhara</span>
                        <span className="font-semibold text-xs">Human Resource, Career Connect</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Testimonial;