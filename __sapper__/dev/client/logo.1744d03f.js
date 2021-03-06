import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, j as claim_element, k as children, f as detach_dev, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, E as noop } from './client.52bfd6a6.js';
import { b as briimax_letras } from './index.60a44412.js';

/* src/components/logo.svelte generated by Svelte v3.37.0 */
const file = "src/components/logo.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = briimax_letras)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Overoles Industriales");
			attr_dev(img, "class", "svelte-4w9rn1");
			add_location(img, file, 24, 8, 504);
			attr_dev(div0, "class", "centro");
			add_location(div0, file, 23, 4, 475);
			attr_dev(div1, "class", "logo svelte-4w9rn1");
			add_location(div1, file, 22, 0, 452);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	validate_slots("Logo", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Logo> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ briimax_letras });
	return [];
}

class Logo extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Logo",
			options,
			id: create_fragment.name
		});
	}
}

export { Logo as L };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby4xNzQ0ZDAzZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbG9nby5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBicmlpbWF4X2xldHJhcyAgZnJvbSAnaW1hZ2VzL2xldHJhc19icmlpbWF4LnBuZyc7XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXR1YStPbmUmZGlzcGxheT1zd2FwJyk7XG4gICAgLmxvZ297XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sb2dvIGltZ3tcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNzdweCl7XG4gICAgICAgIC5sb2dvIGltZ3tcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblx0fVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgPGRpdiBjbGFzcz1cImNlbnRyb1wiPlxuICAgICAgICA8aW1nIHNyYz1cInticmlpbWF4X2xldHJhc31cIiBhbHQ9XCJPdmVyb2xlcyBJbmR1c3RyaWFsZXNcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBd0JtQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
