import * as esbuild from "esbuild";
import fs from "node:fs";

const result = await esbuild.build({
  bundle: true,
  entryPoints: ["src/index.ts"],
  format: "esm",
  metafile: true,
  minify: true,
  outfile: "dist/index.js",
  platform: "node",
  sourcemap: true,
});

fs.writeFileSync("dist/meta.json", JSON.stringify(result.metafile));
