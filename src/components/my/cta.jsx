import { CiMail } from 'react-icons/ci'

export default function CTA() {
	return (
		<section className='flex flex-col font-manrope min-w-screen bg-white overflow-hidden pb-[120px] items-center pt-[88px] z-10'>
			<div className="w-[1240px] rounded-3xl bg-white bg-[url('/img/bg_cta.png')] bg-no-repeat bg-cover overflow-hidden flex justify-center items-center flex-col text-center z-10 shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)]">
				<h1 className='font-general font-medium text-4xl text-neutral-900 mt-[88px]'>
					Join ambitious professionals and
					<br />
					unlock your dream career today
				</h1>
				<p className=' text-neutral-600 mt-4 mb-8'>
					Unlock your true potential and discover a world of opportunities that
					align
					<br />
					with your skills, interests, and aspirations
				</p>
				<div className='flex gap-2 justify-center mb-14'>
					<div className='flex items-center border border-border-100 rounded-full overflow-hidden drop-shadow-lg px-7'>
						<CiMail className='text-main-200 w-5 h-5' />
						<input
							type='text'
							placeholder='Your mail adress'
							className='ml-2 outline-none w-full bg-transparent'
						/>
					</div>
					<button className='bg-button-100 text-white px-6 h-14 w-[150px] rounded-full font-bold ml-2 hover:bg-main-200 transition ease-in duration-300'>
						Join Us
					</button>
				</div>
			</div>
		</section>
	)
}
