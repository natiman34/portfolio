interface FilterTabsProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

function FilterTabs<T extends string>({
  label,
  options,
  value,
  onChange,
  className = '',
}: FilterTabsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex flex-wrap items-center gap-1.5 ${className}`}
    >
      {options.map((option) => {
        const isSelected = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isSelected}
            className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isSelected
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card/60 text-muted-foreground hover:border-foreground/25 hover:text-foreground'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export type { FilterTabsProps };
export default FilterTabs;
