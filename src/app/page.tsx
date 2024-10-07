// actions
import { getContentData } from "@/actions/content";
// components
import MDX from "@/components/MDX";

export default async function RootPage() {
  const content = await getContentData("hello-world.mdx");
  return (
    <main className="text-xl h-screen w-full flex justify-center items-center">
      <MDX source={content.content} />
    </main>
  );
}
