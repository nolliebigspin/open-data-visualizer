/**
 * Formats a specific DateString to a shorter TimeString
 * @param dateString Contains a DateString in a "DD.MM.YYYY HH:MM:SS" format
 * @returns Timestring in a "HH:MM" fromat
 */
export const formatDateStringToTime = (dateString: string): string => {
  if (dateString?.includes(":")) {
    const [hours, minutes, _] = dateString.split(" ")[1].split(":");
    return `${hours}:${minutes}`;
  }
  return dateString;
};
