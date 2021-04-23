import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, g as claim_element, h as children, j as claim_text, b as detach_dev, f as claim_space, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, B as noop } from './client.3db64b10.js';

var BusoTermico = "/client/f8f3177e0c9c3cfe.png";

var Chaleco_modelo = "/client/c3cd4c6ed0f8a668.png";

var OverolBuso = "/client/346e8f1b421131f6.png";

var OverolModelo = "/client/4e5dfbc7d022b020.png";

var TermicoModelo = "/client/028037d205b612c2.png";

/* src/components/overoles.svelte generated by Svelte v3.37.0 */
const file = "src/components/overoles.svelte";

function create_fragment(ctx) {
	let div0;
	let h1;
	let t0;
	let t1;
	let div6;
	let div1;
	let img0;
	let img0_src_value;
	let t2;
	let div2;
	let img1;
	let img1_src_value;
	let t3;
	let div3;
	let img2;
	let img2_src_value;
	let t4;
	let div4;
	let img3;
	let img3_src_value;
	let t5;
	let div5;
	let img4;
	let img4_src_value;

	const block = {
		c: function create() {
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Modelos Diseñados");
			t1 = space();
			div6 = element("div");
			div1 = element("div");
			img0 = element("img");
			t2 = space();
			div2 = element("div");
			img1 = element("img");
			t3 = space();
			div3 = element("div");
			img2 = element("img");
			t4 = space();
			div4 = element("div");
			img3 = element("img");
			t5 = space();
			div5 = element("div");
			img4 = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Modelos Diseñados");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div1 = claim_element(div6_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div6_nodes);
			div2 = claim_element(div6_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img1 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div6_nodes);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img2 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img3 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			img4 = claim_element(div5_nodes, "IMG", { src: true, alt: true, class: true });
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1xuu7x6");
			add_location(h1, file, 89, 22, 2055);
			attr_dev(div0, "class", "text");
			add_location(div0, file, 89, 3, 2036);
			if (img0.src !== (img0_src_value = OverolModelo)) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "Overoles Industriales");
			attr_dev(img0, "class", "svelte-1xuu7x6");
			add_location(img0, file, 93, 12, 2169);
			attr_dev(div1, "class", "card svelte-1xuu7x6");
			add_location(div1, file, 92, 8, 2138);
			if (img1.src !== (img1_src_value = Chaleco_modelo)) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Chaleco Industrial");
			attr_dev(img1, "class", "svelte-1xuu7x6");
			add_location(img1, file, 97, 12, 2290);
			attr_dev(div2, "class", "card svelte-1xuu7x6");
			add_location(div2, file, 96, 8, 2259);
			if (img2.src !== (img2_src_value = TermicoModelo)) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "Termico Industrial");
			attr_dev(img2, "class", "svelte-1xuu7x6");
			add_location(img2, file, 101, 12, 2409);
			attr_dev(div3, "class", "card svelte-1xuu7x6");
			add_location(div3, file, 100, 8, 2378);
			if (img3.src !== (img3_src_value = OverolBuso)) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "Overol Buso Industrial");
			attr_dev(img3, "class", "svelte-1xuu7x6");
			add_location(img3, file, 105, 12, 2529);
			attr_dev(div4, "class", "card svelte-1xuu7x6");
			add_location(div4, file, 104, 8, 2498);
			if (img4.src !== (img4_src_value = BusoTermico)) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "alt", "Buso Termico Industrial");
			attr_dev(img4, "class", "svelte-1xuu7x6");
			add_location(img4, file, 109, 12, 2647);
			attr_dev(div5, "class", "card svelte-1xuu7x6");
			add_location(div5, file, 108, 8, 2616);
			attr_dev(div6, "class", "scrolling-wrapper svelte-1xuu7x6");
			add_location(div6, file, 90, 4, 2092);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, h1);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, div1);
			append_dev(div1, img0);
			append_dev(div6, t2);
			append_dev(div6, div2);
			append_dev(div2, img1);
			append_dev(div6, t3);
			append_dev(div6, div3);
			append_dev(div3, img2);
			append_dev(div6, t4);
			append_dev(div6, div4);
			append_dev(div4, img3);
			append_dev(div6, t5);
			append_dev(div6, div5);
			append_dev(div5, img4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div6);
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
	validate_slots("Overoles", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Overoles> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		BusoTermico,
		Chaleco_modelo,
		OverolBuso,
		OverolModelo,
		TermicoModelo
	});

	return [];
}

