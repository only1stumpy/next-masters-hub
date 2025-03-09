import { Box, Collapsible } from '@chakra-ui/react'
import { GoPlus } from 'react-icons/go'

export default function FAQ() {
	return (
		<section className='flex flex-col font-manrope min-w-screen bg-white overflow-hidden items-center'>
			<div>
				<h1 className='font-general font-medium text-6xl text-neutral-900 '>
					Frequently Asked Questions
				</h1>
				<div className='grid grid-cols-2 gap-4 mt-8'>
					<div className='row-span-3 w-[605px]'>
						<Collapsible.Root>
							<Collapsible.Trigger className='flex justify-center items-center py-6 w-full'>
								<h3 className='text-main-200 font-medium text-2xl ml-9 mr-7'>
									01
								</h3>
								<h2 className='font-general font-medium text-2xl text-neutral-900 mr-4 text-left'>
									How do I create an account on the job board?
								</h2>
								<GoPlus className='text-button-100 w-5 h-5 mb-6' />
							</Collapsible.Trigger>
							<Collapsible.Content>
								<div className='text-main-100 ml-[88px]'>
									To create an account on the job board, click on the "Sign Up"
									button at the top right corner of the homepage. Fill in your
									details and follow the instructions to complete the
									registration process.
								</div>
							</Collapsible.Content>
						</Collapsible.Root>
						<Collapsible.Root>
							<Collapsible.Trigger className='flex justify-center items-center py-6 w-full'>
								<h3 className='text-main-200 font-medium text-2xl ml-9 mr-7'>
									02
								</h3>
								<h2 className='font-general font-medium text-2xl text-neutral-900 mr-4 text-left'>
									How do I apply for a job through the platform?
								</h2>
								<GoPlus className='text-button-100 w-5 h-5 mb-6' />
							</Collapsible.Trigger>
							<Collapsible.Content>
								<div className='text-main-100 ml-[88px]'>
									To apply for a job, browse through the job listings and click
									on the job you are interested in. Then, click the "Apply"
									button and follow the instructions to submit your application.
								</div>
							</Collapsible.Content>
						</Collapsible.Root>
						<Collapsible.Root>
							<Collapsible.Trigger className='flex justify-center items-center py-6 w-full'>
								<h3 className='text-main-200 font-medium text-2xl ml-9 mr-7'>
									03
								</h3>
								<h2 className='font-general font-medium text-2xl text-neutral-900 mr-4 text-left'>
									How can I track the status of my job applications?
								</h2>
								<GoPlus className='text-button-100 w-5 h-5 mb-6' />
							</Collapsible.Trigger>
							<Collapsible.Content>
								<div className='text-main-100 ml-[88px]'>
									You can track the status of your job applications by logging
									into your account and navigating to the "My Applications"
									section. Here, you will see the status of each application you
									have submitted.
								</div>
							</Collapsible.Content>
						</Collapsible.Root>
					</div>
					<div className='row-span-2 w-[605px]'>
						<Collapsible.Root>
							<Collapsible.Trigger className='flex justify-center items-center py-6 w-full'>
								<h3 className='text-main-200 font-medium text-2xl ml-9 mr-7'>
									04
								</h3>
								<h2 className='font-general font-medium text-2xl text-neutral-900 mr-4 text-left'>
									How do I create an account on the job board?
								</h2>
								<GoPlus className='text-button-100 w-5 h-5 mb-6' />
							</Collapsible.Trigger>
							<Collapsible.Content>
								<div className='text-main-100 ml-[88px]'>
									Use the search bar on the homepage to enter keywords related
									to your skills, job title, or preferred location. You can also
									use the advanced search filters to narrow down results by
									industry, job type (full-time, part-time, freelance), and
									experience level.
								</div>
							</Collapsible.Content>
						</Collapsible.Root>
						<Collapsible.Root>
							<Collapsible.Trigger className='flex justify-center items-center py-6 w-full'>
								<h3 className='text-main-200 font-medium text-2xl ml-9 mr-7'>
									05
								</h3>
								<h2 className='font-general font-medium text-2xl text-neutral-900 mr-4 text-left'>
									Is there a cost to use the job board, and what features are
									free?
								</h2>
								<GoPlus className='text-button-100 w-5 h-5 mb-6' />
							</Collapsible.Trigger>
							<Collapsible.Content>
								<div className='text-main-100 ml-[88px]'>
									Using the job board is completely free for job seekers. You
									can create an account, search for jobs, and apply to positions
									without any cost. Employers may have to pay for premium
									features such as job postings and access to the resume
									database.
								</div>
							</Collapsible.Content>
						</Collapsible.Root>
					</div>
				</div>
			</div>
		</section>
	)
}
