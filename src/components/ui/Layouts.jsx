export function SidebarContainer({ children }) {
	return (
		<div className='bg-white/5 rounded-3xl w-full py-6 text-white'>
			{children}
		</div>
	);
}

export function SidebarContainerHeader({ children }) {
	return (
		<div className='flex justify-between items-center px-6'>{children}</div>
	);
}
