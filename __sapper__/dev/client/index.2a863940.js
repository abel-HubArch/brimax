import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as create_component, a as space, t as text, g as claim_element, h as children, k as claim_component, f as claim_space, j as claim_text, b as detach_dev, m as add_location, l as attr_dev, n as insert_dev, p as mount_component, o as append_dev, B as noop, r as transition_in, u as transition_out, w as destroy_component } from './client.66e83a12.js';
import { C as Contacto } from './contacto.0e64c11b.js';
import { R as Redes_sociales } from './redes_sociales.4cb4ba7e.js';
import About from './about.a8f189ac.js';
import { L as Logo } from './logo.ed9f9c60.js';
import './overoles.601daf81.js';
import './disenos_personalizables.ab36faea.js';
import './index.fcdc68d1.js';
import './letras_briimax.c1085f76.js';

/* src/routes/blog/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/blog/index.svelte";

function create_fragment(ctx) {
	let div3;
	let logo;
	let t0;
	let div2;
	let p;
	let t1;
	let t2;
	let form;
	let label0;
	let t3;
	let br0;
	let t4;
	let input0;
	let br1;
	let t5;
	let label1;
	let t6;
	let br2;
	let t7;
	let input1;
	let br3;
	let t8;
	let label2;
	let t9;
	let br4;
	let t10;
	let input2;
	let br5;
	let t11;
	let label3;
	let t12;
	let br6;
	let t13;
	let textarea;
	let t14;
	let br7;
	let t15;
	let button;
	let t16;
	let t17;
	let h1;
	let t18;
	let t19;
	let redessociales;
	let t20;
	let div0;
	let t21;
	let script;
	let script_src_value;
	let t22;
	let div1;
	let t23;
	let br8;
	let current;
	logo = new Logo({ $$inline: true });
	redessociales = new Redes_sociales({ $$inline: true });

	const block = {
		c: function create() {
			div3 = element("div");
			create_component(logo.$$.fragment);
			t0 = space();
			div2 = element("div");
			p = element("p");
			t1 = text("No importa donde te encuentres hacemos envios a toda Bolivia");
			t2 = space();
			form = element("form");
			label0 = element("label");
			t3 = text("Nombre");
			br0 = element("br");
			t4 = space();
			input0 = element("input");
			br1 = element("br");
			t5 = space();
			label1 = element("label");
			t6 = text("Telefono");
			br2 = element("br");
			t7 = space();
			input1 = element("input");
			br3 = element("br");
			t8 = space();
			label2 = element("label");
			t9 = text("Correo Electronico");
			br4 = element("br");
			t10 = space();
			input2 = element("input");
			br5 = element("br");
			t11 = space();
			label3 = element("label");
			t12 = text("Cual es tu Pregunta?");
			br6 = element("br");
			t13 = space();
			textarea = element("textarea");
			t14 = space();
			br7 = element("br");
			t15 = space();
			button = element("button");
			t16 = text("Enviar");
			t17 = space();
			h1 = element("h1");
			t18 = text("Redes Sociales");
			t19 = space();
			create_component(redessociales.$$.fragment);
			t20 = space();
			div0 = element("div");
			t21 = space();
			script = element("script");
			t22 = space();
			div1 = element("div");
			t23 = space();
			br8 = element("br");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(logo.$$.fragment, div3_nodes);
			t0 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p = claim_element(div2_nodes, "P", {});
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, "No importa donde te encuentres hacemos envios a toda Bolivia");
			p_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			form = claim_element(div2_nodes, "FORM", { action: true, class: true, id: true });
			var form_nodes = children(form);
			label0 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t3 = claim_text(label0_nodes, "Nombre");
			label0_nodes.forEach(detach_dev);
			br0 = claim_element(form_nodes, "BR", {});
			t4 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				name: true,
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			br1 = claim_element(form_nodes, "BR", {});
			t5 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t6 = claim_text(label1_nodes, "Telefono");
			label1_nodes.forEach(detach_dev);
			br2 = claim_element(form_nodes, "BR", {});
			t7 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { type: true, required: true, class: true });
			br3 = claim_element(form_nodes, "BR", {});
			t8 = claim_space(form_nodes);
			label2 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t9 = claim_text(label2_nodes, "Correo Electronico");
			label2_nodes.forEach(detach_dev);
			br4 = claim_element(form_nodes, "BR", {});
			t10 = claim_space(form_nodes);

			input2 = claim_element(form_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			br5 = claim_element(form_nodes, "BR", {});
			t11 = claim_space(form_nodes);
			label3 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label3_nodes = children(label3);
			t12 = claim_text(label3_nodes, "Cual es tu Pregunta?");
			label3_nodes.forEach(detach_dev);
			br6 = claim_element(form_nodes, "BR", {});
			t13 = claim_space(form_nodes);

			textarea = claim_element(form_nodes, "TEXTAREA", {
				name: true,
				id: true,
				cols: true,
				rows: true,
				required: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			t14 = claim_space(form_nodes);
			br7 = claim_element(form_nodes, "BR", {});
			t15 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t16 = claim_text(button_nodes, "Enviar");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t17 = claim_space(div2_nodes);
			h1 = claim_element(div2_nodes, "H1", {});
			var h1_nodes = children(h1);
			t18 = claim_text(h1_nodes, "Redes Sociales");
			h1_nodes.forEach(detach_dev);
			t19 = claim_space(div2_nodes);
			claim_component(redessociales.$$.fragment, div2_nodes);
			t20 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { id: true });
			children(div0).forEach(detach_dev);
			t21 = claim_space(div2_nodes);

			script = claim_element(div2_nodes, "SCRIPT", {
				async: true,
				defer: true,
				crossorigin: true,
				src: true,
				nonce: true
			});

			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			t22 = claim_space(div2_nodes);

			div1 = claim_element(div2_nodes, "DIV", {
				class: true,
				"data-href": true,
				"data-width": true,
				"data-layout": true,
				"data-action": true,
				"data-size": true,
				"data-share": true
			});

			children(div1).forEach(detach_dev);
			t23 = claim_space(div2_nodes);
			br8 = claim_element(div2_nodes, "BR", {});
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 69, 3, 1473);
			attr_dev(label0, "for", "");
			attr_dev(label0, "class", "svelte-1vnnd2k");
			add_location(label0, file, 73, 4, 4154);
			add_location(br0, file, 73, 32, 4182);
			attr_dev(input0, "name", "nombres");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Nombres");
			input0.required = true;
			attr_dev(input0, "class", "svelte-1vnnd2k");
			add_location(input0, file, 74, 4, 4191);
			add_location(br1, file, 74, 69, 4256);
			attr_dev(label1, "for", "");
			attr_dev(label1, "class", "svelte-1vnnd2k");
			add_location(label1, file, 75, 4, 4265);
			add_location(br2, file, 75, 34, 4295);
			attr_dev(input1, "type", "number");
			input1.required = true;
			attr_dev(input1, "class", "svelte-1vnnd2k");
			add_location(input1, file, 76, 4, 4304);
			add_location(br3, file, 76, 34, 4334);
			attr_dev(label2, "for", "");
			attr_dev(label2, "class", "svelte-1vnnd2k");
			add_location(label2, file, 77, 4, 4343);
			add_location(br4, file, 77, 44, 4383);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "placeholder", "(Opcional)");
			attr_dev(input2, "class", "svelte-1vnnd2k");
			add_location(input2, file, 78, 4, 4392);
			add_location(br5, file, 78, 48, 4436);
			attr_dev(label3, "for", "pregunta");
			attr_dev(label3, "class", "svelte-1vnnd2k");
			add_location(label3, file, 79, 4, 4445);
			add_location(br6, file, 79, 54, 4495);
			attr_dev(textarea, "name", "pregunta");
			attr_dev(textarea, "id", "");
			attr_dev(textarea, "cols", "30");
			attr_dev(textarea, "rows", "10");
			textarea.required = true;
			attr_dev(textarea, "class", "svelte-1vnnd2k");
			add_location(textarea, file, 80, 4, 4504);
			add_location(br7, file, 80, 78, 4578);
			add_location(button, file, 80, 83, 4583);
			attr_dev(form, "action", "");
			attr_dev(form, "class", "contactoF svelte-1vnnd2k");
			attr_dev(form, "id", "AbrirContacto");
			add_location(form, file, 72, 0, 4096);
			add_location(h1, file, 82, 3, 4618);
			attr_dev(div0, "id", "fb-root");
			add_location(div0, file, 86, 6, 4688);
			script.async = true;
			script.defer = true;
			attr_dev(script, "crossorigin", "anonymous");
			if (script.src !== (script_src_value = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0")) attr_dev(script, "src", script_src_value);
			attr_dev(script, "nonce", "2MZjTCAa");
			add_location(script, file, 87, 6, 4719);
			attr_dev(div1, "class", "fb-like");
			attr_dev(div1, "data-href", "https://www.facebook.com/briimax");
			attr_dev(div1, "data-width", "");
			attr_dev(div1, "data-layout", "button");
			attr_dev(div1, "data-action", "like");
			attr_dev(div1, "data-size", "large");
			attr_dev(div1, "data-share", "true");
			add_location(div1, file, 88, 6, 4866);
			add_location(br8, file, 88, 169, 5029);
			attr_dev(div2, "class", "contactanos svelte-1vnnd2k");
			add_location(div2, file, 68, 4, 1444);
			attr_dev(div3, "class", "contenedor svelte-1vnnd2k");
			add_location(div3, file, 66, 3, 1400);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			mount_component(logo, div3, null);
			append_dev(div3, t0);
			append_dev(div3, div2);
			append_dev(div2, p);
			append_dev(p, t1);
			append_dev(div2, t2);
			append_dev(div2, form);
			append_dev(form, label0);
			append_dev(label0, t3);
			append_dev(form, br0);
			append_dev(form, t4);
			append_dev(form, input0);
			append_dev(form, br1);
			append_dev(form, t5);
			append_dev(form, label1);
			append_dev(label1, t6);
			append_dev(form, br2);
			append_dev(form, t7);
			append_dev(form, input1);
			append_dev(form, br3);
			append_dev(form, t8);
			append_dev(form, label2);
			append_dev(label2, t9);
			append_dev(form, br4);
			append_dev(form, t10);
			append_dev(form, input2);
			append_dev(form, br5);
			append_dev(form, t11);
			append_dev(form, label3);
			append_dev(label3, t12);
			append_dev(form, br6);
			append_dev(form, t13);
			append_dev(form, textarea);
			append_dev(form, t14);
			append_dev(form, br7);
			append_dev(form, t15);
			append_dev(form, button);
			append_dev(button, t16);
			append_dev(div2, t17);
			append_dev(div2, h1);
			append_dev(h1, t18);
			append_dev(div2, t19);
			mount_component(redessociales, div2, null);
			append_dev(div2, t20);
			append_dev(div2, div0);
			append_dev(div2, t21);
			append_dev(div2, script);
			append_dev(div2, t22);
			append_dev(div2, div1);
			append_dev(div2, t23);
			append_dev(div2, br8);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);
			transition_in(redessociales.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			transition_out(redessociales.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(logo);
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
	validate_slots("Blog", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Contacto, RedesSociales: Redes_sociales, About, Logo });
	return [];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}
}

export default Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmE4NjM5NDAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
