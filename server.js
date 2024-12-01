import { serve } from "bun";
import { join } from "path";
import { existsSync } from "fs";

const distDir = join(import.meta.dir, "dist");

serve({
  fetch(request) {
    let url = new URL(request.url);
    let path = url.pathname;

    // Handle root path
    if (path === "/") {
      path = "/index.html";
    }

    let filePath = join(distDir, path);

    // Fallback to index.html for SPA routing
    if (!existsSync(filePath)) {
      filePath = join(distDir, "index.html");
    }

    try {
      const file = Bun.file(filePath);
      return new Response(file);
    } catch (error) {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3009,
});
