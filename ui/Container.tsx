import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
  id?: string;
  role?: string;
  ariaLabel?: string;
}

const Container = ({
  children,
  className = "",
  as: Component = 'div',
  id,
  role,
  ariaLabel
}: ContainerProps) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-0",
    className
  );

  return (
    <Component
      className={newClassName}
      id={id}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};

export default Container;