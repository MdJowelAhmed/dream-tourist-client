import React, { useState, useEffect } from 'react';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [message, setMessage] = useState({
        text: '',
        type: '' // 'success' or 'error'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: data.message, type: 'success' });
                setFormData({ name: '', phone: '', email: '' });
            } else {
                setMessage({ text: 'Subscription failed. Please try again.', type: 'error' });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'Subscription failed. Please try again.', type: 'error' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const text = document.getElementById('parallax-text');
            const scrollPosition = window.scrollY;

            if (text) {
                text.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='lg:p-10 shadow-xl '>
            <div>
                <h2 className="text-3xl lg:text-5xl  font-bold text-gray-900 dark:text-gray-100 text-center  mb-5">NewsLetter</h2>
                <p className="max-w-3xl mx-auto mb-10">Include a clear call to action, guiding customers or potential leads on what to do next. Ensure your contact information is easily accessible for queries. Test your emails for mobile responsiveness.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-8  text-gray-800 gap-5 ">
                {/* Input Fields Section */}
                <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 shadow-2xl p-5 lg:p-10">
                    <input
                        type="text"
                        name="name"
                        placeholder="Write Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded shadow-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Write Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 rounded shadow-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Write Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        required
                    />
                    <button type="submit" className="w-full p-2 rounded bg-blue-500 hover:bg-blue-700 transition-colors text-center">
                        Subscribe
                    </button>
                    {/* Success or Error Message */}
                    {message.text && (
                        <p className={`mt-4 text-center p-2 rounded ${message.type === 'success' ? 'bg-white text-green-700' : 'bg-white text-red-700'
                            }`}>
                            {message.text}
                        </p>
                    )}
                </form>

                {/* Image and Parallax Text Section */}
                <div className="relative md:w-1/2 mt-8 md:mt-0 p-5">
                    <img
                        src="https://ilovefountainhills.org/wp-content/uploads/2021/02/newsletter.png"
                        alt="Newsletter"
                        className="w-full h-64 md:h-full object-cover rounded-lg"
                    />
                    <div
                        id="parallax-text"
                        className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white text-center p-4"
                    >
                        Stay Updated with Our Newsletter
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
