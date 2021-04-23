import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, g as claim_element, h as children, b as detach_dev, f as claim_space, j as claim_text, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, B as noop } from './client.5e3d9a0d.js';
import { B as BusoTermico, C as Chaleco_modelo, a as OverolBuso, b as OverolModelo, T as TermicoModelo } from './overoles.3d4705a7.js';

/* src/components/disenos_personalizables.svelte generated by Svelte v3.37.0 */
const file = "src/components/disenos_personalizables.svelte";

function create_fragment(ctx) {
	let div5;
	let div0;
	let a;
	let img0;
	let img0_src_value;
	let a_aria_current_value;
	let t0;
	let h10;
	let t1;
	let t2;
	let div1;
	let img1;
	let img1_src_value;
	let t3;
	let h11;
	let t4;
	let t5;
	let div2;
	let img2;
	let img2_src_value;
	let t6;
	let h12;
	let t7;
	let t8;
	let div3;
	let img3;
	let img3_src_value;
	let t9;
	let h13;
	let t10;
	let t11;
	let div4;
	let img4;
	let img4_src_value;
	let t12;
	let h14;
	let t13;

	const block = {
		c: function create() {
			div5 = element("div");
			div0 = element("div");
			a = element("a");
			img0 = element("img");
			t0 = space();
			h10 = element("h1");
			t1 = text("Overol");
			t2 = space();
			div1 = element("div");
			img1 = element("img");
			t3 = space();
			h11 = element("h1");
			t4 = text("Chaleco");
			t5 = space();
			div2 = element("div");
			img2 = element("img");
			t6 = space();
			h12 = element("h1");
			t7 = text("Termico");
			t8 = space();
			div3 = element("div");
			img3 = element("img");
			t9 = space();
			h13 = element("h1");
			t10 = text("Overol Buso");
			t11 = space();
			div4 = element("div");
			img4 = element("img");
			t12 = space();
			h14 = element("h1");
			t13 = text("Buso Termico");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			a = claim_element(div0_nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true
			});

			var a_nodes = children(a);
			img0 = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
			a_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Overol");
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t3 = claim_space(div1_nodes);
			h11 = claim_element(div1_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t4 = claim_text(h11_nodes, "Chaleco");
			h11_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			t6 = claim_space(div2_nodes);
			h12 = claim_element(div2_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t7 = claim_text(h12_nodes, "Termico");
			h12_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t8 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img3 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			t9 = claim_space(div3_nodes);
			h13 = claim_element(div3_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t10 = claim_text(h13_nodes, "Overol Buso");
			h13_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img4 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
			t12 = claim_space(div4_nodes);
			h14 = claim_element(div4_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t13 = claim_text(h14_nodes, "Buso Termico");
			h14_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = OverolModelo)) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "Overoles Industriales");
			attr_dev(img0, "class", "svelte-1c6oa64");
			add_location(img0, file, 98, 94, 2081);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "aria-current", a_aria_current_value = /*segment*/ ctx[0] === "overol" ? "page" : undefined);
			attr_dev(a, "href", "overol");
			add_location(a, file, 98, 5, 1992);
			attr_dev(h10, "class", "svelte-1c6oa64");
			add_location(h10, file, 99, 8, 2148);
			attr_dev(div0, "class", "card svelte-1c6oa64");
			add_location(div0, file, 97, 4, 1968);
			if (img1.src !== (img1_src_value = Chaleco_modelo)) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Chaleco Industrial");
			attr_dev(img1, "class", "svelte-1c6oa64");
			add_location(img1, file, 102, 8, 2206);
			attr_dev(h11, "class", "svelte-1c6oa64");
			add_location(h11, file, 103, 8, 2268);
			attr_dev(div1, "class", "card svelte-1c6oa64");
			add_location(div1, file, 101, 4, 2179);
			if (img2.src !== (img2_src_value = TermicoModelo)) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "Termico Industrial");
			attr_dev(img2, "class", "svelte-1c6oa64");
			add_location(img2, file, 106, 8, 2327);
			attr_dev(h12, "class", "svelte-1c6oa64");
			add_location(h12, file, 107, 8, 2388);
			attr_dev(div2, "class", "card svelte-1c6oa64");
			add_location(div2, file, 105, 4, 2300);
			if (img3.src !== (img3_src_value = OverolBuso)) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "Overol Buso Industrial");
			attr_dev(img3, "class", "svelte-1c6oa64");
			add_location(img3, file, 110, 8, 2447);
			attr_dev(h13, "class", "svelte-1c6oa64");
			add_location(h13, file, 111, 8, 2509);
			attr_dev(div3, "class", "card svelte-1c6oa64");
			add_location(div3, file, 109, 4, 2420);
			if (img4.src !== (img4_src_value = BusoTermico)) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "alt", "Buso Termico Industrial");
			attr_dev(img4, "class", "svelte-1c6oa64");
			add_location(img4, file, 114, 8, 2572);
			attr_dev(h14, "class", "svelte-1c6oa64");
			add_location(h14, file, 115, 8, 2636);
			attr_dev(div4, "class", "card svelte-1c6oa64");
			add_location(div4, file, 113, 4, 2545);
			attr_dev(div5, "class", "scrolling-wrapper svelte-1c6oa64");
			add_location(div5, file, 96, 0, 1932);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			append_dev(div0, a);
			append_dev(a, img0);
			append_dev(div0, t0);
			append_dev(div0, h10);
			append_dev(h10, t1);
			append_dev(div5, t2);
			append_dev(div5, div1);
			append_dev(div1, img1);
			append_dev(div1, t3);
			append_dev(div1, h11);
			append_dev(h11, t4);
			append_dev(div5, t5);
			append_dev(div5, div2);
			append_dev(div2, img2);
			append_dev(div2, t6);
			append_dev(div2, h12);
			append_dev(h12, t7);
			append_dev(div5, t8);
			append_dev(div5, div3);
			append_dev(div3, img3);
			append_dev(div3, t9);
			append_dev(div3, h13);
			append_dev(h13, t10);
			append_dev(div5, t11);
			append_dev(div5, div4);
			append_dev(div4, img4);
			append_dev(div4, t12);
			append_dev(div4, h14);
			append_dev(h14, t13);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segment*/ 1 && a_aria_current_value !== (a_aria_current_value = /*segment*/ ctx[0] === "overol" ? "page" : undefined)) {
				attr_dev(a, "aria-current", a_aria_current_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
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
	validate_slots("Disenos_personalizables", slots, []);
	let { segment } = $$props;
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Disenos_personalizables> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => ({
		BusoTermico,
		Chaleco_modelo,
		OverolBuso,
		OverolModelo,
		TermicoModelo,
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

class Disenos_personalizables extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Disenos_personalizables",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console.warn("<Disenos_personalizables> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Disenos_personalizables>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Disenos_personalizables>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Disenos_personalizables as D };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzZW5vc19wZXJzb25hbGl6YWJsZXMuNDJjN2YzZmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rpc2Vub3NfcGVyc29uYWxpemFibGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQ+XG5pbXBvcnQgQnVzb1Rlcm1pY28gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL2J1em9fdGVybWljby5wbmcnO1xuaW1wb3J0IENoYWxlY29fbW9kZWxvIGZyb20gJ2ltYWdlcy9tb2RlbG9zX292ZXJvbC9jaGFsZWNvX21vZGVsby5wbmcnO1xuaW1wb3J0IE92ZXJvbEJ1c28gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL292ZXJvQnVzb19tb2RlbG8ucG5nJztcbmltcG9ydCBPdmVyb2xNb2RlbG8gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL292ZXJvbF9tb2RlbG8ucG5nJztcbmltcG9ydCBUZXJtaWNvTW9kZWxvIGZyb20gJ2ltYWdlcy9tb2RlbG9zX292ZXJvbC90ZXJtaWNvX21vZGVsby5wbmcnO1xuZXhwb3J0IGxldCBzZWdtZW50O1xuICAgIFxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlPlxuICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXR1YStPbmUmZGlzcGxheT1zd2FwJyk7XG5cdC5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuICAuY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICB9XG4gIC5jYXJkIGltZ3tcbiAgICB3aWR0aDogMTk1cHg7XG4gICAgaGVpZ2h0OiAxOTVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB9XG4gIC5jYXJkIGltZzpob3ZlcntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuY2FyZCBoMXtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMnB4KXtcbiAgLmNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICB9XG4gIC5jYXJkIGltZ3tcbiAgICB3aWR0aDogMjI1cHg7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB9XG4gIC5jYXJkIGltZzpob3ZlcntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuY2FyZCBoMXtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cdH1cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYxcHgpe1xuICAgIC5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXk6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuXHRcdH1cbiAgLmNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgfVxuICAuY2FyZCBpbWd7XG4gICAgd2lkdGg6IDI5NXB4O1xuICAgIGhlaWdodDogMjk1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgfVxuICAuY2FyZCBpbWc6aG92ZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLmNhcmQgaDF7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXHR9ICBcbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJzY3JvbGxpbmctd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgIDxhIHJlbD1wcmVmZXRjaCBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ292ZXJvbCcgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cIm92ZXJvbFwiPjxpbWcgc3JjPVwie092ZXJvbE1vZGVsb31cIiBhbHQ9XCJPdmVyb2xlcyBJbmR1c3RyaWFsZXNcIj48L2E+XG4gICAgICAgIDxoMT5PdmVyb2w8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwie0NoYWxlY29fbW9kZWxvfVwiIGFsdD1cIkNoYWxlY28gSW5kdXN0cmlhbFwiPlxuICAgICAgICA8aDE+Q2hhbGVjbzwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCJ7VGVybWljb01vZGVsb31cIiBhbHQ9XCJUZXJtaWNvIEluZHVzdHJpYWxcIj5cbiAgICAgICAgPGgxPlRlcm1pY288L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwie092ZXJvbEJ1c299XCIgYWx0PVwiT3Zlcm9sIEJ1c28gSW5kdXN0cmlhbFwiPlxuICAgICAgICA8aDE+T3Zlcm9sIEJ1c288L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwie0J1c29UZXJtaWNvfVwiIGFsdD1cIkJ1c28gVGVybWljbyBJbmR1c3RyaWFsXCI+XG4gICAgICAgIDxoMT5CdXNvIFRlcm1pY288L2gxPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FrR3lHLFlBQVk7Ozs7O2tFQUFqRixHQUFPLFFBQUssUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7O3NDQUkxRCxjQUFjOzs7Ozs7OztzQ0FJZCxhQUFhOzs7Ozs7OztzQ0FJYixVQUFVOzs7Ozs7OztzQ0FJVixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkZBaEJNLEdBQU8sUUFBSyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EzRmxFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
