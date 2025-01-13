import { Project } from '@content';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function ProjectItem({
  achievement,
  body,
   url,
}: Project): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {achievement}
        </Heading>

        <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
          <a href={url}>{url}</a>
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
