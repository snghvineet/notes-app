export function IconButton({ children, onClick }) {
	return (
		<button className='text-lg h-full' onClick={onClick}>
			{children}
		</button>
	);
}

export function Button({ children, onClick }) {
	return <button>{children}</button>;
}
