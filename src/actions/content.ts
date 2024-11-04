"use server";

// node
import fs from "fs/promises";
import path from "path";
// lib
import matter from "gray-matter";

export async function getContentData(filename: string): Promise<{
  content: string;
  data: any;
}> {
  const file = await readFile("/src/content/" + filename);
  const parsed = matter(file);
  return parsed;
}

async function readFile(localPath: string) {
  return await fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}