class Overoles extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Overoles",
			options,
			id: create_fragment.name
		});
	}
}

export { BusoTermico as B, Chaleco_modelo as C, Overoles as O, TermicoModelo as T, OverolBuso as a, OverolModelo as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Zlcm9sZXMuYzllMjI5NWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL2J1em9fdGVybWljby5wbmciLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL2ltYWdlcy9tb2RlbG9zX292ZXJvbC9jaGFsZWNvX21vZGVsby5wbmciLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL2ltYWdlcy9tb2RlbG9zX292ZXJvbC9vdmVyb0J1c29fbW9kZWxvLnBuZyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL292ZXJvbF9tb2RlbG8ucG5nIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9pbWFnZXMvbW9kZWxvc19vdmVyb2wvdGVybWljb19tb2RlbG8ucG5nIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb3Zlcm9sZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC9mOGYzMTc3ZTBjOWMzY2ZlLnBuZ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCIvY2xpZW50L2MzY2Q0YzZlZDBmOGE2NjgucG5nXCIiLCJleHBvcnQgZGVmYXVsdCBcIi9jbGllbnQvMzQ2ZThmMWI0MjExMzFmNi5wbmdcIiIsImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC80ZTVkZmJjN2QwMjJiMDIwLnBuZ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCIvY2xpZW50LzAyODAzN2QyMDViNjEyYzIucG5nXCIiLCJcbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEJ1c29UZXJtaWNvIGZyb20gJ2ltYWdlcy9tb2RlbG9zX292ZXJvbC9idXpvX3Rlcm1pY28ucG5nJztcbiAgICBpbXBvcnQgQ2hhbGVjb19tb2RlbG8gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL2NoYWxlY29fbW9kZWxvLnBuZyc7XG4gICAgaW1wb3J0IE92ZXJvbEJ1c28gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL292ZXJvQnVzb19tb2RlbG8ucG5nJztcbiAgICBpbXBvcnQgT3Zlcm9sTW9kZWxvIGZyb20gJ2ltYWdlcy9tb2RlbG9zX292ZXJvbC9vdmVyb2xfbW9kZWxvLnBuZyc7XG4gICAgaW1wb3J0IFRlcm1pY29Nb2RlbG8gZnJvbSAnaW1hZ2VzL21vZGVsb3Nfb3Zlcm9sL3Rlcm1pY29fbW9kZWxvLnBuZyc7XG4gICAgXG4gICAgICAgIFxuICAgIDwvc2NyaXB0PlxuICAgIFxuICAgIFxuICAgIDxzdHlsZT5cbiAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdHVhK09uZSZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTozMDBtcyA7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAuY2FyZCBpbWd7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgaW1nOmhvdmVye1xuICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICB9XG5cbiAgICAgIGgxe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIFxuXG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMzNweCl7XG4gICAgICAgIC5jYXJkIGltZ3tcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cdH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYxcHgpe1xuICAgIC5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXk6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuXHRcdH1cbiAgLmNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgfVxuICAuY2FyZCBpbWd7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogMjc1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgfVxuICAuY2FyZCBpbWc6aG92ZXJ7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gIH1cblxuXHR9XG4gICAgPC9zdHlsZT5cbiAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+IDxoMT5Nb2RlbG9zIERpc2XDsWFkb3M8L2gxPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxpbmctd3JhcHBlclwiPlxuICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwie092ZXJvbE1vZGVsb31cIiBhbHQ9XCJPdmVyb2xlcyBJbmR1c3RyaWFsZXNcIj5cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ7Q2hhbGVjb19tb2RlbG99XCIgYWx0PVwiQ2hhbGVjbyBJbmR1c3RyaWFsXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ7VGVybWljb01vZGVsb31cIiBhbHQ9XCJUZXJtaWNvIEluZHVzdHJpYWxcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwie092ZXJvbEJ1c299XCIgYWx0PVwiT3Zlcm9sIEJ1c28gSW5kdXN0cmlhbFwiPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ7QnVzb1Rlcm1pY299XCIgYWx0PVwiQnVzbyBUZXJtaWNvIEluZHVzdHJpYWxcIj5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTs7QUNBZixxQkFBZTs7QUNBZixpQkFBZTs7QUNBZixtQkFBZTs7QUNBZixvQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0M2RlEsWUFBWTs7Ozs7O3NDQUlaLGNBQWM7Ozs7OztzQ0FJZCxhQUFhOzs7Ozs7c0NBSWIsVUFBVTs7Ozs7O3NDQUlWLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
