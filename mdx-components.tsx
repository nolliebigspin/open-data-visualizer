import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-h1 font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-h1 font-regular">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h3 font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-h3 font-regular">{children}</h4>,
    h5: ({ children }) => <h5 className="text-h5 font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-h5 font-regular">{children}</h6>,
    ...components,
  };
}
