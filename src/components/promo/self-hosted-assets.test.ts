import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const src = fileURLToPath(new URL("../../", import.meta.url));

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    return entry.isDirectory() ? files(path) : [path];
  });
}

describe("self-hosted image assets", () => {
  it.each([
    ["black_friday_stage.png", 1851753],
    ["black_friday_stage_wide.png", 1805311],
    ["posters/handsome-man.jpg", 512857],
    ["posters/three-ivans-stage.png", 1271854],
    ["posters/three-ivans.jpg", 132452],
    ["posters/idiot.jpg", 311005],
    ["posters/tomorrow-was-war.jpg", 410093],
  ])("includes the original binary for %s", (path, size) => {
    expect(statSync(`${src}/assets/${path}`).size).toBe(size);
  });

  it("does not depend on Lovable asset pointers or asset-serving URLs", () => {
    const sourceFiles = files(src);
    expect(sourceFiles.filter((path) => path.endsWith(".asset" + ".json"))).toEqual([]);
    for (const path of sourceFiles.filter((path) => /\.(tsx?|css|json)$/.test(path))) {
      expect(readFileSync(path, "utf8")).not.toContain("/__" + "l5e/");
    }
  });
});