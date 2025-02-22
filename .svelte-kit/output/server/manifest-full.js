export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["documents/kopen/Bezichtiging Checklist - MoveRoof Template.docx","documents/kopen/Bezichtiging Checklist - MoveRoof Template.pdf","documents/kopen/Eindinspectie Koper Checklist - MoveRoof.docx","documents/kopen/Eindinspectie Koper Checklist - MoveRoof.pdf","documents/verkopen/Biedlogboek - MoveRoof Template.xlsx","documents/verkopen/Contacten logboek - MoveRoof Template.xlsx","documents/verkopen/Eindinspectie checklist - MoveRoof Template.docx","documents/verkopen/Eindinspectie checklist - MoveRoof Template.pdf","documents/verkopen/Eindinspectierapport - MoveRoof Template.docx","documents/verkopen/Eindinspectierapport - MoveRoof Template.pdf","documents/verkopen/Lijst van zaken voorbereiding - MoveRoof Template.docx","documents/verkopen/Lijst van zaken voorbereiding - MoveRoof Template.pdf","documents/verkopen/koopovereenkomst/Lijst van zaken - MoveRoof Template.docx","documents/verkopen/koopovereenkomst/Lijst van zaken - MoveRoof Template.pdf","documents/verkopen/koopovereenkomst/Ontvangstbevestiging - MoveRoof Template.docx","documents/verkopen/koopovereenkomst/Ontvangstbevestiging - MoveRoof Template.pdf","documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.docx","documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.pdf","documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.docx","documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.pdf","documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaand appartement model.pdf","documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaande eengezinswoning model.pdf","documents/verkopen/koopovereenkomst/Voorbeeld Overeenkomst - appartement - MoveRoof.pdf","documents/verkopen/koopovereenkomst/Voorbeeld Overeenkomst - eengezinswoning - MoveRoof.pdf","visuals/general/about-moveroof-me.jpeg","visuals/general/experience-buying-hero.webp","visuals/general/experience-selling-hero.webp","visuals/general/missing_listing_img.jpg","visuals/general/packagevis-allin.svg","visuals/general/packagevis-premium.svg","visuals/general/packagevis-starter.svg","visuals/general/phone-3dmockup.svg","visuals/general/phone-listingpage-mockup.svg","visuals/general/process-step1-signup.png","visuals/general/process-step2-online.png","visuals/general/process-step3-tours.png","visuals/general/process-step4-negotiate.png","visuals/general/process-step5-celebrate.png","visuals/icons/bath-icon.svg","visuals/icons/bed-icon.svg","visuals/icons/check-icon-secondary.svg","visuals/icons/check-icon.svg","visuals/icons/chevron-dark.svg","visuals/icons/chevron-down-orange.svg","visuals/icons/chevron-up-orange.svg","visuals/icons/close-icon.svg","visuals/icons/document-icon-dark.svg","visuals/icons/document-icon-orange.svg","visuals/icons/dot-active-icon.svg","visuals/icons/dot-nonactive-icon.svg","visuals/icons/floorplan-icon.svg","visuals/icons/funda-icon.png","visuals/icons/leaf-icon.svg","visuals/icons/left-arrow-icon.svg","visuals/icons/menu-icon-dark.svg","visuals/icons/menu-icon-light.svg","visuals/icons/mouse-icon.svg","visuals/icons/non-check-icon.svg","visuals/icons/package-arrow-right-icon.svg","visuals/icons/plus-icon.svg","visuals/icons/right-arrow-icon.svg","visuals/icons/timeline-stage.svg","visuals/listing-images/Engerstraat - Haler/engerstraat4-1.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-10.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-11.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-12.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-13.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-14.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-15.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-16.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-17.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-18.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-19.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-2.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-20.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-21.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-22.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-23.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-24.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-25.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-26.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-27.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-28.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-29.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-3.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-30.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-31.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-32.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-33.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-34.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-35.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-36.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-37.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-38.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-39.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-4.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-40.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-41.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-42.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-43.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-44.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-45.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-46.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-47.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-48.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-49.png","visuals/listing-images/Engerstraat - Haler/engerstraat4-5.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-6.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-7.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-8.jpg","visuals/listing-images/Engerstraat - Haler/engerstraat4-9.jpg","visuals/listing-images/Sample Listing High Quality.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 0.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 1.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 10.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 2.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 3.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 4.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 5.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 6.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 7.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 8.jpg","visuals/listing-images/Stadsring Amersfoort/Stadsring listing image 9.jpg","visuals/logos/full-logo/full-logo-dark.svg","visuals/logos/full-logo/full-logo-light-contrast.svg","visuals/logos/full-logo/full-logo-light.svg","visuals/logos/full-logo/full-logo-orange.svg","visuals/logos/full-logo/full-logo-yellow-orange-dark.svg","visuals/logos/full-logo/full-logo-yellow-orange-light-contrast.svg","visuals/logos/full-logo/full-logo-yellow-orange-light.svg","visuals/logos/icon-logo/logo-icon-dark.svg","visuals/logos/icon-logo/logo-icon-light-contrast.svg","visuals/logos/icon-logo/logo-icon-light.svg","visuals/logos/icon-logo/logo-icon-orange.svg","visuals/logos/icon-logo/logo-icon-yellow-orange-dark.svg","visuals/logos/icon-logo/logo-icon-yellow-orange-light-contrast.svg","visuals/logos/icon-logo/logo-icon-yellow-orange-light.svg","visuals/logos/logo-favicon.svg"]),
	mimeTypes: {".pdf":"application/pdf",".jpeg":"image/jpeg",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.jjO9hIyP.js",app:"_app/immutable/entry/app.Ek3Uvxis.js",imports:["_app/immutable/entry/start.jjO9hIyP.js","_app/immutable/chunks/BvwibxC4.js","_app/immutable/chunks/BgNj6qsk.js","_app/immutable/chunks/BPB6zGR0.js","_app/immutable/entry/app.Ek3Uvxis.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BPB6zGR0.js","_app/immutable/chunks/BoO-fpiT.js","_app/immutable/chunks/CPgTVkcs.js","_app/immutable/chunks/wjY5rkY6.js","_app/immutable/chunks/B-FElII2.js","_app/immutable/chunks/B9bQSa7m.js","_app/immutable/chunks/dRWcjXu1.js","_app/immutable/chunks/Ce8ShSsf.js","_app/immutable/chunks/BgNj6qsk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aanbod",
				pattern: /^\/aanbod\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/listings",
				pattern: /^\/api\/listings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/listings/_server.js'))
			},
			{
				id: "/koop-begeleiding",
				pattern: /^\/koop-begeleiding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/listings/[listing_id]",
				pattern: /^\/listings\/([^/]+?)\/?$/,
				params: [{"name":"listing_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/over-moveroof",
				pattern: /^\/over-moveroof\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/privacy-statement",
				pattern: /^\/privacy-statement\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/terms-of-service",
				pattern: /^\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/verkoop-begeleiding",
				pattern: /^\/verkoop-begeleiding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/zelf-verkopen",
				pattern: /^\/zelf-verkopen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
