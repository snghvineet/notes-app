import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Categories from './components/categories/Categories';
import Favorites from './components/favourites/Favorites';
import MiniCalendar from './components/mini-calendar/MiniCalendar';
import { Button, IconButton } from './components/ui/Buttons';
import Calendar from './components/calendar/Calendar';
const attribute =
	'Photo by <a href="https://unsplash.com/@wildhoney?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Fowler</a> on <a href="https://unsplash.com/photos/white-sand-RsRTIofe0HE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
function App() {
	return (
		<div className='flex h-full w-full justify-center bg-neutral-950'>
			<aside className='w-2/7 px-2 py-2 flex gap-2'>
				<div className='w-24 bg-white/5 rounded-3xl' />
				<div className='flex flex-col gap-2'>
					<MiniCalendar />
					<Categories />
					<Favorites />
				</div>
			</aside>
			<main className='flex-grow px-2 py-2'>
				<Calendar />
			</main>
		</div>
	);
}

export default App;
