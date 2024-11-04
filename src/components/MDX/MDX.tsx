// extern components
import { MDXRemote } from "next-mdx-remote/rsc";
// components
import CodeBlock from "@/components/CodeBlock";

const components = {
  pre: CodeBlock,
};

export default function MDX(
  props: Readonly<{ components?: any; source: string }>,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
