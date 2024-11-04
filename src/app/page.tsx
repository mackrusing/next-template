// lib
import * as motion from "framer-motion/client";
// actions
import { getContentData } from "@/actions/content";
// components
import MDX from "@/components/MDX";

export default async function HomePage() {
  const content = await getContentData("hello-world.mdx");
  return (
    <main className="flex h-screen w-full items-center justify-center text-xl">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -25, opacity: -0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 40,
          delay: 0.25,
        }}
      >
        <MDX source={content.content} />
      </motion.div>
    </main>
  );
}
