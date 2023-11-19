import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import GlassPreviewCard from '../components/Tools/PreviewCard';

export default function AllTools() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl font-bold">All Tools</h1>
        <div className="w-full grid gap-4 grid-cols-4 grid-flow-row my-6 px-8">
          <GlassPreviewCard
            heading={'Glassmorphism'}
            link={'/tools/glassmorphism'}
            bgClasses={`from-indigo-500 via-purple-500 to-pink-500 brand-bg-animation-400`}
          >
            <div className="w-[75%] h-[50%] p-4 rounded border bg-slate-500 bg-clip-padding opacity-20 backdrop-blur group-hover:rotate-[20deg] transition-transform duration-500 flex justify-center items-center">
              <span className="">Glassmorphism</span>
            </div>
          </GlassPreviewCard>
          <GlassPreviewCard heading={'Box 2'} link={'/tools/glassmorphism'}>
            Box 2
          </GlassPreviewCard>
        </div>
      </div>
    </BaseLayout>
  );
}
