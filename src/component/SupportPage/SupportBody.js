export default function SupportBody(){
    return(
        <>
            <div className="bg-gray-100 p-40">
                <div className="flex space-x-32 w-full">
                    <div className="flex-1 font-normal w-3/5 leading-loosed">
                    <p className="font-bold text-xl pb-2">What we do</p>
                    <p className="font-bold text-4xl pb-8">Empowering Women, Educating the Next Generation</p>
                    <p className="text-md pb-4 text-gray-500">
                    At our NGO, we believe that empowering women and educating the next generation are crucial for building a more equitable and prosperous world.                    </p>
                    <p className="text-md pb-8 text-gray-500">
                    We are committed to providing women with the resources and support they need to reach their full potential, and to helping students acquire the knowledge and skills they need to succeed in their studies and careers. By focusing on these two important causes, we hope to create a brighter future for all.                    </p>
                    </div>

                    <div className="flex-1 h-96 space-y-3">
                        <img className="w-96 rounded-lg h-52" src="/images/support-body-1.jpg"/>
                        <img className="w-96 rounded-lg h-56 ml-52" src="/images/support-body-2.jpg"/>
                    </div>
                </div>
            </div>
        </>
    );

}

