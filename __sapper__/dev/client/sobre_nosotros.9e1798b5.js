import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as create_component, a as space, t as text, g as claim_element, h as children, k as claim_component, f as claim_space, j as claim_text, b as detach_dev, m as add_location, l as attr_dev, n as insert_dev, p as mount_component, o as append_dev, B as noop, r as transition_in, u as transition_out, w as destroy_component } from './client.5e3d9a0d.js';
import { R as Redes_sociales } from './redes_sociales.438f1924.js';
import { O as Overoles } from './overoles.3d4705a7.js';
import { L as Logo } from './logo.3a9b0b9c.js';
import './letras_briimax.c1085f76.js';

/* src/routes/sobre_nosotros.svelte generated by Svelte v3.37.0 */
const file = "src/routes/sobre_nosotros.svelte";

function create_fragment(ctx) {
	let div4;
	let logo;
	let t0;
	let div0;
	let h10;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let div1;
	let h11;
	let t5;
	let t6;
	let p1;
	let t7;
	let t8;
	let div3;
	let h12;
	let t9;
	let t10;
	let div2;
	let t11;
	let t12;
	let redessociales;
	let t13;
	let overoles;
	let current;
	logo = new Logo({ $$inline: true });
	redessociales = new Redes_sociales({ $$inline: true });
	overoles = new Overoles({ $$inline: true });

	const block = {
		c: function create() {
			div4 = element("div");
			create_component(logo.$$.fragment);
			t0 = space();
			div0 = element("div");
			h10 = element("h1");
			t1 = text("NOSOTROS");
			t2 = space();
			p0 = element("p");
			t3 = text("Ser una empresa reconocida por su liderazgo y competitividad empresarial, con tecnología de vanguardia y un recurso humano de excelencia, con orgullo de pertenencia, motivado y calificado, que proporcione servicios y productos con la mayor calidad en Seguridad Industrial.");
			t4 = space();
			div1 = element("div");
			h11 = element("h1");
			t5 = text("MISION");
			t6 = space();
			p1 = element("p");
			t7 = text("Estamos comprometidos a satisfacer continua y plenamente las necesidades y exigencias de nuestros clientes, superando sus expectativas y ofreciendo permanentemente productos y servicios orientados a mejorar su Seguridad Industrial, brindando una atención personalizada, oportuna y cálida.");
			t8 = space();
			div3 = element("div");
			h12 = element("h1");
			t9 = text("BENEFICIOS DE TRABAJAR CON BRIIMAX");
			t10 = space();
			div2 = element("div");
			t11 = text("| Atencion Personalizada | Asesoramiento | Varia diversidad de productos | Personalizacion |");
			t12 = space();
			create_component(redessociales.$$.fragment);
			t13 = space();
			create_component(overoles.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(logo.$$.fragment, div4_nodes);
			t0 = claim_space(div4_nodes);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", {});
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "NOSOTROS");
			h10_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Ser una empresa reconocida por su liderazgo y competitividad empresarial, con tecnología de vanguardia y un recurso humano de excelencia, con orgullo de pertenencia, motivado y calificado, que proporcione servicios y productos con la mayor calidad en Seguridad Industrial.");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h11 = claim_element(div1_nodes, "H1", {});
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, "MISION");
			h11_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Estamos comprometidos a satisfacer continua y plenamente las necesidades y exigencias de nuestros clientes, superando sus expectativas y ofreciendo permanentemente productos y servicios orientados a mejorar su Seguridad Industrial, brindando una atención personalizada, oportuna y cálida.");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h12 = claim_element(div3_nodes, "H1", {});
			var h12_nodes = children(h12);
			t9 = claim_text(h12_nodes, "BENEFICIOS DE TRABAJAR CON BRIIMAX");
			h12_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t11 = claim_text(div2_nodes, "| Atencion Personalizada | Asesoramiento | Varia diversidad de productos | Personalizacion |");
			div2_nodes.forEach(detach_dev);
			t12 = claim_space(div3_nodes);
			claim_component(redessociales.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t13 = claim_space(div4_nodes);
			claim_component(overoles.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h10, file, 33, 4, 649);
			add_location(p0, file, 34, 4, 671);
			attr_dev(div0, "class", "nosotros svelte-mthx0");
			add_location(div0, file, 32, 0, 622);
			add_location(h11, file, 37, 4, 992);
			add_location(p1, file, 38, 4, 1012);
			attr_dev(div1, "class", "mision nosotros svelte-mthx0");
			add_location(div1, file, 36, 0, 958);
			add_location(h12, file, 41, 4, 1353);
			attr_dev(div2, "class", "beneficios");
			add_location(div2, file, 42, 4, 1401);
			attr_dev(div3, "class", "beneficios nosotros svelte-mthx0");
			add_location(div3, file, 40, 0, 1315);
			attr_dev(div4, "class", "container svelte-mthx0");
			add_location(div4, file, 30, 0, 584);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			mount_component(logo, div4, null);
			append_dev(div4, t0);
			append_dev(div4, div0);
			append_dev(div0, h10);
			append_dev(h10, t1);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div4, t4);
			append_dev(div4, div1);
			append_dev(div1, h11);
			append_dev(h11, t5);
			append_dev(div1, t6);
			append_dev(div1, p1);
			append_dev(p1, t7);
			append_dev(div4, t8);
			append_dev(div4, div3);
			append_dev(div3, h12);
			append_dev(h12, t9);
			append_dev(div3, t10);
			append_dev(div3, div2);
			append_dev(div2, t11);
			append_dev(div3, t12);
			mount_component(redessociales, div3, null);
			append_dev(div4, t13);
			mount_component(overoles, div4, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);
			transition_in(redessociales.$$.fragment, local);
			transition_in(overoles.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			transition_out(redessociales.$$.fragment, local);
			transition_out(overoles.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(logo);
			destroy_component(redessociales);
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
	validate_slots("Sobre_nosotros", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sobre_nosotros> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ RedesSociales: Redes_sociales, Overoles, Logo });
	return [];
}

class Sobre_nosotros extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sobre_nosotros",
			options,
			id: create_fragment.name
		});
	}
}

export default Sobre_nosotros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29icmVfbm9zb3Ryb3MuOWUxNzk4YjUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
