/**
 * Returns number of weeks
 *
 * @param {Number} year - full year (2018)
 * @param {Number} month - zero-based month index (0-11)
 * @param {Boolean} fromMonday - false if weeks start from Sunday, true - from Monday.
 * @returns {number}
 */
const weeksInMonth = (year, month, fromMonday = false) => {
    const first = new Date(year, month, 1); // get first date of the month
    const last  = new Date(year, month + 1, 0); // get last date of the month
    console.log('first',first);
     console.log('last',last);
    let dayOfWeek = first.getDay(); // get day on 1st of the month
    console.log('dayOfWeek',dayOfWeek);
    console.log('last.getDate();',last.getDate()); // get date 30 or 31 of the month
    if (fromMonday && dayOfWeek === 0) dayOfWeek = 7; // make sunday as last day of week
    let days = dayOfWeek + last.getDate(); // add days left in forming a week and total days in a month
    console.log('days',days);
    if (fromMonday) days -= 1; // if week start from monday then subtract 1 from days
    return Math.ceil(days / 7);
}
console.log(weeksInMonth(2023,6, false)); // for july


// splice and reverse overwrites orignal array