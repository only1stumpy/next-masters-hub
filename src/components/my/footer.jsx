import { FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
	return (
		<footer className='mt-120 flex flex-col font-manrope bg-white overflow-hidden z-10'>
			<div className='flex mx-auto w-[1240px] z-10'>
				<div className='text-[#282828] mr-[118px] w-[420px]'>
					<a href='#'>
						<h1 className='font-fortus font-bold text-2xl md:max-lg:text-lg tel:max-md:text-sm text-button-100'>
							MH.
							<span className='font-general font-medium'>Masters Hub</span>
						</h1>
					</a>
					<p className='font-regular mt-4'>
						<span className='font-bold'>Corporate Head Office</span>: 3787 Jerry
						Dove Drive, Florence,
						<br />
						South Carolina, 29501, United States.
					</p>
					<p className='font-regular mt-8'>
						<span className='font-bold'>Phone</span>: 843-496-7759
					</p>
					<p className='font-regular'>
						<span className='font-bold'>Fax</span>: 02-222264303
					</p>
					<p className='font-regular'>
						<span className='font-bold'>Email</span>: info@mastershub.com
					</p>
				</div>
				<div className='flex flex-col gap-4 text-neutral-600 mr-[118px]'>
					<h2 className='font-bold text-xl text-neutral-900'>Quick Links</h2>
					<a href='#'>Pricing</a>
					<a href='#'>Jobs</a>
					<a href='#'>Employeer</a>
					<a href='#'>Сareers</a>
					<a href='#'>Contact Us</a>
				</div>
				<div className='flex flex-col gap-4 text-neutral-600 mr-[118px]'>
					<h2 className='font-bold text-xl text-neutral-900'>Others</h2>
					<a href='#'>How it works</a>
					<a href='#'>Terms and condition</a>
					<a href='#'>Privacy Policy</a>
					<a href='#'>About Us</a>
				</div>
				<div className='flex flex-col gap-4 text-neutral-600'>
					<h2 className='font-bold text-xl text-neutral-900'>About us</h2>
					<a href='#'>Company milestone</a>
					<a href='#'>Web mail</a>
					<a href='#'>Board of Directors</a>
					<a href='#'>Senior Management</a>
				</div>
			</div>
			<div className='mt-[100px] flex justify-between items-center mb-10 w-[1240px] mx-auto z-10'>
				<p className='text-main-200'>
					©2024 All rights reserved.{' '}
					<a href='https://t.me/only1stumpy'>Done by @only1stumpy</a>
				</p>
				<div className='flex justify-between w-[170px]'>
					<a href='#'>
						<AiFillInstagram className='w-5 h-5 text-main-200' />
					</a>
					<a href='#'>
						<FaTelegramPlane className='w-5 h-5 text-main-200' />
					</a>
					<a href='#'>
						<FaTiktok className='w-5 h-5 text-main-200' />
					</a>
					<a href='#'>
						<FaYoutube className='w-5 h-5 text-main-200' />
					</a>
				</div>
			</div>
		</footer>
	)
}
