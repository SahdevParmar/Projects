import React from 'react';

export default function IsoDateconverter({isoString}) {
  const date = new Date(isoString);

  // Format parts to match your specific layout
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
  
  const time = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date); // Outputs e.g., "11:50 PM"

  return (
    {day, month ,year ,time}
  );
}
