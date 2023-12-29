import React from 'react';
import { SidebarContainer, SidebarContainerHeader } from '../ui/Layouts';
import { IconButton } from '../ui/Buttons';
import { IoIosArrowDown, IoIosExpand } from 'react-icons/io';
import CategoryItem from './CategoryItem';

function Categories() {
	const filters = [
		{ id: 'dailytask', name: 'Daily Tasks' },
		{ id: 'birthdays', name: 'Birthdays' },
		{ id: 'tasks', name: 'Tasks' },
	];
	return (
		<SidebarContainer>
			<SidebarContainerHeader>
				<h1>My Calendars</h1>
				<IconButton>
					<IoIosArrowDown />
				</IconButton>
			</SidebarContainerHeader>
			<div className='px-6 mt-3 gap-2 flex flex-col'>
				{filters.map((filter) => (
					<CategoryItem key={filter.id} name={filter.name} />
				))}
			</div>
		</SidebarContainer>
	);
}

export default Categories;
