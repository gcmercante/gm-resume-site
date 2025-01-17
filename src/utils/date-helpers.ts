import { format } from "date-fns";

export function verboseDate(date: string) {
    const [month, year] = date.split('-').map(Number);

    const dateToFormat = new Date(year, month - 1);

    return format(dateToFormat, 'MMMM yyyy');
}