export const formatCalendarDate = (date: Date) => {
  const options: any = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
