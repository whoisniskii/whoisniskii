export function formatTimestamp(start: number) {
  const current = Math.floor((Date.now() - start) / 1000);
  return `${
    Math.floor(current / 60) >= 60
      ? `${Math.floor(Math.floor(current / 60) / 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:`
      : ``
  }${Math.floor(Math.floor(current / 60) - Math.floor(Math.floor(current / 60) / 60) * 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${Math.floor(current % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} elapsed`;
}
