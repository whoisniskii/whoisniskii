import { Data, useLanyardWs } from 'use-lanyard';

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

let cachedPresence: Data | undefined;

export function getPresence() {
  if (cachedPresence) {
    return cachedPresence;
  }

  cachedPresence = useLanyardWs('847865068657836033');
  return cachedPresence;
}
