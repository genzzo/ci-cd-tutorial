import { mkdir, cp } from "fs/promises";

await mkdir("dist", { recursive: true });
await cp("src", "dist", { recursive: true });

console.log("Build completed ✅");
