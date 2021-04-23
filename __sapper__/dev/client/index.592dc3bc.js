import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as create_component, a as space, g as claim_element, h as children, k as claim_component, f as claim_space, b as detach_dev, l as attr_dev, m as add_location, n as insert_dev, p as mount_component, o as append_dev, E as group_outros, u as transition_out, F as check_outros, r as transition_in, w as destroy_component, t as text, j as claim_text, G as add_render_callback, H as create_bidirectional_transition, I as empty } from './client.ece555a3.js';
import Editar_overol from './editar_overol.d94a3a76.js';
import { L as Logo } from './logo.96a20839.js';
import { s as slide, f as fly } from './index.fcdc68d1.js';
import './letras_briimax.c1085f76.js';

/* src/components/bienvenido.svelte generated by Svelte v3.37.0 */
const file$1 = "src/components/bienvenido.svelte";

// (46:0) {:else}
function create_else_block$1(ctx) {
	let div;
	let h1;
	let t;
	let div_transition;
	let current;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t = text("Bienvenido");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Bienvenido");
			h1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "animate__animated animate__fadeIn");
			add_location(h1, file$1, 47, 4, 919);
			attr_dev(div, "class", "text svelte-dlb6yj");
			add_location(div, file$1, 46, 0, 879);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(46:0) {:else}",
		ctx
	});

	return block;
}

// (40:0) {#if hola}
function create_if_block$1(ctx) {
	let div;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let div_transition;
	let current;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text("Crea tu Modelo");
			t1 = space();
			p = element("p");
			t2 = text("Cargando...");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Crea tu Modelo");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Cargando...");
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 41, 4, 814);
			attr_dev(p, "class", "svelte-dlb6yj");
			add_location(p, file$1, 42, 4, 842);
			attr_dev(div, "class", "text svelte-dlb6yj");
			add_location(div, file$1, 40, 0, 776);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(p, t2);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(40:0) {#if hola}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let logo;
	let t;
	let current_block_type_index;
	let if_block;
	let current;
	logo = new Logo({ $$inline: true });
	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*hola*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			div = element("div");
			create_component(logo.$$.fragment);
			t = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(logo.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "contenedor svelte-dlb6yj");
			add_location(div, file$1, 36, 0, 725);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(logo, div, null);
			append_dev(div, t);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
				if_block.m(div, null);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(logo);
			if_blocks[current_block_type_index].d();
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
	validate_slots("Bienvenido", slots, []);
	var hola = false;

	setInterval(
		function () {
			$$invalidate(0, hola = true);
		},
		2000
	);

	if (hola) {
		setInterval(
			function () {
				$$invalidate(0, hola = 2);
			},
			2000
		);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Bienvenido> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Logo, slide, fly, hola });

	$$self.$inject_state = $$props => {
		if ("hola" in $$props) $$invalidate(0, hola = $$props.hola);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [hola];
}

class Bienvenido extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Bienvenido",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/overol/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/overol/index.svelte";

