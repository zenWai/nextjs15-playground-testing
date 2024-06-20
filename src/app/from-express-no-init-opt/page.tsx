export default async function FromExpressNoInitOptPage() {
  const response = await fetch("http://localhost:2999/");
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: No init options</div>
      <div>
        Quote:{" "}
        {`"Caching: fetch requests, GET Route Handlers, and client navigations are no longer cached by default"`}
      </div>
      <div>
        {" "}
        Quote:{" "}
        {`"In Next.js 15, no-store is used by default if a cache option is not provided. This means fetch requests will not be cached by default."`}
        <a
          href="https://nextjs.org/blog/next-15-rc#caching-updates"
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="c-link"
        >
          Source
        </a>
      </div>
      <div>- Interesting that it is caching ¯\_(ツ)_/¯</div>
      <div>Interesting: This page is built as static</div>
      <div>
        I was expecting it to be built as dynamic like it does when using init
        options no-store, i guess.
      </div>
    </main>
  );
}
