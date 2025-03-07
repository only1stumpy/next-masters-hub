import { CiMail } from "react-icons/ci";

export default function Footer(){
    return(
        <>
        <section className='flex flex-col font-manrope min-w-screen bg-white overflow-hidden pb-[120px] items-center'>
        <div className="w-[1240px] rounded-3xl bg-white bg-[url('/img/bg_cta.png')] bg-no-repeat bg-cover overflow-hidden flex justify-center items-center flex-col text-center">
                <h1 className="font-general font-medium text-4xl text-neutral-900 mt-[88px]">Join ambitious professionals and<br/>unlock your dream career today</h1>
                <p className=" text-neutral-600 mt-4 mb-8">Unlock your true potential and discover a world of opportunities that align<br/>with your skills, interests, and aspirations</p>
                <div className="flex gap-2 justify-center">
                    <div className="flex items-center border border-border-100 rounded-full overflow-hidden drop-shadow-lg px-7">
                        <CiMail className="text-main-200 w-5 h-5"/>
                        <input
                            type='text'
                            placeholder='Your mail adress'
                            className='ml-2 outline-none w-full bg-transparent'
                        />
                    </div>
                    <button className="bg-button-100 text-white px-6 h-14 w-[150px] rounded-full font-bold ml-2 hover:bg-main-200 transition ease-in duration-300">
                        Join Us
                    </button>
                </div>
            </div>
        </section>
        <div className="bg-[url('/img/bg_footer.png')] bg-no-repeat bg-cover  overflow-hidden "></div>

        <footer className="mt-120 flex flex-col font-manrope min-w-screen bg-white overflow-hidden">
            <div className="grid grid-cols-4 z-10">
                <div className="text-[#282828]">
                    <a href='#'>
						<h1 className='font-fortus font-bold text-2xl md:max-lg:text-lg tel:max-md:text-sm text-button-100'>
							MH. <span className='font-general font-medium'>Masters Hub</span>
						</h1>
					</a>
                    <p className="font-bold mt-4"><b>Corporate Head Office</b>: 3787 Jerry Dove Drive, Florence,<br/>
                    South Carolina, 29501, United States.</p>
                    <p className="font-bold mt-8"><b>Phone</b>: 843-496-7759</p>
                    <p className="font-bold"><b>Fax</b>: 02-222264303</p>
                    <p className="font-bold"><b>Email</b>: info@mastershub.com</p>
                </div>
                <div className="flex flex-col gap-4 text-neutral-600">
                    <h2 className="font-bold text-xl text-neutral-900">Quick Links</h2>
                    <a href='#'>Pricing</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>Employeer</a>
                    <a href='#'>Сareers</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className="flex flex-col gap-4 text-neutral-600">
                    <h2 className="font-bold text-xl text-neutral-900">Others</h2>
                    <a href='#'>How it works</a>
                    <a href='#'>Terms and condition</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>About Us</a>
                </div>
                <div className="flex flex-col gap-4 text-neutral-600">
                    <h2 className="font-bold text-xl text-neutral-900">About us</h2>
                    <a href='#'>Company milestone</a>
                    <a href='#'>Web mail</a>
                    <a href='#'>Board of Directors</a>
                    <a href='#'>Senior Management</a>
                </div>
            </div>
        </footer>
        </>
    )
}