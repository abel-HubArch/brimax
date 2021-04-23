import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as add_render_callback, v as validate_slots, J as globals, a as space, e as element, c as create_component, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_element, h as children, k as claim_component, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, p as mount_component, A as listen_dev, u as transition_out, F as check_outros, r as transition_in, w as destroy_component, E as group_outros, t as text, j as claim_text, H as create_bidirectional_transition } from './client.8f2fe31e.js';
import { O as Overoles } from './overoles.4ea097e7.js';
import { D as Disenos_personalizables } from './disenos_personalizables.3274501b.js';
import { s as slide } from './index.fcdc68d1.js';
import { L as Logo } from './logo.78236507.js';
import './letras_briimax.c1085f76.js';

/* src/routes/about.svelte generated by Svelte v3.37.0 */

const { console: console_1 } = globals;
const file = "src/routes/about.svelte";

// (99:1) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let hr;
	let t2;
	let h4;
	let t3;
	let div1_transition;
	let current;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Hecho a Tu Estilo");
			t1 = space();
			hr = element("hr");
			t2 = space();
			h4 = element("h4");
			t3 = text("ROPA INDUSTRIAL BRIIMAX");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Hecho a Tu Estilo");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			t2 = claim_space(div0_nodes);
			h4 = claim_element(div0_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t3 = claim_text(h4_nodes, "ROPA INDUSTRIAL BRIIMAX");
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1kujnz1");
			add_location(h1, file, 102, 3, 1999);
			attr_dev(hr, "class", "svelte-1kujnz1");
			add_location(hr, file, 102, 30, 2026);
			attr_dev(h4, "class", "svelte-1kujnz1");
			add_location(h4, file, 103, 3, 2034);
			attr_dev(div0, "class", "text-welcome animate__animated animate__fadeIn  svelte-1kujnz1");
			add_location(div0, file, 101, 3, 1934);
			attr_dev(div1, "class", "menu svelte-1kujnz1");
			attr_dev(div1, "id", "menu");
			add_location(div1, file, 100, 5, 1885);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, hr);
			append_dev(div0, t2);
			append_dev(div0, h4);
			append_dev(h4, t3);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, slide, {}, true);
				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(div1, slide, {}, false);
			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching && div1_transition) div1_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(99:1) {:else}",
		ctx
	});

	return block;
}

