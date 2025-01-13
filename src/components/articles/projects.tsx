import { Fragment, ReactNode } from 'react';
import { PaintBrushIcon } from '@heroicons/react/24/solid';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedProjects } from 'src/helpers/utils';
import ProjectItem from './project-item.tsx'

export default function Projects(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={PaintBrushIcon}
          level={2}
          text="Personal Project Sites"
        />

        {sortedProjects.map((project) => (
          <Fragment key={project._id}>
            <ProjectItem key={project._id} {...project} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