// (15:0) {:else}
function create_else_block(ctx) {
	let div;
	let bienvenido;
	let div_transition;
	let current;
	bienvenido = new Bienvenido({ $$inline: true });

	const block = {
		c: function create() {
			div = element("div");
			create_component(bienvenido.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(bienvenido.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "welcome");
			add_location(div, file, 15, 0, 327);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(bienvenido, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(bienvenido.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(bienvenido.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(bienvenido);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(15:0) {:else}",
		ctx
	});

	return block;
}

// (13:0) {#if pagina}
function create_if_block(ctx) {
	let editaroverol;
	let current;
	editaroverol = new Editar_overol({ $$inline: true });

	const block = {
		c: function create() {
			create_component(editaroverol.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(editaroverol.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(editaroverol, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(editaroverol.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(editaroverol.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(editaroverol, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(13:0) {#if pagina}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*pagina*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots("Overol", slots, []);
	var pagina = false;

	setInterval(
		function () {
			$$invalidate(0, pagina = true);
		},
		3000
	);

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Overol> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ EditarOverol: Editar_overol, Bienvenido, slide, pagina });

	$$self.$inject_state = $$props => {
		if ("pagina" in $$props) $$invalidate(0, pagina = $$props.pagina);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [pagina];
}

class Overol extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Overol",
			options,
			id: create_fragment.name
		});
	}
}

export default Overol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTkyZGMzYmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JpZW52ZW5pZG8uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9vdmVyb2wvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBMb2dvIGZyb20gJy4vbG9nby5zdmVsdGUnO1xuICAgIGltcG9ydCB7c2xpZGUsIGZseX0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIHZhciBob2xhID0gZmFsc2U7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgaG9sYSA9IHRydWUgfSwgMjAwMCk7XG4gICAgaWYoaG9sYSl7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7IGhvbGEgPSAyIH0sIDIwMDApO1xuICAgIH1cbiAgICBcbiAgIFxuXG5cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXR1YStPbmUmZGlzcGxheT1zd2FwJyk7XG4uY29udGVuZWRvcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XG59XG4uY29udGVuZWRvciAudGV4dHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbm1hcmdpbi10b3A6IDQwdmg7XG5mb250LXNpemU6IDZ2dztcbn1cbi5jb250ZW5lZG9yIC50ZXh0IHB7XG5mb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQ3cHgpe1xuICAgIC5jb250ZW5lZG9yIC50ZXh0e1xuZm9udC1zaXplOiAzMHB4O1xufVxufVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250ZW5lZG9yXCI+XG48TG9nbz48L0xvZ28+XG5cbnsjaWYgaG9sYX1cbjxkaXYgY2xhc3M9XCJ0ZXh0XCIgdHJhbnNpdGlvbjpmbHk+XG4gICAgPGgxPkNyZWEgdHUgTW9kZWxvPC9oMT5cbiAgICA8cD5DYXJnYW5kby4uLjwvcD5cbiA8L2Rpdj5cbiBcbns6ZWxzZX1cbjxkaXYgY2xhc3M9XCJ0ZXh0XCIgdHJhbnNpdGlvbjpzbGlkZT5cbiAgICA8aDEgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIj5CaWVudmVuaWRvPC9oMT5cbiA8L2Rpdj5cblxuey9pZn1cblxuICAgIFxuPC9kaXY+IiwiPHNjcmlwdD5cblx0aW1wb3J0IEVkaXRhck92ZXJvbCBmcm9tICcuL2VkaXRhcl9vdmVyb2wuc3ZlbHRlJztcblx0aW1wb3J0IEJpZW52ZW5pZG8gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2JpZW52ZW5pZG8uc3ZlbHRlJztcbiAgICBpbXBvcnQge3NsaWRlfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgdmFyIHBhZ2luYSA9IGZhbHNlO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7IHBhZ2luYSA9IHRydWUgfSwgMzAwMCk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG5cbjwvc3R5bGU+XG57I2lmIHBhZ2luYX1cbjxFZGl0YXJPdmVyb2w+PC9FZGl0YXJPdmVyb2w+XG57OmVsc2V9XG48ZGl2IGNsYXNzPVwid2VsY29tZVwiIHRyYW5zaXRpb246c2xpZGU+XG4gICAgPEJpZW52ZW5pZG8+PC9CaWVudmVuaWRvPlxuPC9kaXY+XG57L2lmfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXVDSyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FwQ0QsSUFBSSxHQUFHLEtBQUs7O0NBQ2hCLFdBQVc7O21CQUFhLElBQUksR0FBRyxJQUFJOztFQUFJLElBQUk7OztLQUN4QyxJQUFJO0VBQ0gsV0FBVzs7b0JBQWEsSUFBSSxHQUFHLENBQUM7O0dBQUksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ00zQyxHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUkgsTUFBTSxHQUFHLEtBQUs7O0NBQ2xCLFdBQVc7O21CQUFhLE1BQU0sR0FBRyxJQUFJOztFQUFJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
