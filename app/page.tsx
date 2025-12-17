// app/page.tsx

async function getWordpressData() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!apiUrl) {
    throw new Error('API URL not found');
  }

  const query = `
    query GetSiteInfo {
      generalSettings {
        title
        description
      }
    }
  `;

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    });

    const json = await res.json();
    return json.data;

  } catch (error) {
    console.error(error);
    return { generalSettings: { title: "Hilltop Global Group", description: "Loading..." } };
  }
}

export default async function Home() {
  const data = await getWordpressData();

  // Fallback title if WordPress is still named "My Blog"
  const title = data.generalSettings.title === "My Blog" ? "Hilltop Global Group" : data.generalSettings.title;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1D3160] p-24 text-white font-sans">
      
      {/* Top Status Bar */}
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex mb-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-[#1D3160]/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-white/10 lg:p-4">
          Status:&nbsp;
          <code className="font-mono font-bold text-[#F4A261]">System Online & Connected</code>
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative flex place-items-center flex-col gap-4 text-center my-10">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-[#F4A261]">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mt-4 tracking-wide">
          DIGITAL PLATFORM 2.0
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
          The new unified student portal and operational dashboard is currently under active development.
        </p>
      </div>

      {/* Module Grid */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-6">
        
        {/* Module 1 */}
        <div className="group rounded-lg border border-white/10 px-5 py-6 transition-colors hover:border-[#F4A261]/50 hover:bg-white/5">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Brochure{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-[#F4A261]">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-400">
            Rebuilding marketing assets for speed and performance.
          </p>
        </div>

        {/* Module 2 */}
        <div className="group rounded-lg border border-white/10 px-5 py-6 transition-colors hover:border-[#F4A261]/50 hover:bg-white/5">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Student Portal{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-[#F4A261]">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-400">
            Secure login environment for application tracking.
          </p>
        </div>

        {/* Module 3 */}
        <div className="group rounded-lg border border-white/10 px-5 py-6 transition-colors hover:border-[#F4A261]/50 hover:bg-white/5">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Admin Panel{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-[#F4A261]">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-400">
            Operational tools for automation and proposals.
          </p>
        </div>

      </div>
    </main>
  );
}