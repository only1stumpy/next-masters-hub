'use client'
import Image from 'next/image'
import { GrFormNextLink } from 'react-icons/gr'
import review_1 from '@/app/img/review_1.png'
import { useState } from 'react'
import portfolio_2 from '@/app/img/porfolio_2.png'
export default function Reviews() {
	const [numRev, setNumRev] = useState(0)
	return (
		<section className='flex flex-col font-manrope min-w-screen bg-bg-100 overflow-hidden pt-[88px] items-center'>
			<div>
				<h1 className='font-general font-medium text-6xl text-neutral-900'>
					What our clients say
				</h1>
				<div className='flex mt-10 gap-6 h-[500px]'>
					<div className='bg-neutral-900 w-[716px] rounded-3xl flex flex-col items-center justify-center'>
						<div className='flex justify-center'>
							<p className='font-semibold text-xl text-white'>
								{reviews[numRev].name}
							</p>
							<p className='mx-4 font-bold text-xl'>·</p>
							<p className='font-semibold text-xl text-neutral-200'>
								{reviews[numRev].role}
							</p>
						</div>
						<p className='text-white font-medium font-general text-4xl max-w-[500px] text-center my-10'>
							{reviews[numRev].message}
						</p>
						<div className='flex gap-4 items-center'>
							<button
								onClick={() => {
									setNumRev((prev) => prev - 1)
								}}
								disabled={numRev == 0}
							>
								<div
									className={`flex items-center justify-center w-16 h-16 rounded-full text-main-200 rotate-180 ${
										numRev == 0 ? 'bg-neutral-200' : 'bg-neutral-50'
									}`}
								>
									<GrFormNextLink className='w-6 h-6' />
								</div>
							</button>
							<button
								onClick={() => {
									setNumRev((prev) => prev + 1)
								}}
								disabled={numRev == reviews.length - 1}
							>
								<div
									className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${
										numRev == reviews.length - 1
											? 'bg-neutral-300'
											: 'bg-button-100'
									}`}
								>
									<GrFormNextLink className='w-6 h-6' />
								</div>
							</button>
						</div>
					</div>
					<div>
						<Image
							src={reviews[numRev].image}
							alt='review'
							width={500}
							height={500}
							className='rounded-2xl max-w-[500px] max-h-[500px]'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
const reviews = [
	{
		name: 'Manuel Rikob',
		role: 'CEO of Intel',
		message:
			'“Working with Master in me has been an incredibly painless and enjoyable experience.”',
		image: review_1
	},
	{
		name: 'Manuel Rikobb',
		role: 'CEO of Intel',
		message:
			'“Working with Master in me has been an incredibly painless and enjoyable experience.”',
		image: portfolio_2
	}
]
