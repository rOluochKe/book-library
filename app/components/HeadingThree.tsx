import React from 'react';

interface HeadingThreeProps {
  title: string;
}

export default function HeadingThree({ title }: HeadingThreeProps) {
  return (
    <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
  );
}
