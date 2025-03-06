import { Suspense } from 'react'

// Components
import Image from 'next/image'
import BackgroundWrapper from '@/components/my/bgwrapper.jsx'
import Marquee from 'react-fast-marquee'
import Portfolio from '@/components/my/portfolio.jsx'
import Loading from './loading.jsx'
import MastersTabs from '@/components/my/masterstabs.jsx'
import Reviews from '@/components/my/reviews.jsx'
// Images
import card1 from './img/1.png'
import card2 from './img/2.png'
import card3 from './img/3.png'
import card4 from './img/4.png'
import video from './img/video_resume.png'
import arrow from './img/Arrow.png'
import logos from './img/logos.png'
import how_1 from './img/how_it_1.png'
import how_2 from './img/how_it_2.png'
import how_avatar_1 from './img/how_it_avatar_1.png'
import how_avatar_2 from './img/how_it_avatar_2.png'
import how_avatar_3 from './img/how_it_avatar_3.png'

// Icons
import {
	MdOutlineDevices,
	MdOutlineBuildCircle,
	MdLogin,
	MdOutlineFileUpload,
	MdContacts
} from 'react-icons/md'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { FaSearchLocation, FaMapMarkerAlt } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { TiMessages } from 'react-icons/ti'
import FAQ from '@/components/my/faq.jsx'

