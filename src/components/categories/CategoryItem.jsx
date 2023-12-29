import React from 'react';
import { Checkbox } from '../ui/Inputs';

function CategoryItem({ name }) {
	return (
		<div className='flex items-center gap-2'>
			<Checkbox />
			<span className='text-sm font-light tracking-wide'>{name}</span>
		</div>
	);
}

export default CategoryItem;
