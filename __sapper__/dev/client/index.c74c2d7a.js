import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as add_location, j as insert_dev, t as transition_in, k as transition_out, l as text, m as create_component, n as claim_text, o as claim_component, p as attr_dev, r as append_dev, u as mount_component, w as destroy_component } from './client.93ce304c.js';
import { R as Redes_sociales } from './redes_sociales.55bbcec6.js';
import { C as Contacto } from './contacto.8df2fcb1.js';
import { b as briimax_letras } from './letras_briimax.c1085f76.js';

/* src/routes/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/index.svelte";

// (156:1) {:else}
function create_else_block(ctx) {
	let div2;
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let hr;
	let t2;
	let h4;
	let t3;
	let t4;
	let img;
	let img_src_value;
	let t5;
	let a0;
	let t6;
	let a0_aria_current_value;
	let t7;
	let a1;
	let t8;
	let a1_aria_current_value;
	let t9;
	let a2;
	let t10;
	let a2_aria_current_value;
	let t11;
	let a3;
	let t12;
	let a3_aria_current_value;
	let t13;
	let redessociales;
	let current;
	redessociales = new Redes_sociales({ $$inline: true });

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("ROPA INDUSTRIAL");
			t1 = space();
			hr = element("hr");
			t2 = space();
			h4 = element("h4");
			t3 = text("ROPA INDUSTRIAL PERSONALIZABLE");
			t4 = space();
			img = element("img");
			t5 = space();
			a0 = element("a");
			t6 = text("INICIO");
			t7 = space();
			a1 = element("a");
			t8 = text("MODELOS");
			t9 = space();
			a2 = element("a");
			t10 = text("HECHO A TU MEDIDA");
			t11 = space();
			a3 = element("a");
			t12 = text("CONTACTO");
			t13 = space();
			create_component(redessociales.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "ROPA INDUSTRIAL");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			t2 = claim_space(div0_nodes);
			h4 = claim_element(div0_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t3 = claim_text(h4_nodes, "ROPA INDUSTRIAL PERSONALIZABLE");
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t5 = claim_space(div1_nodes);

			a0 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "INICIO");
			a0_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);

			a1 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "MODELOS");
			a1_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);

			a2 = claim_element(div1_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, "HECHO A TU MEDIDA");
			a2_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);

			a3 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a3_nodes = children(a3);
			t12 = claim_text(a3_nodes, "CONTACTO");
			a3_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);
			claim_component(redessociales.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-uba7zn");
			add_location(h1, file, 161, 4, 3322);
			attr_dev(hr, "class", "svelte-uba7zn");
			add_location(hr, file, 161, 29, 3347);
			attr_dev(h4, "class", "svelte-uba7zn");
			add_location(h4, file, 162, 4, 3356);
			attr_dev(div0, "class", "text-welcome animate__animated animate__fadeIn svelte-uba7zn");
			add_location(div0, file, 160, 4, 3257);
			attr_dev(img, "class", "animate__animated animate__fadeIn svelte-uba7zn");
			if (img.src !== (img_src_value = briimax_letras)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 164, 4, 3410);
			attr_dev(a0, "rel", "prefetch");

			attr_dev(a0, "aria-current", a0_aria_current_value = /*segment*/ ctx[0] === "sobre_nosotros"
			? "page"
			: undefined);

			attr_dev(a0, "href", "sobre_nosotros");
			attr_dev(a0, "class", "svelte-uba7zn");
			add_location(a0, file, 165, 3, 3492);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "aria-current", a1_aria_current_value = /*segment*/ ctx[0] === "venta" ? "page" : undefined);
			attr_dev(a1, "href", "venta");
			attr_dev(a1, "class", "svelte-uba7zn");
			add_location(a1, file, 166, 3, 3611);
			attr_dev(a2, "aria-current", a2_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined);
			attr_dev(a2, "href", "about");
			attr_dev(a2, "class", "svelte-uba7zn");
			add_location(a2, file, 167, 6, 3716);
			attr_dev(a3, "rel", "prefetch");
			attr_dev(a3, "aria-current", a3_aria_current_value = /*segment*/ ctx[0] === "blog" ? "page" : undefined);
			attr_dev(a3, "href", "blog");
			attr_dev(a3, "class", "svelte-uba7zn");
			add_location(a3, file, 171, 6, 3989);
			attr_dev(div1, "class", "menu svelte-uba7zn");
			attr_dev(div1, "id", "menu");
			add_location(div1, file, 159, 3, 3224);
			attr_dev(div2, "class", "body1 contenedor svelte-uba7zn");
			add_location(div2, file, 158, 1, 3190);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, hr);
			append_dev(div0, t2);
			append_dev(div0, h4);
			append_dev(h4, t3);
			append_dev(div1, t4);
			append_dev(div1, img);
			append_dev(div1, t5);
			append_dev(div1, a0);
			append_dev(a0, t6);
			append_dev(div1, t7);
			append_dev(div1, a1);
			append_dev(a1, t8);
			append_dev(div1, t9);
			append_dev(div1, a2);
			append_dev(a2, t10);
			append_dev(div1, t11);
			append_dev(div1, a3);
			append_dev(a3, t12);
			append_dev(div1, t13);
			mount_component(redessociales, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
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
			if (detaching) detach_dev(div2);
			destroy_component(redessociales);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(156:1) {:else}",
		ctx
	});

	return block;
}

