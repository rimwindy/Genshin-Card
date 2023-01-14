// Forward Example

// Note that Cloudflare Workers fetch API does not support direct IP access.
// By the way, Workers are prohibited from fetching each other.

const base = 'https://example.com';

async function handleRequest(request) {
    const url = new URL(request.url);
    const { pathname, search } = url;
    const destinationURL = base + pathname + search;

    const init = {
        body: request.body,
        headers: request.headers,
        method: request.method,
    }

    let response = await fetch(destinationURL, init);

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText
    });
}

addEventListener('fetch', async event => {
    event.respondWith(handleRequest(event.request));
});
