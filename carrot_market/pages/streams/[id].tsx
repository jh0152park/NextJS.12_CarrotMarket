export default function LiveDetail() {
    return (
        <div className="py-10 px-4 space-y-4">
            <div className="pt-4">
                <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                <h3 className="font-bold text-2xl mt-2 text-gray-900 ">
                    Galaxy S50
                </h3>
                <h4 className="font-medium text-xl text-gray-700">$140</h4>
                <p className="my-6 text-base text-gary-700">
                    My money&apos;s in that office, right? If she start giving
                    me some bullshit about it ain&apos;t there, and we got to go
                    someplace else and get it, I&apos;m gonna shoot you in the
                    head then and there. Then I&apos;m gonna shoot that bitch in
                    the kneecaps, find out where my goddamn money is. She gonna
                    tell me too. Hey, look at me when I&apos;m talking to you,
                    motherfucker. You listen: we go in there, and that ni**a
                    Winston or anybody else is in there, you the first
                    motherfucker to get shot. You understand?
                </p>
            </div>

            <h4 className="font-bold text-2xl mt-2 text-gray-900 ">
                Live Chat
            </h4>
            <div className="py-10 pb-10 h-[50vh] overflow-y-scroll space-y-4">
                {[...new Array(50)].map((_, i) => (
                    <>
                        <div key={i} className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-400" />
                            <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                                <p>Hi how much are you selling them for?</p>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                            <div className="w-8 h-8 rounded-full bg-slate-400" />
                            <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                                <p>I want ￦20,000</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-400" />
                            <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                                <p>미쳤어</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <div className="fixed inset-x-0 left-0 right-0 w-full max-w-md mx-auto bottom-2">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="w-full pr-12 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:out-line-none focus:border-orange-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex py-2 pr-2">
                        <button className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