// (93:3) {#if y >= 20}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let hr;
	let div1_transition;
	let current;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Selecciona los modelos que necesites");
			t1 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Selecciona los modelos que necesites");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1kujnz1");
			add_location(h1, file, 95, 1, 1778);
			attr_dev(hr, "class", "svelte-1kujnz1");
			add_location(hr, file, 95, 47, 1824);
			attr_dev(div0, "class", "text_welcome2 svelte-1kujnz1");
			add_location(div0, file, 94, 1, 1749);
			attr_dev(div1, "class", "menu svelte-1kujnz1");
			attr_dev(div1, "id", "menu");
			add_location(div1, file, 93, 3, 1702);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, hr);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, slide, {}, true);
				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(div1, slide, {}, false);
			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching && div1_transition) div1_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(93:3) {#if y >= 20}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let scrolling = false;

	let clear_scrolling = () => {
		scrolling = false;
	};

	let scrolling_timeout;
	let t0;
	let div1;
	let div0;
	let logo;
	let t1;
	let current_block_type_index;
	let if_block;
	let t2;
	let disenospersonalizables;
	let t3;
	let overoles;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowscroll*/ ctx[1]);
	logo = new Logo({ $$inline: true });
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*y*/ ctx[0] >= 20) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	disenospersonalizables = new Disenos_personalizables({ $$inline: true });
	overoles = new Overoles({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			create_component(logo.$$.fragment);
			t1 = space();
			if_block.c();
			t2 = space();
			create_component(disenospersonalizables.$$.fragment);
			t3 = space();
			create_component(overoles.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8a4vpn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(logo.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			if_block.l(div1_nodes);
			t2 = claim_space(div1_nodes);
			claim_component(disenospersonalizables.$$.fragment, div1_nodes);
			t3 = claim_space(div1_nodes);
			claim_component(overoles.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Hecho a Tu Medida";
			attr_dev(div0, "class", "logo animate__animated animate__fadeIn svelte-1kujnz1");
			add_location(div0, file, 86, 2, 1601);
			attr_dev(div1, "class", "contenedor svelte-1kujnz1");
			attr_dev(div1, "id", "contenedor");
			add_location(div1, file, 84, 0, 1557);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			mount_component(logo, div0, null);
			append_dev(div1, t1);
			if_blocks[current_block_type_index].m(div1, null);
			append_dev(div1, t2);
			mount_component(disenospersonalizables, div1, null);
			append_dev(div1, t3);
			mount_component(overoles, div1, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(window, "scroll", () => {
					scrolling = true;
					clearTimeout(scrolling_timeout);
					scrolling_timeout = setTimeout(clear_scrolling, 100);
					/*onwindowscroll*/ ctx[1]();
				});

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*y*/ 1 && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(window.pageXOffset, /*y*/ ctx[0]);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index !== previous_block_index) {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(div1, t2);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);
			transition_in(if_block);
			transition_in(disenospersonalizables.$$.fragment, local);
			transition_in(overoles.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			transition_out(if_block);
			transition_out(disenospersonalizables.$$.fragment, local);
			transition_out(overoles.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_component(logo);
			if_blocks[current_block_type_index].d();
			destroy_component(disenospersonalizables);
			destroy_component(overoles);
			mounted = false;
			dispose();
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
	validate_slots("About", slots, []);
	let y;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<About> was created with unknown prop '${key}'`);
	});

	function onwindowscroll() {
		$$invalidate(0, y = window.pageYOffset);
	}

	$$self.$capture_state = () => ({
		Overoles,
		DisenosPersonalizables: Disenos_personalizables,
		slide,
		Logo,
		y
	});

	$$self.$inject_state = $$props => {
		if ("y" in $$props) $$invalidate(0, y = $$props.y);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*y*/ 1) {
			console.log(y);
		}
	};

	return [y, onwindowscroll];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYjk1MjA5NjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBPdmVyb2xlcyBmcm9tICcuLy4uL2NvbXBvbmVudHMvb3Zlcm9sZXMuc3ZlbHRlJztcblx0aW1wb3J0IERpc2Vub3NQZXJzb25hbGl6YWJsZXMgZnJvbSAnLi8uLi9jb21wb25lbnRzL2Rpc2Vub3NfcGVyc29uYWxpemFibGVzLnN2ZWx0ZSc7XG5pbXBvcnQge3NsaWRlfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cblxuXG5pbXBvcnQgTG9nbyBmcm9tICcuLy4uL2NvbXBvbmVudHMvbG9nby5zdmVsdGUnO1xuXG5sZXQgeTtcbiQ6IGNvbnNvbGUubG9nKHkpO1xuXG5cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5IZWNobyBhIFR1IE1lZGlkYTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHN0eWxlPlxuXHQuY29udGVuZWRvcntcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXG5cdFx0YmFja2dyb3VuZDp1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2JyaWltYXguYXBwc3BvdC5jb20vby9hdHVtZWRpZGEucG5nP2FsdD1tZWRpYSZ0b2tlbj1hZTU0ZmJjYS1iOGU0LTQ2ZjMtOWM3NS04ZDhlNjgwNTNkNjlcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gXG4gLyogbm9zIGFzZWd1cmFtb3MgcXVlIGVsIGVsZW1lbnRvIG9jdXBlIHRvZGEgbGEgdmVudGFuYSBkZWwgbmF2ZWdhZG9yICovXG4gbWluLWhlaWdodDoxMDAlO1xuXG4gLyogUHJvcGllZGFkIGEgdXRpbGl6YXIgcGFyYSBsYSBpbWFnZW4gKi9cbiBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5cdH1cblx0LmNvbnRlbmVkb3IgLmxvZ297XHRcblx0XHRtYXJnaW46IGF1dG87XG5cdH1cblx0Lm1lbnV7XG5cdFx0bWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWV7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiA0JTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoMXtcbiAgICAgZm9udC1zaXplOiAxMXZ3O1xuXHQgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuXHR9XG5cdC5tZW51IC50ZXh0X3dlbGNvbWUye1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNCU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cdC5tZW51IC50ZXh0X3dlbGNvbWUyIGgxe1xuICAgICBmb250LXNpemU6IDd2dztcblx0IGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcblx0fVxuXHQubWVudSAudGV4dC13ZWxjb21lIGhye1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cblx0Lm1lbnUgLnRleHQtd2VsY29tZSBoNHtcblx0XHRcblx0XHRmb250LXNpemU6IDQuNHZ3O1xuXHR9XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTMzcHgpe1xuXHRcdC5tZW51IC50ZXh0LXdlbGNvbWUgaDF7XG4gICAgIGZvbnQtc2l6ZTogNjBweDtcblxuXHR9XG5cdC5tZW51IC50ZXh0LXdlbGNvbWUgaDR7XG5cdFx0XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cdC5tZW51IC50ZXh0X3dlbGNvbWUyIGgxe1xuICAgICBmb250LXNpemU6IDQwcHg7XG5cdH1cblx0fVxuXG5cdFxuPC9zdHlsZT5cblxuPHN2ZWx0ZTp3aW5kb3cgYmluZDpzY3JvbGxZPXt5fS8+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW5lZG9yXCIgaWQ9XCJjb250ZW5lZG9yXCI+XG5cbiAgPGRpdiBjbGFzcz1cImxvZ28gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XG5cdCA8TG9nbz48L0xvZ28+XG4gIDwvZGl2PlxuXG5cblxuICAgeyNpZiB5ID49IDIwfVxuICAgPGRpdiBjbGFzcz1cIm1lbnVcIiBpZD0nbWVudScgdHJhbnNpdGlvbjpzbGlkZT5cblx0PGRpdiBjbGFzcz1cInRleHRfd2VsY29tZTJcIj5cblx0PGgxPlNlbGVjY2lvbmEgbG9zIG1vZGVsb3MgcXVlIG5lY2VzaXRlczwvaDE+IDxocj5cblx0PC9kaXY+XG48L2Rpdj5cblx0ezplbHNlfVxuXHRcdCAgIDwhLS0gY29udGVudCBoZXJlIC0tPlxuXHRcdCAgIDxkaXYgY2xhc3M9XCJtZW51XCIgaWQ9J21lbnUnIHRyYW5zaXRpb246c2xpZGU+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC13ZWxjb21lIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBcIj5cblx0XHRcdDxoMT5IZWNobyBhIFR1IEVzdGlsbzwvaDE+IDxocj5cblx0XHRcdDxoND5ST1BBIElORFVTVFJJQUwgQlJJSU1BWDwvaDQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgIHsvaWZ9XG4gICA8RGlzZW5vc1BlcnNvbmFsaXphYmxlcz48L0Rpc2Vub3NQZXJzb25hbGl6YWJsZXM+XG5cbiAgIDxPdmVyb2xlcz48L092ZXJvbGVzPlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0RlEsR0FBQyxPQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FuRlgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FDRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