export default function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<div className='overflow-x-hidden bg-white w-full'>
				<BackgroundWrapper />
				<header className='flex justify-around font-manrope pt-6  text-center items-center text-base animate-fadeInOut opacity-0 [animation-delay:0.5s]'>
					<a href='#'>
						<h1 className='font-fortus font-bold text-2xl md:max-lg:text-lg tel:max-md:text-sm text-white'>
							MH. <span className='font-general font-medium'>Masters Hub</span>
						</h1>
					</a>
					<nav className='font-normal flex justify-between tel:max-lg:gap-2 w-[27vw] text-neutral-800 md:max-lg:text-sm tel:max-md:text-xs'>
						<a href='#'>Create Resume</a>
						<a href='#'>Skillset</a>
						<a href='#'>Partnered Job Board</a>
						<a href='#'>Contact Us</a>
					</nav>
					<button className='w-[187px]  tel:max-lg:w-[93px] h-12 font-bold pl-6 tel:max-lg:pl-3 border rounded-full border-white text-white flex items-center justify-center hover:border-border-100 hover:text-border-100 transition ease-in duration-300'>
						<p className='py-3 pr-4 tel:max-lg:text-xs'>Register Now</p>
						<BsArrowUpRightCircleFill className='w-10 h-10 p-1 tel:max-lg:w-5 tel:max-lg:h-5' />
					</button>
				</header>
				<main>
					<section className='font-manrope mt-14 flex flex-col justify-center items-center text-main-200 font-normal text-base text-center animate-fadeInOut opacity-0 [animation-delay:1.2s]'>
						<div className='w-[320px] h-10 px-6 py-2 flex justify-between items-center bg-white rounded-3xl mb-4'>
							<IoBriefcaseOutline className='w-6 h-6' />
							<p>Your #1 Platform for Skill Sharing</p>
						</div>
						<h1 className='text-7xl/[86px] font-general font-medium mb-4'>
							Showcase Your Mastery.
							<br />
							Get Connected
						</h1>
						<p className='text-main-100'>
							Create your profile, showcase your skills, and let
							<br />
							employers find you.
						</p>
						<div className='flex items-center justify-center mt-9'>
							<div className='flex items-center border border-border-100 rounded-full overflow-hidden w-[500px] h-14 bg-white drop-shadow-lg'>
								<div className='flex items-center px-7 w-1/2'>
									<FaSearchLocation className='text-main-200 w-5 h-5' />
									<input
										type='text'
										placeholder='e.g. UX Designer'
										className='ml-2 outline-none w-full bg-transparent'
									/>
								</div>
								<div className='w-[1px] h-6 bg-border-100'></div>
								<div className='flex items-center px-4 w-1/2'>
									<FaMapMarkerAlt className='text-main-200 w-5 h-5' />
									<input
										type='text'
										placeholder='e.g. Liverpool, USA'
										className='ml-2 outline-none w-full bg-transparent'
									/>
								</div>
							</div>
							<button className='bg-button-100 text-white px-6 h-14 w-[150px] rounded-full font-bold ml-2 hover:bg-main-200 transition ease-in duration-300'>
								Search
							</button>
						</div>
						<Marquee speed={50} className='mt-[52px] overflow-hidden'>
							<Image
								src={card1}
								alt='card1'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card2}
								alt='card2'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card3}
								alt='card3'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card4}
								alt='card4'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card1}
								alt='card1'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card3}
								alt='card3'
								width={288}
								height={338}
								className='mx-3'
							/>
							<Image
								src={card4}
								alt='card4'
								width={288}
								height={338}
								className='mx-3'
							/>
						</Marquee>
					</section>
					<MastersTabs />
					<section className='flex justify-center items-center flex-col font-manrope min-w-screen min-h-screen relative'>
						<h1 className='pt-[88px] font-general text-6xl text-neutral-900 text-center'>
							Why Choose
							<br />
							Masters in Me?
						</h1>
						<p className='text-main-100 pt-4 text-center'>
							Unlock your true potential and discover a world of opportunities
							<br />
							that align with your skills, interests, and aspirations
						</p>
						<div className="mt-[52px] mb-[48px] pb-10 bg-[url('/img/bg-circles.png')] bg-no-repeat bg-cover w-[635px] h-[635px] tel:max-sm:w-[318px] tel:max-sm:h-[318px] flex justify-center items-center relative">
							<Image
								src={video}
								width={349}
								height={620}
								className='rounded-xl tel:max-sm:w-[175px] tel:max-sm:h-[310px]'
								alt='video resume'
							/>
							<Image
								src={arrow}
								className='absolute left-[552px] top-1 tel:max-sm:opacity-0'
								alt='arrow'
							/>
							<Image
								src={arrow}
								className='absolute left-2 bottom-8 rotate-[165deg] tel:max-sm:opacity-0'
								alt='arrow'
							/>
						</div>
						<div className='absolute top-[45vh] left-[24vw] lg:max-2xl:left-[10vw] tel:max-lg:relative tel:max-lg:top-0 tel:max-lg:left-0'>
							<div className='w-[260px] h-[228px] border border-neutral-50 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] rounded-3xl flex justify-center items-center flex-col text-center bg-white'>
								<MdOutlineDevices className='text-main-200 w-12 h-12' />
								<h1 className='font-bold text-xl text-neutral-900 mt-4'>
									Showcase Work
								</h1>
								<p className='text-xs text-main-100'>
									Showcase your project to stand
									<br />
									out among all
								</p>
								<button className='mt-4'>
									<a
										href='#'
										className='bg-button-200 rounded-full w-[102px] h-9 flex justify-center items-center text-white text-xs hover:bg-button-100 transition duration-300'
									>
										Add Work
									</a>
								</button>
							</div>
							<div className='w-[260px] h-[93px] border border-neutral-50 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] rounded-3xl mt-6 bg-white flex items-center'>
								<BiWorld className='text-main-200 w-12 h-12 mx-4' />
								<div>
									<h1 className='font-bold text-xl text-neutral-900'>100K+</h1>
									<p className='text-xs text-main-100'>
										Worldwide Active Users
									</p>
								</div>
							</div>
						</div>
						<div className='absolute top-[44vh] right-[24vw] lg:max-2xl:right-[10vw] tel:max-lg:relative tel:max-lg:top-2 tel:max-lg:left-0'>
							<div className='w-[260px] h-[93px] border border-neutral-50 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] rounded-3xl  bg-white flex items-center'>
								<TiMessages className='text-main-200 w-12 h-12 mx-4' />
								<div>
									<h1 className='font-bold text-xl text-neutral-900'>
										Networking
										<br />
										Opportunities
									</h1>
								</div>
							</div>
							<div className='w-[260px] h-[228px] border border-neutral-50 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] rounded-3xl mt-6 flex justify-center items-center flex-col text-center bg-white'>
								<MdOutlineBuildCircle className='text-main-200 w-12 h-12' />
								<h1 className='font-bold text-xl text-neutral-900 mt-4'>
									Resume Builder
								</h1>
								<p className='text-xs text-main-100'>
									Create a professional resume using
									<br />
									our built-in resume builder.
								</p>
								<button className='mt-4'>
									<a
										href='#'
										className='bg-button-200 rounded-full w-[102px] h-9 flex justify-center items-center text-white text-xs hover:bg-button-100 transition duration-300'
									>
										Build Resume
									</a>
								</button>
							</div>
						</div>
					</section>
					<section className='flex justify-center items-center flex-col font-manrope min-w-screen bg-bg-100 overflow-hidden'>
						<h1 className='pt-[88px] font-general text-6xl text-neutral-900 text-center w-screen bg-gradient-to-b from-white to-bg-100'>
							We are happy to work
							<br />
							with incredible clients
						</h1>
						<p className='text-main-100 pt-4 text-center mb-10'>
							Fortune 500 companies and renowned global brands place their trust
							in our products,
							<br />
							solutions, and bespoke software development services.
						</p>
						<div className='relative flex justify-center w-screen pb-[88px]'>
							<div className='absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-white to-transparent z-10'></div>
							<Image
								src={logos}
								width={'44vw'}
								height={'24vh'}
								alt='logos'
								className='relative z-0'
							/>
						</div>
					</section>
					<section className='flex justify-center items-center font-manrope min-w-screen bg-white overflow-hidden py-[88px]'>
						<div>
							<h1 className='font-general font-medium text-neutral-900 text-6xl mb-12'>
								How It Works
							</h1>
							<div className='flex flex-column justify-center items-center mb-7'>
								<div className='flex items-center'>
									<span className='font-general font-medium text-main-200 text-8xl opacity-15 mr-6'>
										01
									</span>
									<div className='flex items-center gap-4 bg-white rounded-3xl p-6 text-button-100 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] min-w-[457px]'>
										<MdLogin className='w-14 h-14 p-4 bg-border-200 rounded-full' />
										<div className='pr-3'>
											<h2 className='text-neutral-900 font-general font-medium text-2xl'>
												Sign Up and create Account
											</h2>
											<p className='text-main-100 mt-1'>
												Fill out your details and showcase your skills.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='flex gap-6 items-center flex-row-reverse mb-7'>
								<span className='font-general font-medium text-main-200 text-8xl opacity-15 ml-6'>
									02
								</span>
								<div className='flex items-center gap-4 bg-white rounded-3xl p-6 text-orange-500 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] min-w-[434px]'>
									<MdOutlineFileUpload className='w-14 h-14 p-4 bg-orange-200 rounded-full' />
									<div className='pr-3'>
										<h2 className='text-neutral-900 font-general font-medium text-2xl'>
											Upload Your Portfolio
										</h2>
										<p className='text-main-100 mt-1'>
											Add your resume, videos, and more.
										</p>
									</div>
								</div>
							</div>
							<div className='flex gap-6 items-center'>
								<span className='font-general font-medium text-main-200 text-8xl opacity-15 mr-6'>
									03
								</span>
								<div className='flex items-center gap-4 bg-white rounded-3xl p-6 text-violet-600 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] min-w-[430px]'>
									<MdContacts className='w-14 h-14 p-4 bg-violet-200 rounded-full' />
									<div className='pr-3'>
										<h2 className='text-neutral-900 font-general font-medium text-2xl'>
											Get Discovered
										</h2>
										<p className='text-main-100 mt-1'>
											Let employers find and contact you.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='ml-20 flex relative'>
							<Image
								src={how_1}
								width={214}
								height={339}
								alt='man sitting'
								className='mr-6 max-h-[339px]'
							/>
							<Image src={how_2} width={341} height={493} alt='woman sitting' />
							<div className='absolute  top-[363px] bg-white rounded-3xl p-4 flex shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)]'>
								<Image
									src={how_avatar_1}
									width={56}
									height={56}
									alt='avatar'
									className='rounded-full shadow-inner shadow-white border-2 border-transparent'
								/>
								<Image
									src={how_avatar_2}
									width={56}
									height={56}
									alt='avatar'
									className='rounded-full shadow-inner shadow-white border-2 border-transparent'
								/>
								<Image
									src={how_avatar_3}
									width={56}
									height={56}
									alt='avatar'
									className='rounded-full shadow-inner shadow-white border-2 border-transparent'
								/>
								<div className='ml-4'>
									<h2 className='text-button-100 font-bold text-xl'>10K +</h2>
									<p className='text-main-100 font-semibold'>Job Seekers</p>
								</div>
							</div>
						</div>
					</section>
					<Portfolio />
					<Reviews />
					<FAQ />
				</main>
			</div>
		</Suspense>
	)
}
