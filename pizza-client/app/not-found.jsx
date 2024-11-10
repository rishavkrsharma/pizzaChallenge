import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div
            className="min-h-screen bg-cover bg-top sm:bg-top"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
                <p className="text-xl font-bold text-white text-opacity-70 uppercase tracking-wide">
                  404 error
                </p>

                <h1 className=" mt-2 pb-2 text-4xl font-extrabold text-white text-opacity-50 tracking-tight sm:text-5xl">
                  Uh oh! I think you’re lost in pizza.
                </h1>
                <p className="mt-2 text-lg font-medium text-white text-opacity-50">
                  It looks like the page you’re looking for doesn't exist.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="items-center bg-gradient-to-br from-orange-500 to-fuchsia-500 border border-transparent rounded-md px-4 py-2 text-sm font-semibold text-white text-center hover:from-orange-600 hover:to-fuchsia-600 transition-all duration-800 "
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
