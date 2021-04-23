import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, g as claim_element, h as children, j as claim_text, b as detach_dev, f as claim_space, m as add_location, l as attr_dev, n as insert_dev, o as append_dev, B as noop, A as listen_dev } from './client.a6e6b661.js';

/* src/routes/overol/editar_overol.svelte generated by Svelte v3.37.0 */

const file = "src/routes/overol/editar_overol.svelte";

// (98:3) {:else}
function create_else_block(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Pantalla completa");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Pantalla completa");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 98, 3, 2395);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*pantallaCompleta*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(98:3) {:else}",
		ctx
	});

	return block;
}

// (96:3) {#if pantalla}
function create_if_block(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file, 96, 3, 2369);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(96:3) {#if pantalla}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let h1;
	let t0;
	let t1;
	let t2;
	let div0;
	let canvas;
	let t3;
	let div1;

	function select_block_type(ctx, dirty) {
		if (/*pantalla*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			h1 = element("h1");
			t0 = text("CONFIGURA");
			t1 = space();
			if_block.c();
			t2 = space();
			div0 = element("div");
			canvas = element("canvas");
			t3 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, id: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "CONFIGURA");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			if_block.l(div2_nodes);
			t2 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true, id: true });
			var div0_nodes = children(div0);
			canvas = claim_element(div0_nodes, "CANVAS", { class: true });
			children(canvas).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 94, 3, 2329);
			attr_dev(canvas, "class", "svelte-17gszpz");
			add_location(canvas, file, 104, 3, 2526);
			attr_dev(div0, "class", "canva svelte-17gszpz");
			attr_dev(div0, "id", "canva");
			add_location(div0, file, 103, 3, 2492);
			attr_dev(div1, "class", "configurar");
			add_location(div1, file, 108, 2, 2584);
			attr_dev(div2, "class", "contenedor svelte-17gszpz");
			attr_dev(div2, "id", "container");
			add_location(div2, file, 92, 0, 2255);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, h1);
			append_dev(h1, t0);
			append_dev(div2, t1);
			if_block.m(div2, null);
			append_dev(div2, t2);
			append_dev(div2, div0);
			append_dev(div0, canvas);
			append_dev(div2, t3);
			append_dev(div2, div1);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div2, t2);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if_block.d();
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
	validate_slots("Editar_overol", slots, []);
	var element;
	var pantalla = false;

	let pantallaCompleta = () => {
		if (pantalla) {
			$$invalidate(0, pantalla = false);
		} else {
			element = document.querySelector("#container");
			element.requestFullscreen().then($$invalidate(0, pantalla = true));
		}
	};

	var width = 333;
	var height = 333;

	function drawImage(imageObj) {
		var stage = new Konva.Stage({ container: "canva", width, height });
		var layer = new Konva.Layer();

		// darth vader
		var darthVaderImg = new Konva.Image({
				image: imageObj,
				x: stage.width() / 2 - 400 / 2,
				y: stage.height() / 2 - 397 / 2,
				//tamanio de imagen
				width: 400,
				height: 337,
				//tamanio de imagen //
				draggable: true
			});

		// add cursor styling
		darthVaderImg.on("mouseover", function () {
			document.body.style.cursor = "pointer";
		});

		darthVaderImg.on("mouseout", function () {
			document.body.style.cursor = "default";
		});

		layer.add(darthVaderImg);
		stage.add(layer);
	}

	var imageObj = new Image();

	imageObj.onload = function () {
		drawImage(this);
	};

	imageObj.src = "https://o.remove.bg/downloads/30f17593-7f1d-4f55-9f10-34e0e1c6c213/png-transparent-jeans-denim-pocket-clothing-pants-jeans-zipper-fashion-trousers-removebg-preview.png";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Editar_overol> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		element,
		pantalla,
		pantallaCompleta,
		width,
		height,
		drawImage,
		imageObj
	});

	$$self.$inject_state = $$props => {
		if ("element" in $$props) element = $$props.element;
		if ("pantalla" in $$props) $$invalidate(0, pantalla = $$props.pantalla);
		if ("pantallaCompleta" in $$props) $$invalidate(1, pantallaCompleta = $$props.pantallaCompleta);
		if ("width" in $$props) width = $$props.width;
		if ("height" in $$props) height = $$props.height;
		if ("imageObj" in $$props) imageObj = $$props.imageObj;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [pantalla, pantallaCompleta];
}

class Editar_overol extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Editar_overol",
			options,
			id: create_fragment.name
		});
	}
}

export default Editar_overol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFyX292ZXJvbC43YzA5MTRkMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9vdmVyb2wvZWRpdGFyX292ZXJvbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBcbnZhciBlbGVtZW50O1xudmFyIHBhbnRhbGxhID0gZmFsc2U7XG5sZXQgcGFudGFsbGFDb21wbGV0YT0gICgpPT57XG5cbmlmIChwYW50YWxsYSkge1xuICAgcGFudGFsbGE9ZmFsc2U7XG59IGVsc2Uge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCkudGhlbihwYW50YWxsYT10cnVlKTtcbiB9XG5cblxufVxuXG5cbiAgICAgIHZhciB3aWR0aCA9IDMzMztcbiAgICAgIHZhciBoZWlnaHQgPSAzMzM7XG5cbiAgICAgIGZ1bmN0aW9uIGRyYXdJbWFnZShpbWFnZU9iaikge1xuICAgICAgICB2YXIgc3RhZ2UgPSBuZXcgS29udmEuU3RhZ2Uoe1xuICAgICAgICAgIGNvbnRhaW5lcjogJ2NhbnZhJyxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBsYXllciA9IG5ldyBLb252YS5MYXllcigpO1xuICAgICAgICAvLyBkYXJ0aCB2YWRlclxuICAgICAgICB2YXIgZGFydGhWYWRlckltZyA9IG5ldyBLb252YS5JbWFnZSh7XG4gICAgICAgICAgaW1hZ2U6IGltYWdlT2JqLFxuICAgICAgICAgIHg6IHN0YWdlLndpZHRoKCkgLyAyIC0gNDAwIC8gMixcbiAgICAgICAgICB5OiBzdGFnZS5oZWlnaHQoKSAvIDIgLSAzOTcgLyAyLFxuXG5cbiAgICAgICAgICAvL3RhbWFuaW8gZGUgaW1hZ2VuXG4gICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICBoZWlnaHQ6IDMzNyxcbiAgICAgICAgICAvL3RhbWFuaW8gZGUgaW1hZ2VuIC8vXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgY3Vyc29yIHN0eWxpbmdcbiAgICAgICAgZGFydGhWYWRlckltZy5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9KTtcbiAgICAgICAgZGFydGhWYWRlckltZy5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxheWVyLmFkZChkYXJ0aFZhZGVySW1nKTtcbiAgICAgICAgc3RhZ2UuYWRkKGxheWVyKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkcmF3SW1hZ2UodGhpcyk7XG4gICAgICB9O1xuICAgICAgaW1hZ2VPYmouc3JjID0gJ2h0dHBzOi8vby5yZW1vdmUuYmcvZG93bmxvYWRzLzMwZjE3NTkzLTdmMWQtNGY1NS05ZjEwLTM0ZTBlMWM2YzIxMy9wbmctdHJhbnNwYXJlbnQtamVhbnMtZGVuaW0tcG9ja2V0LWNsb3RoaW5nLXBhbnRzLWplYW5zLXppcHBlci1mYXNoaW9uLXRyb3VzZXJzLXJlbW92ZWJnLXByZXZpZXcucG5nJztcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXR1YStPbmUmZGlzcGxheT1zd2FwJyk7XG4uY29udGVuZWRvcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNvbnRlbmVkb3IgLmNhbnZhe1xuXHRiYWNrZ3JvdW5kOnVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYnJpaW1heC5hcHBzcG90LmNvbS9vL292ZXJvbC1yZW1vdmViZy1wcmV2aWV3LnBuZz9hbHQ9bWVkaWEmdG9rZW49ZTVhODdlMzgtM2I0Zi00ZTA1LWEyM2UtMWVkZDFkYjdjMDAzXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuIFxuIC8qIG5vcyBhc2VndXJhbW9zIHF1ZSBlbCBlbGVtZW50byBvY3VwZSB0b2RhIGxhIHZlbnRhbmEgZGVsIG5hdmVnYWRvciAqL1xuXG5cbiAvKiBQcm9waWVkYWQgYSB1dGlsaXphciBwYXJhIGxhIGltYWdlbiAqL1xuIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB6LWluZGV4OiAzO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG4uY29udGVuZWRvciAuY2FudmEgY2FudmFze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTB2aDtcbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW5lZG9yXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICA8IS0tIEJvdG9uIEZ1bGwgU2NyZWVuIC0tPlxuICAgPGgxPkNPTkZJR1VSQTwvaDE+XG4gICB7I2lmIHBhbnRhbGxhfVxuICAgPGRpdj48L2Rpdj5cbiAgIHs6ZWxzZX1cbiAgIDxidXR0b24gb246Y2xpY2s9XCJ7cGFudGFsbGFDb21wbGV0YX1cIj5QYW50YWxsYSBjb21wbGV0YTwvYnV0dG9uPlxuICAgey9pZn1cblxuXG4gICA8IS0tIENhbnZhIC0tPlxuICAgPGRpdiBjbGFzcz1cImNhbnZhXCIgaWQ9XCJjYW52YVwiPlxuICAgPGNhbnZhcz48L2NhbnZhcz5cbiAgIDwvZGl2PlxuXG4gICAgPCEtLSBDb25maWd1cmFjaW9uIC0tPlxuICA8ZGl2IGNsYXNzPVwiY29uZmlndXJhclwiPlxuXG4gIDwvZGl2PlxuXG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFrR3NCLEdBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBSDlCLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E3RlosT0FBTztLQUNQLFFBQVEsR0FBRyxLQUFLOztLQUNoQixnQkFBZ0I7TUFFaEIsUUFBUTttQkFDVCxRQUFRLEdBQUMsS0FBSzs7R0FFYixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZO0dBQzlDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFDLFFBQVEsR0FBQyxJQUFJOzs7O0tBT3ZDLEtBQUssR0FBRyxHQUFHO0tBQ1gsTUFBTSxHQUFHLEdBQUc7O1VBRVAsU0FBUyxDQUFDLFFBQVE7TUFDckIsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFLLEdBQ3pCLFNBQVMsRUFBRSxPQUFPLEVBQ1gsS0FBSyxFQUNKLE1BQU07TUFHWixLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQUs7OztNQUV2QixhQUFhLE9BQU8sS0FBSyxDQUFDLEtBQUs7SUFDakMsS0FBSyxFQUFFLFFBQVE7SUFDZixDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDOUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztJQUkvQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHOztJQUVYLFNBQVMsRUFBRSxJQUFJOzs7O0VBSWpCLGFBQWEsQ0FBQyxFQUFFLENBQUMsV0FBVztHQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUzs7O0VBRXhDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVTtHQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUzs7O0VBR3hDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYTtFQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7OztLQUViLFFBQVEsT0FBTyxLQUFLOztDQUN4QixRQUFRLENBQUMsTUFBTTtFQUNiLFNBQVMsQ0FBQyxJQUFJOzs7Q0FFaEIsUUFBUSxDQUFDLEdBQUcsR0FBRyx5S0FBeUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
