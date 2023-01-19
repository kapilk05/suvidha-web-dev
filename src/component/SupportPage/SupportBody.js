export default function SupportBody(){
    return(
        <>
            <div className="bg-white p-10 xl:p-40">
                <div className="flex flex-wrap xl:flex-nowrap xl:space-x-32 w-full">
                    <div className="flex-1 font-normal w-3/5 leading-loosed">
                    <p className="font-bold text-xl pb-2">What we do</p>
                    <p className="font-bold text-4xl pb-8">Empowering Women, Educating the Next Generation</p>
                    <p className="text-md pb-4 text-gray-500">
                    At our NGO, we believe that empowering women and educating the next generation are crucial for building a more equitable and prosperous world.                    </p>
                    <p className="text-md pb-8 text-gray-500">
                    We are committed to providing women with the resources and support they need to reach their full potential, and to helping students acquire the knowledge and skills they need to succeed in their studies and careers. By focusing on these two important causes, we hope to create a brighter future for all.                    </p>
                    </div>

                    <div className="xl:flex-1 xl:pt-0 pt-3 h-96 space-y-2 space-x-12">
                        <img className="w-72 xl:w-96 rounded-lg h-42 xl:h-72" src="/images/Support/donation2.jpg"/>
                        <img className="w-72 xl:w-96 rounded-lg h-42 xl:h-72 xl:ml-52" src="/images/Support/education8.jpg"/>
                    </div>
                </div>
            </div>
        </>
    );

}

