'use client'
import { useEffect, useState } from 'react'

export default function BackgroundWrapper() {
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		setHydrated(true)
	}, [])

	if (!hydrated) return null

	return (
		<div className="bg-[url('/img/bg.png')] bg-no-repeat bg-cover h-screen absolute w-screen overflow-hidden max-w-[100vw]"></div>
	)
}
