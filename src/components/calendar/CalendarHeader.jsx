import { extractInfoFromDate, monthsFullName } from '../mini-calendar/utils';

const today = new Date();
const {
	date: todaysDay,
	month: todaysMonth,
	year: todaysYear,
} = extractInfoFromDate(today);

function CalendarHeader({ year, month, selectedDay }) {
	const todayTag = (
		<div className='bg-neutral-900 text-gray-100 px-3 py-1 rounded-full text-xs mx-4'>
			Today
		</div>
	);

	const isToday =
		selectedDay.day === todaysDay &&
		selectedDay.month === todaysMonth &&
		selectedDay.year === todaysYear;

	const header = `${monthsFullName[month]} ${year}`;

	return (
		<div className='flex h-32 items-center px-6 gap-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-semibold	'>{header}</h1>
				{isToday && todayTag}
				{/* <div className='flex items-center gap-2'>
            <IconButton onClick={null}>
              <IoIosArrowBack className='text-xl' />
            </IconButton>
            <IconButton onClick={null}>
              <IoIosArrowForward className='text-xl' />
            </IconButton>
          </div> */}
			</div>
		</div>
	);
}

export default CalendarHeader;
