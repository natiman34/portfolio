import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  children,
}: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <p className="eyebrow">
          <span className="text-primary">{index}</span>
          <span aria-hidden="true" className="px-2 text-border">
            /
          </span>
          {eyebrow}
        </p>
        <h2 className="heading-section mt-4">{title}</h2>
        {description ? <p className="lede mt-4">{description}</p> : null}
      </div>

      {children ? <div className="shrink-0">{children}</div> : null}
    </div>
  );
};

export default SectionHeading;