// (134:4) {#if condition}
function create_if_block(ctx) {
	let div2;
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let hr;
	let t2;
	let h4;
	let t3;
	let t4;
	let img;
	let img_src_value;
	let t5;
	let a0;
	let t6;
	let a0_aria_current_value;
	let t7;
	let a1;
	let t8;
	let a1_aria_current_value;
	let t9;
	let a2;
	let t10;
	let a2_aria_current_value;
	let t11;
	let a3;
	let t12;
	let a3_aria_current_value;
	let t13;
	let redessociales;
	let current;
	redessociales = new Redes_sociales({ $$inline: true });

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("ROPA INDUSTRIAL");
			t1 = space();
			hr = element("hr");
			t2 = space();
			h4 = element("h4");
			t3 = text("ROPA INDUSTRIAL PERSONALIZABLE");
			t4 = space();
			img = element("img");
			t5 = space();
			a0 = element("a");
			t6 = text("INICIO");
			t7 = space();
			a1 = element("a");
			t8 = text("MODELOS");
			t9 = space();
			a2 = element("a");
			t10 = text("HECHO A TU MEDIDA");
			t11 = space();
			a3 = element("a");
			t12 = text("CONTACTO");
			t13 = space();
			create_component(redessociales.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "ROPA INDUSTRIAL");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			t2 = claim_space(div0_nodes);
			h4 = claim_element(div0_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t3 = claim_text(h4_nodes, "ROPA INDUSTRIAL PERSONALIZABLE");
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t5 = claim_space(div1_nodes);

			a0 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "INICIO");
			a0_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);

			a1 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "MODELOS");
			a1_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);

			a2 = claim_element(div1_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, "HECHO A TU MEDIDA");
			a2_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);

			a3 = claim_element(div1_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true,
				class: true
			});

			var a3_nodes = children(a3);
			t12 = claim_text(a3_nodes, "CONTACTO");
			a3_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);
			claim_component(redessociales.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-uba7zn");
			add_location(h1, file, 139, 3, 2332);
			attr_dev(hr, "class", "svelte-uba7zn");
			add_location(hr, file, 139, 28, 2357);
			attr_dev(h4, "class", "svelte-uba7zn");
			add_location(h4, file, 140, 3, 2365);
			attr_dev(div0, "class", "text-welcome animate__animated animate__fadeIn svelte-uba7zn");
			add_location(div0, file, 138, 3, 2268);
			attr_dev(img, "class", "animate__animated animate__fadeIn svelte-uba7zn");
			if (img.src !== (img_src_value = briimax_letras)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 142, 3, 2417);
			attr_dev(a0, "rel", "prefetch");

			attr_dev(a0, "aria-current", a0_aria_current_value = /*segment*/ ctx[0] === "sobre_nosotros"
			? "page"
			: undefined);

			attr_dev(a0, "href", "sobre_nosotros");
			attr_dev(a0, "class", "svelte-uba7zn");
			add_location(a0, file, 143, 5, 2501);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "aria-current", a1_aria_current_value = /*segment*/ ctx[0] === "venta" ? "page" : undefined);
			attr_dev(a1, "href", "venta");
			attr_dev(a1, "class", "svelte-uba7zn");
			add_location(a1, file, 144, 5, 2622);
			attr_dev(a2, "aria-current", a2_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined);
			attr_dev(a2, "href", "about");
			attr_dev(a2, "class", "svelte-uba7zn");
			add_location(a2, file, 145, 5, 2726);
			attr_dev(a3, "rel", "prefetch");
			attr_dev(a3, "aria-current", a3_aria_current_value = /*segment*/ ctx[0] === "blog" ? "page" : undefined);
			attr_dev(a3, "href", "blog");
			attr_dev(a3, "class", "svelte-uba7zn");
			add_location(a3, file, 149, 5, 2986);
			attr_dev(div1, "class", "menu svelte-uba7zn");
			attr_dev(div1, "id", "menu");
			add_location(div1, file, 137, 2, 2236);
			attr_dev(div2, "class", "body1 contenedor svelte-uba7zn");
			add_location(div2, file, 136, 1, 2203);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, hr);
			append_dev(div0, t2);
			append_dev(div0, h4);
			append_dev(h4, t3);
			append_dev(div1, t4);
			append_dev(div1, img);
			append_dev(div1, t5);
			append_dev(div1, a0);
			append_dev(a0, t6);
			append_dev(div1, t7);
			append_dev(div1, a1);
			append_dev(a1, t8);
			append_dev(div1, t9);
			append_dev(div1, a2);
			append_dev(a2, t10);
			append_dev(div1, t11);
			append_dev(div1, a3);
			append_dev(a3, t12);
			append_dev(div1, t13);
			mount_component(redessociales, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
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
			if (detaching) detach_dev(div2);
			destroy_component(redessociales);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(134:4) {#if condition}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let body;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (condition) return 0;
		return 1;
	}

	current_block_type_index = select_block_type();
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			t = space();
			body = element("body");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ncgdz7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			if_block.l(body_nodes);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Briimax";
			add_location(body, file, 131, 0, 2144);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, body, anchor);
			if_blocks[current_block_type_index].m(body, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if_block.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(body);
			if_blocks[current_block_type_index].d();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzc0YzJkN2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBSZWRlc1NvY2lhbGVzIGZyb20gJy4vLi4vY29tcG9uZW50cy9yZWRlc19zb2NpYWxlcy5zdmVsdGUnO1xuXHRpbXBvcnQgQ29udGFjdG8gZnJvbSAnLi8uLi9jb21wb25lbnRzL2NvbnRhY3RvLnN2ZWx0ZSc7XG5cdGltcG9ydCBicmlpbWF4X2xldHJhcyBmcm9tICdpbWFnZXMvbGV0cmFzX2JyaWltYXgucG5nJztcbiAgICBcblx0ZXhwb3J0IGxldCBzZWdtZW50O1xuICAgIFxuICAgIFxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0dWErT25lJmRpc3BsYXk9c3dhcCcpO1xuXG5cdC5ib2R5MXtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQ6dXJsKFwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9icmlpbWF4LmFwcHNwb3QuY29tL28vZm9uZG8ucG5nP2FsdD1tZWRpYSZ0b2tlbj02M2E0MWZjOS1jNGJjLTQ0NzQtYTcwZC1iMjIyZDAyYjMzYzdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gXG4gLyogbm9zIGFzZWd1cmFtb3MgcXVlIGVsIGVsZW1lbnRvIG9jdXBlIHRvZGEgbGEgdmVudGFuYSBkZWwgbmF2ZWdhZG9yICovXG4gbWluLWhlaWdodDoxMDAlO1xuXG4gLyogUHJvcGllZGFkIGEgdXRpbGl6YXIgcGFyYSBsYSBpbWFnZW4gKi9cbiBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5cblx0fVxuXHQuY29udGVuZWRvcntcblx0XHRcbiAgICAgICAgZGlzcGxheTogZmxleDtcblx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5tZW51e1xuXHRcdG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcblx0XHRcblx0XHRcblx0fVxuXHQubWVudSAudGV4dC13ZWxjb21le1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNCU7XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoMXtcbiAgICAgZm9udC1zaXplOiAxMXZ3O1xuXHQgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaHJ7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxuXHQubWVudSAudGV4dC13ZWxjb21lIGg0e1xuXHRcdFxuXHRcdGZvbnQtc2l6ZTogNC40dnc7XG5cdH1cblx0Lm1lbnUgYXtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGZvbnQtc2l6ZTogOXZ3O1xuXHRcdG1hcmdpbi10b3A6IDQlO1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuXHRcdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcblx0fVxuXHQubWVudSBhOmhvdmVye1xuXHRcdGNvbG9yOiAjZWVkZWIxO1xuXHRcdGZvbnQtc2l6ZTogMTF2dztcblx0fVxuXHRpbWd7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTMzcHgpe1xuXHRcdC5tZW51IGF7XG5cdFx0Zm9udC1zaXplOiA4dnc7XG5cdFxuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDF7XG4gICAgIGZvbnQtc2l6ZTogMTAuM3Z3O1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDR7XG5cdFx0Zm9udC1zaXplOiA0LjR2dztcblx0fVxuXHRpbWd7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cdC5tZW51IGE6aG92ZXJ7XG5cdFx0Y29sb3I6ICNlZWRlYjE7XG5cdFx0Zm9udC1zaXplOiA4dnc7XG5cdH1cblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MnB4KXtcblx0XHQubWVudSBhe1xuXHRcdGZvbnQtc2l6ZTogNTBweDtcblx0XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoMXtcbiAgICAgZm9udC1zaXplOiA4N3B4O1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDR7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cdFxuXHQubWVudSBhOmhvdmVye1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogNjNweDtcblx0dGV4dC1zaGFkb3c6XG5cdFx0MCAwIDVweCByZ2IoMjE2LCAxODksIDM4KSxcblx0XHQwIDAgMTBweCByZ2IoMTgyLCAyOSwgMTgpLFxuXHRcdDAgMCAyMHB4IHJnYigyMTEsIDEyLCAxMik7XG5cdFx0XG5cdFx0XG5cdH1cblx0aW1ne1xuXHRcdHdpZHRoOiA2MDBweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFxuXHR9XG5cdFxuXG5cdH1cblx0XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5CcmlpbWF4PC90aXRsZT5cblx0XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keT5cblxuICAgIHsjaWYgY29uZGl0aW9ufVxuXHRcdCA8IS0tIGNvbnRlbnQgaGVyZSAtLT5cblx0XHQgXHRcblx0PGRpdiBjbGFzcz1cImJvZHkxIGNvbnRlbmVkb3JcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWVudVwiIGlkPSdtZW51Jz5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LXdlbGNvbWUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XG5cdFx0XHQ8aDE+Uk9QQSBJTkRVU1RSSUFMPC9oMT4gPGhyPlxuXHRcdFx0PGg0PlJPUEEgSU5EVVNUUklBTCBQRVJTT05BTElaQUJMRTwvaDQ+XG5cdFx0PC9kaXY+XG5cdFx0XHQ8aW1nIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCIgc3JjPVwie2JyaWltYXhfbGV0cmFzfVwiICBhbHQ9XCJcIj5cblx0XHQgICA8YSByZWw9cHJlZmV0Y2ggYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdzb2JyZV9ub3NvdHJvcycgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cInNvYnJlX25vc290cm9zXCI+SU5JQ0lPPC9hPlxuXHRcdCAgIDxhIHJlbD1wcmVmZXRjaCBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ3ZlbnRhJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwidmVudGFcIj5NT0RFTE9TPC9hPlxuXHRcdCAgIDxhIGFyaWEtY3VycmVudD1cIntzZWdtZW50ID09PSAnYWJvdXQnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJhYm91dFwiPkhFQ0hPIEEgVFUgTUVESURBPC9hPlxuXHRcdCAgIFxuXHRcdDwhLS0gZm9yIHRoZSBibG9nIGxpbmssIHdlJ3JlIHVzaW5nIHJlbD1wcmVmZXRjaCBzbyB0aGF0IFNhcHBlciBwcmVmZXRjaGVzXG5cdFx0XHR0aGUgYmxvZyBkYXRhIHdoZW4gd2UgaG92ZXIgb3ZlciB0aGUgbGluayBvciB0YXAgaXQgb24gYSB0b3VjaHNjcmVlbiAtLT5cblx0XHQgICA8YSByZWw9cHJlZmV0Y2ggYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdibG9nJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwiYmxvZ1wiPkNPTlRBQ1RPPC9hPlxuXHRcdFx0IFxuXHRcdCA8UmVkZXNTb2NpYWxlcz48L1JlZGVzU29jaWFsZXM+XG5cdFx0PC9kaXY+XG5cdCAgIFxuICAgPC9kaXY+XG5cdHs6ZWxzZX1cblx0XHQgPCEtLSBlbHNlIGNvbnRlbnQgaGVyZSAtLT5cblx0XG5cdDxkaXYgY2xhc3M9XCJib2R5MSBjb250ZW5lZG9yXCI+XG5cdFx0IDxkaXYgY2xhc3M9XCJtZW51XCIgaWQ9J21lbnUnPlxuXHRcdFx0IDxkaXYgY2xhc3M9XCJ0ZXh0LXdlbGNvbWUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XG5cdFx0XHQgPGgxPlJPUEEgSU5EVVNUUklBTDwvaDE+IDxocj5cblx0XHRcdCA8aDQ+Uk9QQSBJTkRVU1RSSUFMIFBFUlNPTkFMSVpBQkxFPC9oND5cblx0XHQgPC9kaXY+XG5cdFx0XHQgPGltZyBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblwiIHNyYz1cInticmlpbWF4X2xldHJhc31cIiAgYWx0PVwiXCI+XG5cdFx0XHQ8YSByZWw9cHJlZmV0Y2ggYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdzb2JyZV9ub3NvdHJvcycgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cInNvYnJlX25vc290cm9zXCI+SU5JQ0lPPC9hPlxuXHRcdFx0PGEgcmVsPXByZWZldGNoIGFyaWEtY3VycmVudD1cIntzZWdtZW50ID09PSAndmVudGEnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJ2ZW50YVwiPk1PREVMT1M8L2E+XG5cdCAgICBcdDxhIGFyaWEtY3VycmVudD1cIntzZWdtZW50ID09PSAnYWJvdXQnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJhYm91dFwiPkhFQ0hPIEEgVFUgTUVESURBPC9hPlxuICAgICAgICAgICAgXG5cdFx0IDwhLS0gZm9yIHRoZSBibG9nIGxpbmssIHdlJ3JlIHVzaW5nIHJlbD1wcmVmZXRjaCBzbyB0aGF0IFNhcHBlciBwcmVmZXRjaGVzXG5cdFx0ICAgICB0aGUgYmxvZyBkYXRhIHdoZW4gd2UgaG92ZXIgb3ZlciB0aGUgbGluayBvciB0YXAgaXQgb24gYSB0b3VjaHNjcmVlbiAtLT5cblx0ICAgIFx0PGEgcmVsPXByZWZldGNoIGFyaWEtY3VycmVudD1cIntzZWdtZW50ID09PSAnYmxvZycgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cImJsb2dcIj5DT05UQUNUTzwvYT5cblx0XHQgICAgICBcblx0XHQgIDxSZWRlc1NvY2lhbGVzPjwvUmVkZXNTb2NpYWxlcz5cblx0ICAgICA8L2Rpdj5cblx0XHRcbiAgICA8L2Rpdj5cblx0ey9pZn1cblxuPC9ib2R5PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FvS3lELGNBQWM7Ozs7O29FQUNyQyxHQUFPLFFBQUssZ0JBQWdCO0tBQUcsTUFBTTtLQUFHLFNBQVM7Ozs7OztvRUFDakQsR0FBTyxRQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzs7OztvRUFDbEQsR0FBTyxRQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7b0VBSTNCLEdBQU8sUUFBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBTjFDLEdBQU8sUUFBSyxnQkFBZ0I7S0FBRyxNQUFNO0tBQUcsU0FBUzs7OzsyR0FDakQsR0FBTyxRQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzs7OzsyR0FDbEQsR0FBTyxRQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzs7OzsyR0FJM0IsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQTdCcEIsY0FBYzs7Ozs7b0VBQ2xDLEdBQU8sUUFBSyxnQkFBZ0I7S0FBRyxNQUFNO0tBQUcsU0FBUzs7Ozs7O29FQUNqRCxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7O29FQUNyRCxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OztvRUFJM0IsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyR0FOdkMsR0FBTyxRQUFLLGdCQUFnQjtLQUFHLE1BQU07S0FBRyxTQUFTOzs7OzJHQUNqRCxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OzJHQUNyRCxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OzJHQUkzQixHQUFPLFFBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaEJsRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaElOLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
