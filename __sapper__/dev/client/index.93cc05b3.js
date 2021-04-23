import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, c as create_component, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_element, h as children, j as claim_text, k as claim_component, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, p as mount_component, r as transition_in, u as transition_out, w as destroy_component } from './client.68b0957d.js';
import { R as Redes_sociales } from './redes_sociales.e3c76544.js';
import { C as Contacto } from './contacto.757070ed.js';
import { b as briimax_letras } from './letras_briimax.c1085f76.js';

/* src/routes/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let div2;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let hr;
	let t3;
	let h4;
	let t4;
	let t5;
	let img;
	let img_src_value;
	let t6;
	let a0;
	let t7;
	let a0_aria_current_value;
	let t8;
	let a1;
	let t9;
	let a1_aria_current_value;
	let t10;
	let a2;
	let t11;
	let a2_aria_current_value;
	let t12;
	let a3;
	let t13;
	let a3_aria_current_value;
	let t14;
	let redessociales;
	let current;
	redessociales = new Redes_sociales({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("ROPA INDUSTRIAL");
			t2 = space();
			hr = element("hr");
			t3 = space();
			h4 = element("h4");
			t4 = text("ROPA INDUSTRIAL PERSONALIZABLE");
			t5 = space();
			img = element("img");
			t6 = space();
			a0 = element("a");
			t7 = text("INICIO");
			t8 = space();
			a1 = element("a");
			t9 = text("MODELOS");
			t10 = space();
			a2 = element("a");
			t11 = text("HECHO A TU MEDIDA");
			t12 = space();
			a3 = element("a");
			t13 = text("CONTACTO");
			t14 = space();
			create_component(redessociales.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ncgdz7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			div2 = claim_element(body_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "ROPA INDUSTRIAL");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			t3 = claim_space(div0_nodes);
			h4 = claim_element(div0_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t4 = claim_text(h4_nodes, "ROPA INDUSTRIAL PERSONALIZABLE");
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t6 = claim_space(div1_nodes);

			a0 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a0_nodes = children(a0);
			t7 = claim_text(a0_nodes, "INICIO");
			a0_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);

			a1 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "MODELOS");
			a1_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);

			a2 = claim_element(div1_nodes, "A", {
				class: true,
				"aria-current": true,
				href: true
			});

			var a2_nodes = children(a2);
			t11 = claim_text(a2_nodes, "HECHO A TU MEDIDA");
			a2_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);

			a3 = claim_element(div1_nodes, "A", {
				class: true,
				rel: true,
				"aria-current": true,
				href: true
			});

			var a3_nodes = children(a3);
			t13 = claim_text(a3_nodes, "CONTACTO");
			a3_nodes.forEach(detach_dev);
			t14 = claim_space(div1_nodes);
			claim_component(redessociales.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Briimax";
			attr_dev(h1, "class", "svelte-uba7zn");
			add_location(h1, file, 135, 4, 2284);
			attr_dev(hr, "class", "svelte-uba7zn");
			add_location(hr, file, 135, 29, 2309);
			attr_dev(h4, "class", "svelte-uba7zn");
			add_location(h4, file, 136, 4, 2318);
			attr_dev(div0, "class", "text-welcome animate__animated animate__fadeIn svelte-uba7zn");
			add_location(div0, file, 134, 4, 2219);
			attr_dev(img, "class", "animate__animated animate__fadeIn svelte-uba7zn");
			if (img.src !== (img_src_value = briimax_letras)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 138, 4, 2372);
			attr_dev(a0, "rel", "prefetch");

			attr_dev(a0, "aria-current", a0_aria_current_value = /*segment*/ ctx[0] === "sobre_nosotros"
			? "page"
			: undefined);

			attr_dev(a0, "href", "sobre_nosotros");
			attr_dev(a0, "class", "svelte-uba7zn");
			add_location(a0, file, 139, 3, 2454);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "aria-current", a1_aria_current_value = /*segment*/ ctx[0] === "venta" ? "page" : undefined);
			attr_dev(a1, "href", "venta");
			attr_dev(a1, "class", "svelte-uba7zn");
			add_location(a1, file, 140, 3, 2573);
			attr_dev(a2, "class", "animate__animated animate__wobble animate__delay-4s  svelte-uba7zn");
			attr_dev(a2, "aria-current", a2_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined);
			attr_dev(a2, "href", "about");
			add_location(a2, file, 141, 6, 2678);
			attr_dev(a3, "class", "animate__animated animate__wobble animate__delay-5s svelte-uba7zn");
			attr_dev(a3, "rel", "prefetch");
			attr_dev(a3, "aria-current", a3_aria_current_value = /*segment*/ ctx[0] === "blog" ? "page" : undefined);
			attr_dev(a3, "href", "blog");
			add_location(a3, file, 145, 6, 3012);
			attr_dev(div1, "class", "menu svelte-uba7zn");
			attr_dev(div1, "id", "menu");
			add_location(div1, file, 133, 3, 2186);
			attr_dev(div2, "class", "body1 contenedor svelte-uba7zn");
			add_location(div2, file, 132, 1, 2152);
			add_location(body, file, 131, 0, 2144);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div2);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			append_dev(div0, hr);
			append_dev(div0, t3);
			append_dev(div0, h4);
			append_dev(h4, t4);
			append_dev(div1, t5);
			append_dev(div1, img);
			append_dev(div1, t6);
			append_dev(div1, a0);
			append_dev(a0, t7);
			append_dev(div1, t8);
			append_dev(div1, a1);
			append_dev(a1, t9);
			append_dev(div1, t10);
			append_dev(div1, a2);
			append_dev(a2, t11);
			append_dev(div1, t12);
			append_dev(div1, a3);
			append_dev(a3, t13);
			append_dev(div1, t14);
			mount_component(redessociales, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*segment*/ 1 && a0_aria_current_value !== (a0_aria_current_value = /*segment*/ ctx[0] === "sobre_nosotros"
			? "page"
			: undefined)) {
				attr_dev(a0, "aria-current", a0_aria_current_value);
			}

			if (!current || dirty & /*segment*/ 1 && a1_aria_current_value !== (a1_aria_current_value = /*segment*/ ctx[0] === "venta" ? "page" : undefined)) {
				attr_dev(a1, "aria-current", a1_aria_current_value);
			}

			if (!current || dirty & /*segment*/ 1 && a2_aria_current_value !== (a2_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined)) {
				attr_dev(a2, "aria-current", a2_aria_current_value);
			}

			if (!current || dirty & /*segment*/ 1 && a3_aria_current_value !== (a3_aria_current_value = /*segment*/ ctx[0] === "blog" ? "page" : undefined)) {
				attr_dev(a3, "aria-current", a3_aria_current_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(redessociales.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(redessociales.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(body);
			destroy_component(redessociales);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { segment } = $$props;
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => ({
		RedesSociales: Redes_sociales,
		Contacto,
		briimax_letras,
		segment
	});

	$$self.$inject_state = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [segment];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console.warn("<Routes> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTNjYzA1YjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBSZWRlc1NvY2lhbGVzIGZyb20gJy4vLi4vY29tcG9uZW50cy9yZWRlc19zb2NpYWxlcy5zdmVsdGUnO1xuXHRpbXBvcnQgQ29udGFjdG8gZnJvbSAnLi8uLi9jb21wb25lbnRzL2NvbnRhY3RvLnN2ZWx0ZSc7XG5cdGltcG9ydCBicmlpbWF4X2xldHJhcyBmcm9tICdpbWFnZXMvbGV0cmFzX2JyaWltYXgucG5nJztcbiAgICBcblx0ZXhwb3J0IGxldCBzZWdtZW50O1xuICAgIFxuICAgIFxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0dWErT25lJmRpc3BsYXk9c3dhcCcpO1xuXG5cdC5ib2R5MXtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQ6dXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9icmlpbWF4LmFwcHNwb3QuY29tL28vZm9uZG8ucG5nP2FsdD1tZWRpYSZ0b2tlbj02M2E0MWZjOS1jNGJjLTQ0NzQtYTcwZC1iMjIyZDAyYjMzYzdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gXG4gLyogbm9zIGFzZWd1cmFtb3MgcXVlIGVsIGVsZW1lbnRvIG9jdXBlIHRvZGEgbGEgdmVudGFuYSBkZWwgbmF2ZWdhZG9yICovXG4gbWluLWhlaWdodDoxMDAlO1xuXG4gLyogUHJvcGllZGFkIGEgdXRpbGl6YXIgcGFyYSBsYSBpbWFnZW4gKi9cbiBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5cblx0fVxuXHQuY29udGVuZWRvcntcblx0XHRcbiAgICAgICAgZGlzcGxheTogZmxleDtcblx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5tZW51e1xuXHRcdG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcblx0XHRcblx0XHRcblx0fVxuXHQubWVudSAudGV4dC13ZWxjb21le1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNCU7XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoMXtcbiAgICAgZm9udC1zaXplOiAxMXZ3O1xuXHQgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaHJ7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxuXHQubWVudSAudGV4dC13ZWxjb21lIGg0e1xuXHRcdFxuXHRcdGZvbnQtc2l6ZTogNC40dnc7XG5cdH1cblx0Lm1lbnUgYXtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGZvbnQtc2l6ZTogOXZ3O1xuXHRcdG1hcmdpbi10b3A6IDQlO1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuXHRcdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcblx0fVxuXHQubWVudSBhOmhvdmVye1xuXHRcdGNvbG9yOiAjZWVkZWIxO1xuXHRcdGZvbnQtc2l6ZTogMTF2dztcblx0fVxuXHRpbWd7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTMzcHgpe1xuXHRcdC5tZW51IGF7XG5cdFx0Zm9udC1zaXplOiA4dnc7XG5cdFxuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDF7XG4gICAgIGZvbnQtc2l6ZTogMTAuM3Z3O1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDR7XG5cdFx0Zm9udC1zaXplOiA0LjR2dztcblx0fVxuXHRpbWd7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cdC5tZW51IGE6aG92ZXJ7XG5cdFx0Y29sb3I6ICNlZWRlYjE7XG5cdFx0Zm9udC1zaXplOiA4dnc7XG5cdH1cblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MnB4KXtcblx0XHQubWVudSBhe1xuXHRcdGZvbnQtc2l6ZTogNTBweDtcblx0XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoMXtcbiAgICAgZm9udC1zaXplOiA4N3B4O1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDR7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cdFxuXHQubWVudSBhOmhvdmVye1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogNjNweDtcblx0dGV4dC1zaGFkb3c6XG5cdFx0MCAwIDVweCByZ2IoMjE2LCAxODksIDM4KSxcblx0XHQwIDAgMTBweCByZ2IoMTgyLCAyOSwgMTgpLFxuXHRcdDAgMCAyMHB4IHJnYigyMTEsIDEyLCAxMik7XG5cdFx0XG5cdFx0XG5cdH1cblx0aW1ne1xuXHRcdHdpZHRoOiA2MDBweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFxuXHR9XG5cdFxuXG5cdH1cblx0XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5CcmlpbWF4PC90aXRsZT5cblx0XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keT5cblx0PGRpdiBjbGFzcz1cImJvZHkxIGNvbnRlbmVkb3JcIj5cblx0XHQgPGRpdiBjbGFzcz1cIm1lbnVcIiBpZD0nbWVudSc+XG5cdFx0XHQgPGRpdiBjbGFzcz1cInRleHQtd2VsY29tZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIj5cblx0XHRcdCA8aDE+Uk9QQSBJTkRVU1RSSUFMPC9oMT4gPGhyPlxuXHRcdFx0IDxoND5ST1BBIElORFVTVFJJQUwgUEVSU09OQUxJWkFCTEU8L2g0PlxuXHRcdCA8L2Rpdj5cblx0XHRcdCA8aW1nIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCIgc3JjPVwie2JyaWltYXhfbGV0cmFzfVwiICBhbHQ9XCJcIj5cblx0XHRcdDxhIHJlbD1wcmVmZXRjaCBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ3NvYnJlX25vc290cm9zJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwic29icmVfbm9zb3Ryb3NcIj5JTklDSU88L2E+XG5cdFx0XHQ8YSByZWw9cHJlZmV0Y2ggYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICd2ZW50YScgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cInZlbnRhXCI+TU9ERUxPUzwvYT5cblx0ICAgIFx0PGEgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX193b2JibGUgYW5pbWF0ZV9fZGVsYXktNHMgXCIgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdhYm91dCcgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cImFib3V0XCI+SEVDSE8gQSBUVSBNRURJREE8L2E+XG4gICAgICAgICAgICBcblx0XHQgPCEtLSBmb3IgdGhlIGJsb2cgbGluaywgd2UncmUgdXNpbmcgcmVsPXByZWZldGNoIHNvIHRoYXQgU2FwcGVyIHByZWZldGNoZXNcblx0XHQgICAgIHRoZSBibG9nIGRhdGEgd2hlbiB3ZSBob3ZlciBvdmVyIHRoZSBsaW5rIG9yIHRhcCBpdCBvbiBhIHRvdWNoc2NyZWVuIC0tPlxuXHQgICAgXHQ8YSBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3dvYmJsZSBhbmltYXRlX19kZWxheS01c1wiIHJlbD1wcmVmZXRjaCBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ2Jsb2cnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJibG9nXCI+Q09OVEFDVE88L2E+XG5cdFx0ICAgICAgXG5cdFx0ICA8UmVkZXNTb2NpYWxlcz48L1JlZGVzU29jaWFsZXM+XG5cdCAgICAgPC9kaXY+XG5cdFx0XG4gICAgPC9kaXY+XG5cbjwvYm9keT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQTBJeUQsY0FBYzs7Ozs7b0VBQ3JDLEdBQU8sUUFBSyxnQkFBZ0I7S0FBRyxNQUFNO0tBQUcsU0FBUzs7Ozs7O29FQUNqRCxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OztvRUFDVyxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OztvRUFJNUIsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJHQU50RyxHQUFPLFFBQUssZ0JBQWdCO0tBQUcsTUFBTTtLQUFHLFNBQVM7Ozs7MkdBQ2pELEdBQU8sUUFBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7MkdBQ1csR0FBTyxRQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzs7OzsyR0FJNUIsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVJNUgsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
