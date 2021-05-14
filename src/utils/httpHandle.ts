export const post = async (req) => {
	// url이나 body가 비어있으면 return
	if (!req.url || !req.body) return;

	let res = await fetch(req.url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "omit",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Origin: "http://localhost:3000",
		},
		body: JSON.stringify(req.body),
	});

	let ret;
	if (res.ok) ret = await res.json();
	else ret = res.status;

	return ret;
};

export const get = async (req) => {
	return;
};
