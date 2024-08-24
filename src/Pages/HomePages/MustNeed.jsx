const MustNeed = () => {
    return (
        <div className="px-4 md:px-8">
            <div className="my-16 text-center">
                <h2 className="text-5xl font-bold">Must Need For Travels</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 mb-6">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <img className="w-full md:w-80 h-60 rounded-xl object-cover" src="https://img.freepik.com/free-photo/backpack-packed-travel-with-passport-camera_23-2149434016.jpg?w=900&t=st=1714325018~exp=1714325618~hmac=90f89d03c3bab8a4cc4aa29d9afb70418bc34ae8c9786a7a7849b549c086ddd0" alt="Travel Backpack" />
                        <img className="w-full md:w-80 h-60 rounded-xl object-cover" src="https://img.freepik.com/free-vector/suitcase-other-travel-element-set-flat-design_23-2147644160.jpg?size=626&ext=jpg&ga=GA1.1.394552767.1710349896&semt=ais" alt="Travel Suitcase" />
                    </div>
                    <div className="w-full md:w-[660px]">
                        <img className="w-full md:w-[800px] rounded-2xl h-60 object-cover" src="https://img.freepik.com/free-photo/arrangement-clothes-accessories-suitcase_23-2149064207.jpg?size=626&ext=jpg&ga=GA1.1.394552767.1710349896&semt=ais" alt="Travel Accessories" />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                What things you need to travel?
                            </div>
                            <div className="collapse-content">
                                <p className="text-xl font-bold text-rose-500 text-center my-5">The Ultimate Essentials</p>
                                <ul className="list-disc pl-5">
                                    <li><span className="text-xl font-bold">Passport:</span> This is something you should have with you at all times. ...</li>
                                    <li><span className="text-xl font-bold">Ticket:</span> We believe this is quite self-explanatory. ...</li>
                                    <li><span className="text-xl font-bold">Travel Insurance:</span> Never travel without travel insurance. ...</li>
                                    <li><span className="text-xl font-bold">Money:</span> Debit/Credit Card Must With You. ...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Is it necessary to travel to stay happy?
                            </div>
                            <div className="collapse-content">
                                <p>We travel when we have to go to some place for our work. There are various purposes like going to school, college etc, we also go to different cities to meet our relatives, to spend holidays, on our school trips.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Is travelling a good habit?
                            </div>
                            <div className="collapse-content">
                                <p>Travel offers a liberating escape from the daily grind. Breaking free from the monotony of life, you leave behind the stressors that tend to accumulate within the confines of your home. It's a breath of fresh air, a time to be unburdened by worries.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Why is traveling important?
                            </div>
                            <div className="collapse-content">
                                <p>Traveling abroad allows you to experience different cultures firsthand. It can help you gain a deeper understanding and appreciation of the world and the people in it. It can also help you become more open-minded, tolerant, and accepting of different ways of life, and you will return home practically a new person!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MustNeed;
