'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import { Tabs } from '@chakra-ui/react'
import avatar1 from '@/app/img/avatar1.png'
import avatar2 from '@/app/img/avatar2.png'
import avatar3 from '@/app/img/avatar3.png'
import avatar4 from '@/app/img/avatar4.png'
import avatar5 from '@/app/img/avatar5.png'
import avatar6 from '@/app/img/avatar6.png'
import avatar7 from '@/app/img/avatar7.png'
import avatar8 from '@/app/img/avatar8.png'

import { MdDevices } from 'react-icons/md'
import { RxComponent2 } from 'react-icons/rx'
import { IoIosStats } from 'react-icons/io'
import { TbReportMoney } from 'react-icons/tb'
import { GoPeople } from 'react-icons/go'
import { BsArrowUpRightCircleFill, BsStars, BsBadgeAd } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const getRandomUsers = (users) => {
	return [...users].sort(() => Math.random() - 0.5)
}
export default function MastersTabs() {
	const [shuffledUsers, setShuffledUsers] = useState(getRandomUsers(users))
	const [activeTab, setActiveTab] = useState('developer')

	useEffect(() => {
		setShuffledUsers(getRandomUsers(users))
	}, [activeTab])
	return (
		<section className='flex flex-col items-center justify-center font-normal text-base font-manrope text-center bg-bg-100'>
			<h1 className='pt-[88px] font-general font-medium text-6xl text-neutral-900 w-screen bg-gradient-to-b from-white to-bg-100'>
				Discover the
				<br />
				Emerging Masters
			</h1>
			<p className='text-main-200 mt-4'>
				Find the best master for your company and boosts
				<br />
				your business 10x!
			</p>

			<Tabs.Root defaultValue='developer' className=' mt-10'>
				<Tabs.List className='flex justify-between border-b'>
					{categories.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
							onClick={() => setActiveTab(tab.value)}
							className="flex items-center justify-center w-[10vw] h-12 text-neutral-900  hover:text-button-100 aria-selected:text-button-100 transition-all duration-200 border-b border-main-300/10 aria-selected:bg-gradient-to-t aria-selected:border-b-button-100 aria-selected:from-button-100/10 aria-selected:to-bg-100 aria-selected:to-40% aria-selected:pb-1.5 overflow-hidden tel:max-xl:text-xs
                  aria-selected:border-none aria-selected:after:content-[''] aria-selected:after:absolute aria-selected:after:bottom-0 aria-selected:after:left-0 aria-selected:after:w-full aria-selected:after:h-[1px] aria-selected:after:bg-button-100"
						>
							{tab.icon}
							{tab.label}
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{categories.map((tab) => (
					<Tabs.Content
						key={tab.value}
						value={tab.value}
						className='flex justify-center'
					>
						<div className='grid grid-cols-4 gap-6 lg:max-xl:grid-cols-3 sm:max-lg:grid-cols-2 tel:max-sm:grid-cols-1'>
							{shuffledUsers.map((user, index) => (
								<div
									key={index}
									className='rounded-2xl p-6 w-[292px] h-[242px] bg-white border hover:border-border-blue-100 hover:bg-[#E6F0FF] border-neutral-50 transition-all duration-200 flex justify-center hover:shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] flex-col font-manrope'
								>
									<div className='flex flex-col items-center'>
										<Image
											src={user.img}
											alt={user.name}
											width={64}
											height={64}
											className='rounded-full object-cover'
										/>
										<div className='flex justify-center text-neutral-800 py-2'>
											<FaStar
												className='text-[#FFC805] mr-3'
												width={12}
												height={12}
											/>
											<span className='font-semibold text-sm'>
												{user.rating}{' '}
											</span>
											<span className='text-xs'>{user.peopleRates}</span>
										</div>
										<p className='font-bold text-neutral-900 text-xl'>
											{user.name}
										</p>
										<p className='text-sm text-neutral-500'>{user.role}</p>
									</div>
									<div className='mt-5 flex gap-1 flex-wrap justify-center'>
										{user.skills.map((skill, i) => (
											<span
												key={i}
												className='px-3 py-1 text-xs font-medium text-neutral-700 rounded-full border border-neutral-50'
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</Tabs.Content>
				))}
			</Tabs.Root>
			<div className='flex justify-center pt-10 pb-[88px] w-screen bg-gradient-to-t from-white to-bg-100'>
				<button>
					<a
						href='#'
						className='flex items-center text-button-100 border border-button-100 rounded-full hover:bg-button-100 hover:text-white transition font-bold'
					>
						<p className='p-3 pl-6'>View All</p>{' '}
						<BsArrowUpRightCircleFill className='w-10 h-10 m-1' />
					</a>
				</button>
			</div>
		</section>
	)
}

const categories = [
	{
		value: 'developer',
		label: 'Developer',
		icon: <MdDevices size={20} />
	},
	{
		value: 'uidesigner',
		label: 'UI Designer',
		icon: <RxComponent2 size={20} />
	},
	{
		value: 'manager',
		label: 'Project Manager',
		icon: <IoIosStats size={20} />
	},
	{
		value: 'designer',
		label: 'Designer',
		icon: <BsStars size={20} />
	},
	{
		value: 'accountant',
		label: 'Accountant',
		icon: <TbReportMoney size={20} />
	},
	{
		value: 'hr',
		label: 'Human Resource',
		icon: <GoPeople size={20} />
	},
	{
		value: 'marketing',
		label: 'Marketing',
		icon: <BsBadgeAd size={20} />
	}
]
const users = [
	{
		name: 'Zrand Hobs',
		role: 'Developer',
		skills: ['Gimp', 'Wordpress'],
		img: avatar1,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Dorothy Wood',
		role: 'Teacher',
		skills: ['Elementor', 'Wix', 'Illustrator'],
		img: avatar2,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Timothy Baker',
		role: 'Teacher',
		skills: ['Figma', 'Elementor', 'Wordpress'],
		img: avatar3,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Shane Pratt',
		role: 'Developer',
		skills: ['Figma', 'Wordpress', 'Gimp'],
		img: avatar4,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Frances Washing',
		role: 'Developer',
		skills: ['Wordpress', 'Wix', 'Illustrator'],
		img: avatar5,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Jason Bell',
		role: 'Web Designer',
		skills: ['Elementor', 'Wordpress'],
		img: avatar6,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Kathryn Sanchez',
		role: 'Teacher',
		skills: ['Framer', 'Webflow', 'Wix'],
		img: avatar7,
		rating: '4.8',
		peopleRates: '(6)'
	},
	{
		name: 'Jaime Strickland',
		role: 'Web Designer',
		skills: ['Gimp', 'Figma', 'Webflow'],
		img: avatar8,
		rating: '4.8',
		peopleRates: '(6)'
	}
]
