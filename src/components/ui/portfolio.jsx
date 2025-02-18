'use client'
import { useState } from 'react'
import portfolio_1 from '@/app/img/porfolio_1.png'
import portfolio_2 from '@/app/img/porfolio_2.png'
import portfolio_3 from '@/app/img/porfolio_3.png'
import Image from 'next/image'

import { GrFormNextLink } from 'react-icons/gr'
import { IoPlayOutline } from 'react-icons/io5'

const portfolioItems = [
	{ img: portfolio_1, name: 'Floyd Miles', role: 'Graphics Designer' },
	{ img: portfolio_2, name: 'Brooklyn Simmons', role: 'UIUX Designer' },
	{ img: portfolio_2, name: 'Brooklyn Simmons', role: 'UIUX Designer' },
	{ img: portfolio_3, name: 'Wade Warren', role: 'Software Developer' }
]

export default function PortfolioShowcase() {
	const [offset, setOffset] = useState(10)
	const slideAmount = 33
	const minOffset = 10
	const maxOffset = -((portfolioItems.length - 3.3) * slideAmount)

	const nextSlide = () => {
		setOffset((prev) => Math.max(prev - slideAmount, maxOffset))
	}

	const prevSlide = () => {
		setOffset((prev) => Math.min(prev + slideAmount, minOffset))
	}

	return (
		<section className='flex justify-start flex-col font-manrope min-w-screen bg-white overflow-hidden py-[88px]'>
			<div>
				<div className='flex justify-between w-full px-[200px]'>
					<h1 className='font-general font-medium text-6xl text-neutral-900'>
						Top Talent Portfolio Showcase
					</h1>
					<div className='flex gap-4 items-center'>
						<button onClick={prevSlide} disabled={offset === minOffset}>
							<GrFormNextLink
								className={`w-16 h-16 p-6 rounded-full text-main-200 rotate-180 ${
									offset === minOffset ? 'bg-neutral-200' : 'bg-neutral-50'
								}`}
							/>
						</button>
						<button onClick={nextSlide} disabled={offset === maxOffset}>
							<GrFormNextLink
								className={`w-16 h-16 p-6 rounded-full text-white ${
									offset === maxOffset ? 'bg-neutral-300' : 'bg-button-100'
								}`}
							/>
						</button>
					</div>
				</div>
				<div className='w-full overflow-hidden mt-12 flex'>
					<div
						className='flex transition-transform duration-700 ease-in-out'
						style={{ transform: `translateX(${offset}%)` }}
					>
						{portfolioItems.map((person, i) => (
							<div
								key={i}
								className='w-[461px] h-[600px] relative rounded-3xl overflow-hidden mr-14'
							>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent w-full'></div>
								<Image
									src={person.img}
									alt={person.name}
									className='w-full h-full object-cover'
								/>
								<div className='absolute bottom-8 flex justify-between items-center w-full px-8'>
									<div>
										<h2 className='font-general font-semibold text-white text-2xl'>
											{person.name}
										</h2>
										<p className='font-semibold text-neutral-50'>
											{person.role}
										</p>
									</div>
									<button className='text-main-200 w-16 h-16 bg-neutral-50 rounded-full flex justify-center items-center hover:bg-button-100 hover:text-white transition duration-300'>
										<IoPlayOutline className='w-7 h-6' />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
