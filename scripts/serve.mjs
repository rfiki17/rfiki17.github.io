// Minimal static server for dist/, used by the Playwright tests so they do not clash with
// a running "astro preview" (Astro allows only one preview server per project).
//   node scripts/serve.mjs 4401
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const port = Number(process.argv[2] ?? 4401);
const root = path.resolve('dist');
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.pdf': 'application/pdf',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.vcf': 'text/vcard; charset=utf-8',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (!fs.existsSync(file) && fs.existsSync(file + '/index.html')) file += '/index.html';
  // Like GitHub Pages: unknown paths get dist/404.html with status 404.
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    const nf = path.join(root, '404.html');
    return fs.existsSync(nf) ? fs.createReadStream(nf).pipe(res) : res.end('Not found');
  }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`serving dist on http://localhost:${port}`));
