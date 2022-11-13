import React from 'react';

function Contact() {
    return (
        <div className="p-12">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl justify-between">
                <div className="my-8 lg:w-96" >
                    <h1 className="font-serif text-6xl lg:text-8xl">Let`s get in touch!</h1>
                </div>
                <div className="basis-1/2">
                    <form action="" className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row w-full gap-4">
                            <div className="flex w-full flex-col">
                                <label htmlFor="first-name">First Name</label>
                                <input name="first-name" type="text" className="border-primary border"/>
                            </div>

                            <div className="flex w-full flex-col">
                                <label htmlFor="last-name">Last Name</label>
                                <input name="last-name" type="text" className="border border-primary"/>
                            </div>
                        </div>

                        <div className="flex flex-col"><label htmlFor="email">Email*</label>
                            <input name="email" type="email" className="border border-primary w-full"/></div>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" className="h-24 border border-primary"></textarea>
                        <button type="submit" className="bg-primary text-primtext hover:bg-primtext hover:text-primary border border-primary transition duration-300 ease-in-out p-4">Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;