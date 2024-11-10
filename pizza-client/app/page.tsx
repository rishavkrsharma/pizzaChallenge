import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-transparent">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-1 flex items-center justify-between border-b border-indigo-500 ">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
              <div className=" space-x-8 ">
                <div className="flex flex-row items-center gap-2">
                  <svg
                    height="30"
                    width="30"
                    viewBox="0 0 511.998 511.998"
                    style={{ display: "block" }}
                  >
                    <path
                      style={{ fill: "#f4d853" }}
                      d="M455.574 49.906a23.258 23.258 0 0 0-12.592-12.592C383.261 12.577 320.353.026 255.999.002L255.818 0C191.64 0 128.793 12.555 69.016 37.316a23.268 23.268 0 0 0-12.592 30.401l33.401 80.633.017.045 144.661 349.242a23.226 23.226 0 0 0 8.57 10.44 23.183 23.183 0 0 0 6.105 2.899 23.267 23.267 0 0 0 28.318-13.342l144.655-349.232 33.424-80.69a23.28 23.28 0 0 0-.001-17.806z"
                    />
                    <path
                      style={{ fill: "#f4d853" }}
                      d="M223.17 348.675a39.16 39.16 0 0 1-5.95.454c-8.1 0-15.615-2.486-21.835-6.732-10.228-6.982-16.943-18.729-16.943-32.047 0-2.466.24-4.877.679-7.214 1.854-9.85 7.428-18.381 15.212-24.083a38.589 38.589 0 0 1 22.887-7.481c21.417 0 38.779 17.362 38.779 38.779 0 19.393-14.238 35.461-32.829 38.324zM279.167 204.4c-.016.222-.033.441-.051.661-.07.828-.158 1.649-.278 2.462-.006.039-.009.078-.016.116a37.282 37.282 0 0 1-.618 3.121 38.185 38.185 0 0 1-.62 2.319l-.039.14a38.787 38.787 0 0 1-.839 2.404c-.064.171-.132.338-.2.507-.296.743-.61 1.478-.951 2.198l-.054.126a38.008 38.008 0 0 1-1.188 2.274c-.073.129-.149.257-.222.386a41.41 41.41 0 0 1-1.292 2.094c-.017.023-.029.047-.045.07-.484.724-.996 1.43-1.525 2.12-.07.087-.138.174-.206.261a38.736 38.736 0 0 1-1.633 1.958l-.019.02a39.626 39.626 0 0 1-1.852 1.927c-.05.048-.101.096-.154.144a38.954 38.954 0 0 1-4.104 3.445c-.029.02-.057.039-.085.06a38.63 38.63 0 0 1-4.65 2.887c-.009.005-.02.009-.031.016a38.564 38.564 0 0 1-9.837 3.567c-.05.011-.099.025-.15.036-.562.118-1.129.22-1.699.315l-.276.05c-.535.084-1.075.15-1.618.212-.126.014-.251.034-.378.048-.523.054-1.049.092-1.576.124-.149.009-.295.026-.444.034a40.22 40.22 0 0 1-2.032.053c-21.417 0-38.779-17.362-38.779-38.779s17.362-38.779 38.779-38.779c.681 0 1.359.019 2.032.053.152.008.299.025.451.036.524.033 1.049.068 1.567.123.133.014.264.036.397.051.537.062 1.072.127 1.601.211.093.014.183.034.276.05.569.093 1.135.197 1.699.315l.15.036a38.5 38.5 0 0 1 1.79.427l.05.014a38.564 38.564 0 0 1 7.997 3.126c.011.005.022.009.031.016a38.757 38.757 0 0 1 4.65 2.887l.085.061a38.752 38.752 0 0 1 4.104 3.445l.154.144a38.25 38.25 0 0 1 1.852 1.927l.019.02a38.298 38.298 0 0 1 1.633 1.958c.068.087.136.174.206.261.53.69 1.042 1.394 1.525 2.12.017.023.029.047.045.07.453.683.879 1.382 1.292 2.094.073.129.149.257.222.386.419.745.817 1.5 1.188 2.274.019.04.036.084.054.124.343.72.656 1.455.951 2.2.068.169.137.337.2.507.302.79.588 1.59.839 2.404l.039.14c.233.763.436 1.537.62 2.319a38.445 38.445 0 0 1 .618 3.121c.006.039.009.078.016.116a40.36 40.36 0 0 1 .329 3.123c.057.87.098 1.745.098 2.629.001.87-.041 1.747-.098 2.615zm54.242 97.445c-2.46.49-5.006.751-7.608.751a38.62 38.62 0 0 1-16.383-3.63c-13.227-6.175-22.395-19.588-22.395-35.149 0-21.417 17.362-38.779 38.779-38.779 4.663 0 9.133.824 13.273 2.333 7.813 2.846 14.45 8.134 18.995 14.941a38.601 38.601 0 0 1 6.51 21.505c-.001 18.812-13.4 34.491-31.171 38.028z"
                    />
                    <path
                      style={{ fill: "#f4d853" }}
                      d="M455.574 49.906a23.258 23.258 0 0 0-12.592-12.592C383.261 12.577 320.353.026 255.999.002L255.818 0C191.64 0 128.793 12.555 69.016 37.316a23.268 23.268 0 0 0-12.592 30.401l33.401 80.633.02.047c4.658 11.243 17.194 16.996 28.752 13.202.557-.183 1.12-.352 1.678-.532a440.756 440.756 0 0 1 22.443-6.625c.188-.05.374-.104.563-.155.769-.203 1.54-.396 2.311-.596 1.838-.478 3.676-.946 5.519-1.398.954-.234 1.909-.462 2.865-.689 1.702-.406 3.403-.802 5.108-1.188.962-.217 1.923-.434 2.887-.645 1.812-.397 3.627-.777 5.441-1.152.821-.169 1.643-.344 2.463-.509a446.3 446.3 0 0 1 7.847-1.498c.306-.056.614-.104.923-.158 2.327-.416 4.657-.813 6.989-1.191.883-.143 1.768-.276 2.652-.414a444.536 444.536 0 0 1 8.28-1.212c1.753-.239 3.509-.465 5.263-.683.931-.115 1.86-.233 2.794-.343 2.051-.24 4.104-.464 6.16-.676.613-.064 1.221-.133 1.83-.195a451.08 451.08 0 0 1 7.965-.714c.695-.056 1.391-.101 2.088-.154 1.981-.15 3.965-.292 5.949-.414.946-.059 1.896-.11 2.842-.163 1.768-.098 3.537-.186 5.306-.264.976-.042 1.95-.084 2.925-.119 1.843-.068 3.689-.121 5.533-.166.855-.02 1.708-.047 2.561-.064 2.679-.048 5.358-.079 8.041-.079l.178.002c2.631.002 5.261.031 7.888.079.852.016 1.703.042 2.553.062 1.855.045 3.712.098 5.567.166.973.036 1.948.078 2.922.119 1.779.078 3.558.166 5.334.265.945.053 1.889.102 2.834.161 1.995.123 3.986.265 5.98.416.692.053 1.388.098 2.079.152 2.669.216 5.336.453 8.001.715.589.059 1.177.127 1.767.188 2.086.214 4.171.441 6.254.684.917.107 1.832.223 2.749.338a434.334 434.334 0 0 1 13.647 1.907c.87.135 1.742.265 2.612.406 2.358.382 4.712.782 7.065 1.202.29.051.579.098.87.15 2.642.478 5.279.982 7.914 1.508.779.155 1.556.323 2.335.481 1.869.383 3.737.776 5.603 1.184.934.203 1.863.414 2.797.624 1.748.394 3.496.8 5.244 1.216.921.22 1.843.439 2.763.664 1.906.467 3.808.951 5.71 1.443.717.186 1.432.363 2.147.552.216.056.427.118.642.175a446.39 446.39 0 0 1 22.443 6.613c.565.181 1.131.352 1.695.537 2.4.786 4.84 1.16 7.244 1.16 9.175 0 17.806-5.463 21.494-14.368l33.424-80.691a23.297 23.297 0 0 0-.004-17.807z"
                    />
                    <path
                      style={{ fill: "#ff0c38" }}
                      d="M217.22 271.573a38.59 38.59 0 0 0-22.887 7.481c-7.784 5.702-13.357 14.233-15.212 24.083a39.061 39.061 0 0 0-.679 7.214c0 13.317 6.715 25.063 16.943 32.047a38.6 38.6 0 0 0 21.835 6.732c2.024 0 4.01-.157 5.95-.454 18.59-2.863 32.828-18.932 32.828-38.324.001-21.416-17.363-38.779-38.778-38.779zM279.167 199.142a68.209 68.209 0 0 0-.051-.661 39.845 39.845 0 0 0-.278-2.462c-.006-.039-.009-.078-.016-.116a37.282 37.282 0 0 0-.618-3.121 38.185 38.185 0 0 0-.62-2.319l-.039-.14a38.334 38.334 0 0 0-.839-2.404c-.064-.171-.132-.338-.2-.507a38.584 38.584 0 0 0-.951-2.2c-.019-.04-.036-.084-.054-.124a38.008 38.008 0 0 0-1.188-2.274c-.073-.129-.149-.257-.222-.386a41.41 41.41 0 0 0-1.292-2.094c-.017-.023-.029-.047-.045-.07a40.329 40.329 0 0 0-1.525-2.12c-.07-.087-.138-.174-.206-.261a38.736 38.736 0 0 0-1.633-1.958l-.019-.02a39.626 39.626 0 0 0-1.852-1.927l-.154-.144a39.056 39.056 0 0 0-4.104-3.445c-.029-.02-.057-.039-.085-.061a38.63 38.63 0 0 0-4.65-2.887c-.009-.005-.02-.009-.031-.016a38.564 38.564 0 0 0-9.837-3.567c-.05-.011-.099-.025-.15-.036-.56-.119-1.129-.22-1.699-.315-.093-.016-.183-.036-.276-.05a38.474 38.474 0 0 0-1.601-.211c-.133-.016-.264-.036-.397-.051a38.338 38.338 0 0 0-1.567-.123c-.152-.009-.299-.026-.451-.036a40.22 40.22 0 0 0-2.032-.053c-21.417 0-38.779 17.362-38.779 38.779s17.362 38.779 38.779 38.779c.681 0 1.359-.019 2.032-.053.149-.008.295-.025.444-.034.527-.033 1.053-.07 1.576-.124.127-.012.253-.033.378-.048a40.606 40.606 0 0 0 1.618-.212c.093-.014.183-.034.276-.05a38.496 38.496 0 0 0 1.699-.315l.15-.036a37.9 37.9 0 0 0 1.79-.427l.05-.014a38.564 38.564 0 0 0 7.997-3.126c.011-.005.022-.009.031-.016a38.757 38.757 0 0 0 4.65-2.887l.085-.061a38.853 38.853 0 0 0 4.104-3.445l.154-.144a38.25 38.25 0 0 0 1.852-1.927l.019-.02a39.185 39.185 0 0 0 1.633-1.958l.206-.261c.53-.69 1.042-1.394 1.525-2.12.017-.023.029-.047.045-.07.453-.683.88-1.382 1.292-2.094.073-.129.149-.256.222-.386a39.87 39.87 0 0 0 1.188-2.274c.019-.04.036-.084.054-.126.343-.72.655-1.455.951-2.198.068-.169.136-.337.2-.507.302-.79.588-1.59.839-2.404l.039-.14c.233-.763.436-1.537.62-2.319a38.445 38.445 0 0 0 .618-3.121c.006-.037.009-.078.016-.116a40.36 40.36 0 0 0 .329-3.123c.057-.87.098-1.745.098-2.629a39.364 39.364 0 0 0-.098-2.614zM339.072 227.371a38.682 38.682 0 0 0-13.273-2.333c-21.417 0-38.779 17.362-38.779 38.779 0 15.56 9.169 28.972 22.397 35.149a38.604 38.604 0 0 0 16.382 3.63c2.604 0 5.148-.262 7.608-.751 17.771-3.537 31.17-19.216 31.17-38.028 0-7.956-2.401-15.35-6.51-21.505a38.88 38.88 0 0 0-18.995-14.941z"
                    />
                    <path
                      style={{ fill: "#ee8700" }}
                      d="m89.825 148.35.02.047c4.658 11.243 17.194 16.996 28.752 13.202.557-.183 1.12-.352 1.678-.532a440.756 440.756 0 0 1 22.443-6.625c.188-.05.374-.104.563-.155.769-.203 1.54-.396 2.311-.596 1.838-.478 3.676-.946 5.519-1.398.954-.234 1.909-.462 2.865-.689 1.702-.406 3.403-.802 5.108-1.188.962-.217 1.923-.434 2.887-.645 1.812-.397 3.627-.777 5.441-1.152.821-.169 1.643-.344 2.463-.509a446.3 446.3 0 0 1 7.847-1.498c.306-.056.614-.104.923-.158 2.327-.416 4.657-.813 6.989-1.191.883-.143 1.768-.276 2.652-.414a425.366 425.366 0 0 1 8.28-1.213c1.753-.239 3.509-.465 5.263-.682.931-.115 1.86-.233 2.794-.343 2.051-.24 4.104-.464 6.16-.676.613-.062 1.221-.133 1.83-.194a451.08 451.08 0 0 1 7.965-.714c.695-.056 1.391-.101 2.088-.154 1.981-.15 3.965-.292 5.949-.414.946-.059 1.896-.11 2.842-.163 1.768-.098 3.537-.186 5.306-.264.976-.042 1.95-.084 2.925-.119 1.843-.068 3.689-.121 5.533-.164.855-.02 1.708-.047 2.561-.062 2.679-.048 5.358-.079 8.041-.079l.178.002V.005l-.181-.002C191.64 0 128.793 12.555 69.016 37.316a23.268 23.268 0 0 0-12.592 30.401l33.401 80.633z"
                    />
                    <path
                      style={{ fill: "#eebf00" }}
                      d="M223.17 348.675a39.16 39.16 0 0 1-5.95.454c-8.1 0-15.615-2.486-21.835-6.732-10.228-6.982-16.943-18.729-16.943-32.047 0-2.466.24-4.877.679-7.214 1.854-9.85 7.428-18.381 15.212-24.083a38.589 38.589 0 0 1 22.887-7.481c21.417 0 38.779 17.362 38.779 38.779v-73.039a38.564 38.564 0 0 1-7.34 2.366c-.05.011-.099.025-.15.036-.562.118-1.128.22-1.699.315l-.276.05c-.535.084-1.075.15-1.618.212-.126.014-.251.034-.378.048-.523.054-1.049.092-1.576.124-.149.009-.295.026-.444.034a40.22 40.22 0 0 1-2.032.053c-21.417 0-38.779-17.362-38.779-38.779s17.362-38.779 38.779-38.779c.681 0 1.359.019 2.032.053.152.008.299.025.451.034.524.033 1.049.068 1.567.123.133.014.264.036.397.051.537.062 1.072.127 1.601.211.093.014.183.034.276.05a36.25 36.25 0 0 1 1.699.315l.15.034a38.5 38.5 0 0 1 1.84.441 38.564 38.564 0 0 1 5.5 1.925v-26.624l-.178-.002c-2.682 0-5.362.031-8.041.079-.855.016-1.708.042-2.561.062-1.844.045-3.69.098-5.533.164a468.643 468.643 0 0 0-8.231.383c-.946.053-1.896.104-2.842.163-1.984.123-3.968.264-5.949.414-.695.053-1.393.098-2.088.154-2.657.214-5.313.451-7.965.714-.61.06-1.218.132-1.83.194a442.39 442.39 0 0 0-6.16.676c-.934.11-1.863.228-2.794.343a448.058 448.058 0 0 0-8.198 1.093c-1.782.256-3.565.526-5.345.803-.884.138-1.77.271-2.652.414-2.333.378-4.663.776-6.989 1.191-.307.054-.616.104-.923.158-2.618.475-5.235.977-7.847 1.498-.821.164-1.643.34-2.463.509-1.815.374-3.63.755-5.441 1.152a480.259 480.259 0 0 0-10.86 2.522c-1.843.453-3.681.921-5.519 1.398-.771.2-1.542.392-2.311.596-.189.05-.375.104-.563.155a444.569 444.569 0 0 0-22.443 6.625c-.558.181-1.121.349-1.678.532-11.558 3.794-24.094-1.959-28.752-13.202l-.02-.047.017.045 144.661 349.242a23.269 23.269 0 0 0 21.496 14.364V310.348c.002 19.396-14.236 35.464-32.827 38.327z"
                    />
                    <path
                      style={{ fill: "#f1cb30" }}
                      d="M248.657 163.863zM246.534 240.078zM255.999 166.23zM250.498 239.238a38.564 38.564 0 0 1 0 0zM242.518 240.497zM250.449 239.253zM248.508 239.715zM244.537 240.339zM240.487 162.993zM246.81 163.514zM244.933 163.255zM242.969 163.081z"
                    />
                    <path
                      style={{ fill: "#f4d853" }}
                      d="M274.313 182.815zM275.556 185.214zM276.707 187.921zM276.507 216.13zM255.999 237.314zM263.178 233.21zM277.586 190.465zM278.346 193.386zM267.519 173.981zM263.261 170.393zM258.527 167.446zM269.39 175.928zM271.229 178.146zM272.801 180.336zM258.496 167.43a38.746 38.746 0 0 1 0 0zM278.822 207.639zM272.754 223.276zM267.367 229.706zM274.093 221.114zM277.546 213.219zM275.501 218.454zM278.207 210.76zM279.116 205.061zM269.373 227.635zM271.023 225.657zM279.167 199.142zM279.266 201.771z"
                    />
                    <path style={{ fill: "#ff0c38" }} d="M278.838 196.02z" />
                  </svg>
                  <span className="text-2xl font-semibold">
                    Pizza Challenge
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden"></div>
        </nav>
      </header>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">All the Pizza You Crave </span>
                <span className="text-indigo-600">500 coins free</span>
              </h1>
              <p className="mt-5 text-2xl text-gray-500">
                Participate in the Challenge and prove top pizza lover in whole
                world!
              </p>
            </div>
            <Link
              href={"/newUser"}
              className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started now
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={"/newUser"}
                className="flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>

                <span>New User</span>
              </Link>

              <Link
                href={"/leaderboard"}
                className="flex flex-col items-center justify-center p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>

                <span>Leaderboard</span>
              </Link>

              <Link
                href={"/managePlayers"}
                className="flex flex-col items-center justify-center p-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <span>Manage Players</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
