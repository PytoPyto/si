import React from 'react'

interface Props {
	children: React.ReactNode
	class?: string
}

const Body: React.FC<Props> = (props) => {
	return (
		<div className={`overflow-hidden w-screen h-screen flex justify-around items-center flex-col bg-zinc-900 text-zinc-300 p-[3px] ${props.class}`}>{props.children}</div>
	)	
}
export default Body