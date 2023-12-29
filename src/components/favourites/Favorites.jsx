import { IoIosArrowDown } from 'react-icons/io';
import { IconButton } from '../ui/Buttons';
import { SidebarContainer, SidebarContainerHeader } from '../ui/Layouts';

export default function Favorites() {
	const filters = [
		{ id: 'dailytask', name: 'Daily Tasks' },
		{ id: 'birthdays', name: 'Birthdays' },
		{ id: 'tasks', name: 'Tasks' },
	];
	return (
		<SidebarContainer>
			<SidebarContainerHeader>
				<h1>Favorites</h1>
				<IconButton>
					<IoIosArrowDown />
				</IconButton>
			</SidebarContainerHeader>
		</SidebarContainer>
	);
}
