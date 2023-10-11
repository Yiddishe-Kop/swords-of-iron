// https://vercel.com/docs/functions/edge-functions/edge-caching#cache-control
export default defineEventHandler((event) => {
  const cacheSeconds = 60 * 5; // 5 minutes
  setHeader(event, "Cache-Control", `max-age=0, s-maxage=${cacheSeconds}`);
});
