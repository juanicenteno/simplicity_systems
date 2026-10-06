import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CzcP1_xN.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DXmzFGX-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Vouchers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Generador de Vouchers | Simplicity Systems", "description": "Crea, personaliza y genera comprobantes de reserva en PDF en tiempo real.", "data-astro-cid-utv5wegm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="module-view-header" data-astro-cid-utv5wegm> <div class="breadcrumb" data-astro-cid-utv5wegm> <a href="/" data-astro-cid-utv5wegm>Hub</a> <span data-astro-cid-utv5wegm>/</span> <span class="active" data-astro-cid-utv5wegm>Generador de Vouchers</span> </div> </div> ${renderComponent($$result2, "VoucherGenerator", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-utv5wegm": true, "client:component-path": "C:/Users/juani/Desktop/cww-projects/simplicity_systems/src/components/VoucherGenerator.jsx", "client:component-export": "default" })} ` })} `;
}, "C:/Users/juani/Desktop/cww-projects/simplicity_systems/src/pages/vouchers.astro", void 0);

const $$file = "C:/Users/juani/Desktop/cww-projects/simplicity_systems/src/pages/vouchers.astro";
const $$url = "/vouchers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vouchers,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
