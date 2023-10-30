import React from 'react';

interface ParagraphProps {
  name: string;
  property: string | number;
}

export default function Paragraph({ name, property }: ParagraphProps) {
  return (
    <p><span className='text-slate-400'>{name}:</span> {property}</p>
  );
}
