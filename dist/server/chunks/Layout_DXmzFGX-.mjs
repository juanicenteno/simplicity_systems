import { e as createComponent, g as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_CzcP1_xN.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Simplicity Systems | Modular Suite",
    description = "Suite modular de soluciones para hoteler\xEDa y gesti\xF3n de negocios."
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366F1'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <!-- HEADER / NAVIGATION BAR --> <header class="navbar" data-astro-cid-sckkx6r4> <div class="nav-inner" data-astro-cid-sckkx6r4> <a href="/" class="nav-brand" data-astro-cid-sckkx6r4> <div class="logo-box" data-astro-cid-sckkx6r4> <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sckkx6r4> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-sckkx6r4></path> <path d="M2 17l10 5 10-5" data-astro-cid-sckkx6r4></path> <path d="M2 12l10 5 10-5" data-astro-cid-sckkx6r4></path> </svg> </div> <div class="brand-text" data-astro-cid-sckkx6r4> <span class="brand-title" data-astro-cid-sckkx6r4>Simplicity</span> <span class="brand-tag" data-astro-cid-sckkx6r4>SYSTEMS</span> </div> </a> <nav class="nav-links" data-astro-cid-sckkx6r4> <a href="/"${addAttribute(currentPath === "/" ? "active" : "", "class")} data-astro-cid-sckkx6r4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sckkx6r4><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-sckkx6r4></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-sckkx6r4></polyline></svg>
Inicio
</a> <a href="/vouchers"${addAttribute(currentPath.startsWith("/vouchers") ? "active" : "", "class")} data-astro-cid-sckkx6r4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sckkx6r4><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-sckkx6r4></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-sckkx6r4></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-sckkx6r4></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-sckkx6r4></line></svg>
Vouchers PDF
</a> <a href="/reservas"${addAttribute(currentPath.startsWith("/reservas") ? "active" : "", "class")} data-astro-cid-sckkx6r4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sckkx6r4><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-sckkx6r4></path><polyline points="14 2 14 8 20 8" data-astro-cid-sckkx6r4></polyline><line x1="16" y1="13" x2="8" y2="13" data-astro-cid-sckkx6r4></line><line x1="16" y1="17" x2="8" y2="17" data-astro-cid-sckkx6r4></line><polyline points="10 9 9 9 8 9" data-astro-cid-sckkx6r4></polyline></svg>
Reservas
</a> </nav> <div class="nav-actions" data-astro-cid-sckkx6r4> <span class="portfolio-badge" data-astro-cid-sckkx6r4> <span class="pulse-dot" data-astro-cid-sckkx6r4></span>
Portfolio Project
</span> </div> </div> </header> <!-- MAIN SLOT --> <main class="main-wrapper" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <!-- FOOTER --> <footer class="footer" data-astro-cid-sckkx6r4> <div class="footer-inner" data-astro-cid-sckkx6r4> <div class="footer-col" data-astro-cid-sckkx6r4> <div class="footer-logo" data-astro-cid-sckkx6r4> <span class="brand-title" data-astro-cid-sckkx6r4>Simplicity</span> <span class="brand-tag" data-astro-cid-sckkx6r4>SYSTEMS</span> </div> <p class="footer-text" data-astro-cid-sckkx6r4>Módulos ligeros, eficientes e independientes para gestión operativa y comercial.</p> </div> <div class="footer-col" data-astro-cid-sckkx6r4> <div class="footer-links" data-astro-cid-sckkx6r4> <a href="/" data-astro-cid-sckkx6r4>Hub Principal</a> <a href="/vouchers" data-astro-cid-sckkx6r4>Generador de Vouchers</a> <a href="/reservas" data-astro-cid-sckkx6r4>Carga de Reservas</a> </div> </div> <div class="footer-col" style="text-align: right;" data-astro-cid-sckkx6r4> <p class="footer-copy" data-astro-cid-sckkx6r4>Diseñado para Portfolio & Soluciones B2B</p> <p class="footer-subtext" data-astro-cid-sckkx6r4>Astro • React • Google Apps Script • React-PDF</p> </div> </div> </footer> </body></html>`;
}, "C:/Users/juani/Desktop/cww-projects/simplicity_systems/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
