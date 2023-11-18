import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import GlassPreviewCard from '../components/Tools/Glassmorphism/PreviewCard';

export default function AllTools() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl font-bold">All Tools</h1>
        <div className="w-full grid gap-4 grid-cols-4 grid-flow-row my-6 px-8">
          <GlassPreviewCard />
          <GlassPreviewCard />
          <GlassPreviewCard />
          <GlassPreviewCard />
        </div>
      </div>
    </BaseLayout>
  );
}
