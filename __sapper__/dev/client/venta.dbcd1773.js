import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as create_component, a as space, t as text, g as claim_element, h as children, k as claim_component, f as claim_space, j as claim_text, b as detach_dev, l as attr_dev, m as add_location, n as insert_dev, p as mount_component, o as append_dev, r as transition_in, G as add_render_callback, H as create_bidirectional_transition, u as transition_out, w as destroy_component, A as listen_dev, E as group_outros, F as check_outros, B as noop } from './client.56e229f7.js';
import { D as Disenos_personalizables } from './disenos_personalizables.e65599ca.js';
import { L as Logo } from './logo.b99ad3f9.js';
import { b as blur } from './index.fcdc68d1.js';
import { O as Overoles } from './overoles.9f2bb4b4.js';
import './letras_briimax.c1085f76.js';

/* src/components/modelos.svelte generated by Svelte v3.37.0 */
const file$1 = "src/components/modelos.svelte";

// (56:4) {#if categorias}
function create_if_block(ctx) {
	let div;
	let logo;
	let t0;
	let li0;
	let t1;
	let t2;
	let li1;
	let t3;
	let t4;
	let li2;
	let t5;
	let t6;
	let li3;
	let t7;
	let t8;
	let li4;
	let t9;
	let div_transition;
	let current;
	logo = new Logo({ $$inline: true });

	const block = {
		c: function create() {
			div = element("div");
			create_component(logo.$$.fragment);
			t0 = space();
			li0 = element("li");
			t1 = text("OVEROLES");
			t2 = space();
			li1 = element("li");
			t3 = text("CHALECOS");
			t4 = space();
			li2 = element("li");
			t5 = text("TERMICOS");
			t6 = space();
			li3 = element("li");
			t7 = text("OVEROL BUSO");
			t8 = space();
			li4 = element("li");
			t9 = text("TERMICO BUSO");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(logo.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			li0 = claim_element(div_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t1 = claim_text(li0_nodes, "OVEROLES");
			li0_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			li1 = claim_element(div_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t3 = claim_text(li1_nodes, "CHALECOS");
			li1_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			li2 = claim_element(div_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t5 = claim_text(li2_nodes, "TERMICOS");
			li2_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			li3 = claim_element(div_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t7 = claim_text(li3_nodes, "OVEROL BUSO");
			li3_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			li4 = claim_element(div_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t9 = claim_text(li4_nodes, "TERMICO BUSO");
			li4_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li0, "class", "svelte-1twoqmi");
			add_location(li0, file$1, 58, 12, 1156);
			attr_dev(li1, "class", "svelte-1twoqmi");
			add_location(li1, file$1, 59, 12, 1186);
			attr_dev(li2, "class", "svelte-1twoqmi");
			add_location(li2, file$1, 60, 12, 1216);
			attr_dev(li3, "class", "svelte-1twoqmi");
			add_location(li3, file$1, 61, 12, 1246);
			attr_dev(li4, "class", "svelte-1twoqmi");
			add_location(li4, file$1, 62, 12, 1279);
			attr_dev(div, "class", "modelos svelte-1twoqmi");
			add_location(div, file$1, 56, 4, 1084);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(logo, div, null);
			append_dev(div, t0);
			append_dev(div, li0);
			append_dev(li0, t1);
			append_dev(div, t2);
			append_dev(div, li1);
			append_dev(li1, t3);
			append_dev(div, t4);
			append_dev(div, li2);
			append_dev(li2, t5);
			append_dev(div, t6);
			append_dev(div, li3);
			append_dev(li3, t7);
			append_dev(div, t8);
			append_dev(div, li4);
			append_dev(li4, t9);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, blur, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, blur, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(logo);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(56:4) {#if categorias}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div3;
	let div0;
	let h2;
	let t0;
	let t1;
	let t2;
	let div2;
	let div1;
	let img;
	let img_src_value;
	let t3;
	let h1;
	let t4;
	let t5;
	let h40;
	let t6;
	let t7;
	let h41;
	let t8;
	let t9;
	let h42;
	let t10;
	let t11;
	let p;
	let t12;
	let current;
	let mounted;
	let dispose;
	let if_block = /*categorias*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Ver Categorias");
			t1 = space();
			if (if_block) if_block.c();
			t2 = space();
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t3 = space();
			h1 = element("h1");
			t4 = text("titulo");
			t5 = space();
			h40 = element("h4");
			t6 = text("precio");
			t7 = space();
			h41 = element("h4");
			t8 = text("tallas");
			t9 = space();
			h42 = element("h4");
			t10 = text("colores");
			t11 = space();
			p = element("p");
			t12 = text("Informacion");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Ver Categorias");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			if (if_block) if_block.l(div3_nodes);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t3 = claim_space(div1_nodes);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t4 = claim_text(h1_nodes, "titulo");
			h1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			h40 = claim_element(div1_nodes, "H4", {});
			var h40_nodes = children(h40);
			t6 = claim_text(h40_nodes, "precio");
			h40_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			h41 = claim_element(div1_nodes, "H4", {});
			var h41_nodes = children(h41);
			t8 = claim_text(h41_nodes, "tallas");
			h41_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);
			h42 = claim_element(div1_nodes, "H4", {});
			var h42_nodes = children(h42);
			t10 = claim_text(h42_nodes, "colores");
			h42_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", {});
			var p_nodes = children(p);
			t12 = claim_text(p_nodes, "Informacion");
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 53, 4, 998);
			attr_dev(div0, "class", "categorias svelte-1twoqmi");
			add_location(div0, file$1, 52, 4, 969);
			if (img.src !== (img_src_value = "https://juanpreciado.com/wp-content/uploads/verde-1-1400x1334.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			attr_dev(img, "class", "svelte-1twoqmi");
			add_location(img, file$1, 67, 12, 1396);
			add_location(h1, file$1, 68, 12, 1493);
			add_location(h40, file$1, 69, 12, 1521);
			add_location(h41, file$1, 70, 12, 1549);
			add_location(h42, file$1, 71, 12, 1577);
			add_location(p, file$1, 72, 12, 1606);
			attr_dev(div1, "class", "overoles");
			add_location(div1, file$1, 66, 8, 1361);
			attr_dev(div2, "class", "modelosVenta svelte-1twoqmi");
			add_location(div2, file$1, 65, 4, 1326);
			attr_dev(div3, "class", "container svelte-1twoqmi");
			add_location(div3, file$1, 51, 0, 941);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div3, t1);
			if (if_block) if_block.m(div3, null);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t3);
			append_dev(div1, h1);
			append_dev(h1, t4);
			append_dev(div1, t5);
			append_dev(div1, h40);
			append_dev(h40, t6);
			append_dev(div1, t7);
			append_dev(div1, h41);
			append_dev(h41, t8);
			append_dev(div1, t9);
			append_dev(div1, h42);
			append_dev(h42, t10);
			append_dev(div1, t11);
			append_dev(div1, p);
			append_dev(p, t12);
			current = true;

			if (!mounted) {
				dispose = listen_dev(h2, "click", /*AbrirModelos*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*categorias*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*categorias*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div3, t2);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
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
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Modelos", slots, []);
	var categorias = false;

	let AbrirModelos = () => {
		if (categorias == false) {
			$$invalidate(0, categorias = true);
		} else {
			$$invalidate(0, categorias = false);
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Modelos> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Logo, blur, categorias, AbrirModelos });

	$$self.$inject_state = $$props => {
		if ("categorias" in $$props) $$invalidate(0, categorias = $$props.categorias);
		if ("AbrirModelos" in $$props) $$invalidate(1, AbrirModelos = $$props.AbrirModelos);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [categorias, AbrirModelos];
}

class Modelos extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Modelos",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/venta.svelte generated by Svelte v3.37.0 */
const file = "src/routes/venta.svelte";

function create_fragment(ctx) {
	let div;
	let h1;
	let t0;
	let t1;
	let modelos;
	let t2;
	let overoles;
	let current;
	modelos = new Modelos({ $$inline: true });
	overoles = new Overoles({ $$inline: true });

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text("MODELOS");
			t1 = space();
			create_component(modelos.$$.fragment);
			t2 = space();
			create_component(overoles.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "MODELOS");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			claim_component(modelos.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(overoles.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-rdjbln");
			add_location(h1, file, 25, 0, 689);
			attr_dev(div, "class", "container svelte-rdjbln");
			add_location(div, file, 24, 0, 665);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			mount_component(modelos, div, null);
			append_dev(div, t2);
			mount_component(overoles, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(modelos.$$.fragment, local);
			transition_in(overoles.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(modelos.$$.fragment, local);
			transition_out(overoles.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(modelos);
			destroy_component(overoles);
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
	validate_slots("Venta", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Venta> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		DisenosPersonalizables: Disenos_personalizables,
		Modelos,
		Overoles,
		Logo
	});

	return [];
}

class Venta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Venta",
			options,
			id: create_fragment.name
		});
	}
}

export default Venta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGEuZGJjZDE3NzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGVsb3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBMb2dvIGZyb20gJy4vbG9nby5zdmVsdGUnO1xuICAgIGltcG9ydCB7Ymx1cn0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIHZhciBjYXRlZ29yaWFzID0gZmFsc2U7XG5cbiAgICBsZXQgQWJyaXJNb2RlbG9zID0gKCkgPT4ge1xuICAgIGlmKGNhdGVnb3JpYXMgPT0gZmFsc2Upe1xuICAgICAgICBjYXRlZ29yaWFzID0gdHJ1ZTsgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNhdGVnb3JpYXMgPSBmYWxzZTtcbiAgICB9XG4gICAgfVxuICAgXG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDYwMCZkaXNwbGF5PXN3YXAnKTtcbi5jb250YWluZXJ7XG4gICBcbn1cbi5jb250YWluZXIgLmNhdGVnb3JpYXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG5cbn1cbi5jb250YWluZXIgLm1vZGVsb3N7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcbiAgXG59XG4uY29udGFpbmVyIC5tb2RlbG9zIGxpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIC5tb2RlbG9zVmVudGEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5tb2RlbG9zVmVudGEgLm92ZXJvbGVzIGltZ3tcbndpZHRoOiAyNzBweDtcbmhlaWdodDogMjcwcHg7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmlhc1wiPlxuICAgIDxoMiBvbjpjbGljaz1cIntBYnJpck1vZGVsb3N9XCI+VmVyIENhdGVnb3JpYXM8L2gyPlxuICAgIDwvZGl2PlxuICAgIHsjaWYgY2F0ZWdvcmlhc31cbiAgICA8ZGl2IGNsYXNzPVwibW9kZWxvc1wiIHRyYW5zaXRpb246Ymx1cj5cbiAgICAgICAgPExvZ28+PC9Mb2dvPlxuICAgICAgICAgICAgPGxpPk9WRVJPTEVTPC9saT5cbiAgICAgICAgICAgIDxsaT5DSEFMRUNPUzwvbGk+XG4gICAgICAgICAgICA8bGk+VEVSTUlDT1M8L2xpPlxuICAgICAgICAgICAgPGxpPk9WRVJPTCBCVVNPPC9saT5cbiAgICAgICAgICAgIDxsaT5URVJNSUNPIEJVU088L2xpPlxuICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gICAgPGRpdiBjbGFzcz1cIm1vZGVsb3NWZW50YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3Zlcm9sZXNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9qdWFucHJlY2lhZG8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy92ZXJkZS0xLTE0MDB4MTMzNC5qcGdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxoMT50aXR1bG88L2gxPlxuICAgICAgICAgICAgPGg0PnByZWNpbzwvaDQ+XG4gICAgICAgICAgICA8aDQ+dGFsbGFzPC9oND5cbiAgICAgICAgICAgIDxoND5jb2xvcmVzPC9oND5cbiAgICAgICAgICAgIDxwPkluZm9ybWFjaW9uPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcblxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBdURTLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUZBLEdBQVk7Ozs7O3NCQUV0QixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcERYLFVBQVUsR0FBRyxLQUFLOztLQUVsQixZQUFZO01BQ2IsVUFBVSxJQUFJLEtBQUs7bUJBQ2xCLFVBQVUsR0FBRyxJQUFJOzttQkFHakIsVUFBVSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
