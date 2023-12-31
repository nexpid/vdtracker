export default {
	fetch(request: Request): Promise<Response> {
		const baseUrl = new URL(request.url);
		const proxyUrl = new URL(`https://tracker.vendetta.rocks${[baseUrl.pathname, baseUrl.search, baseUrl.hash].join('')}`);

		return fetch(proxyUrl, request);
	},
};
