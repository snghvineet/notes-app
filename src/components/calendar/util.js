/**
 * Each day has 24hrs let's say [0, 23] where each index point represent an hour of time
 * i.e., 0 -> 12am - 1am, 1 -> 1am - 2am and so on.
 * So a task will have start time and end time
 * find in which slot they fall into
 */

/**
 *
 * @param {Date} startTime
 * @param {Date} endTime
 */

const slots = new Array(24, {});
function bookSlot(startTime, endTime) {
	if (startHour < endHour) {
		slots[startHour] = { start: Math.floor((startMin + 1) / 60), end: 1 };
		for (let i = startHour + 1; i < endHour; i++)
			slots[i] = { start: 0, end: 1 };
		slots[endHour] = { start: 0, end: Math.floor((endMin + 1) / 60) };
	}
}

/**
 * @param {Date} date
 * @returns {{hour: number, minute: number, second:number}}
 */
export function extractTimeFromDate(date) {
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
	};
}

export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
export const timeSlots = [
	'',
	'1 am',
	'2 am',
	'3 am',
	'4 am',
	'5 am',
	'6 am',
	'7 am',
	'8 am',
	'9 am',
	'10 am',
	'11 am',
	'12 pm',
	'1 pm',
	'2 pm',
	'3 pm',
	'4 pm',
	'5 pm',
	'6 pm',
	'7 pm',
	'8 pm',
	'9 pm',
	'10 pm',
	'11 pm',
];

export const Clip = {
	none: 0,
	top: 1,
	bottom: 2,
	both: 3,
};

/**
 *
 * @param {number} x hours
 * @param {number} y minutes
 * @returns {number} respective point in the range [0, 100]
 */
export function transformTimeToPoint(x, y) {
	const val = (100 * x) / 24 + (5 * y) / 72;
	return val;
}

export const timeFormatter = Intl.DateTimeFormat('en-IN', {
	hour: '2-digit',
	minute: '2-digit',
});

const taskColorSet = [
	{ bg: 'bg-indigo-200', border: 'border-indigo-200', text: 'text-indigo-600' },
	{ bg: 'bg-purple-200', border: 'border-purple-200', text: 'text-purple-600' },
	{
		bg: 'bg-green-200',
		text: 'text-emerald-600',
		border: 'border-green-200',
	},
	{ bg: 'bg-sky-200', text: 'text-cyan-600', border: 'border-cyan-200' },
	{ bg: 'bg-amber-200', text: 'text-amber-700', border: 'border-amber-200' },
	{ bg: 'bg-stone-300', text: 'text-stone-700', border: 'border-stone-300' },
];
export function getColorForTask() {
	const randomIndex =
		Math.floor(Math.random() * taskColorSet.length) % taskColorSet.length;
	return taskColorSet[randomIndex];
}
