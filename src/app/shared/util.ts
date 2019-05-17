export function combineDateTime(date, time) {
  const dd = new Date(date).getDate();
  const mm = new Date(date).getMonth() + 1;
  const yy = new Date(date).getFullYear();

  return new Date(yy + "," + mm + "," + dd + " " + time);
}

export function calculeDuration(endDate, startDate) {
  const duration = Math.abs(
    (endDate.getTime() - startDate.getTime()) / 3600000
  );
  const days = Math.floor(duration / 24);
  const hours = Math.floor(duration % 24);
  const min = Math.round(60 * (duration - days * 24 - hours));

  let durationString: string = "";

  if (isNaN(duration)) {
    durationString = "0d 0h 0m";
  } else {
    if (duration < 24) {
      durationString = hours + "h " + min + "m";
    } else if (duration >= 24) {
      durationString = days + "d " + hours + "h " + min + "m";
    }
  }

  return durationString;
}
