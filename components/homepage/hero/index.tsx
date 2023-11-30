import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-pink-100">
            <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
                <div className="text-center">
                    <h1 className="text-balance text-4xl font-bold text-gray-800 sm:text-6xl">
                        Find your new{' '}
                        <span className="relative lg:rounded-md lg:bg-primary/20 lg:px-4 lg:text-gray-900">
                            best friend
                        </span>
                    </h1>

                    <p className="text-balance mt-3 text-gray-600">
                        You can find your perfect furry friend here. We have a wide variety of pets
                        to choose from.
                    </p>

                    <div className="mt-8 text-center sm:flex sm:items-center sm:justify-center sm:text-start">
                        <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
                            {/* Avatar Group */}
                            <div className="flex justify-center -space-x-3">
                                <Image
                                    src="/hero-pets/cat.jpg"
                                    width="100"
                                    height="100"
                                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                    alt="My Image"
                                />
                                <Image
                                    src="/hero-pets/dogs.jpg"
                                    width="100"
                                    height="100"
                                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                    alt="My Image"
                                />
                                <Image
                                    src="/hero-pets/reptiles.jpg"
                                    width="100"
                                    height="100"
                                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                    alt="My Image"
                                />
                                <Image
                                    src="/hero-pets/birds.jpg"
                                    width="100"
                                    height="100"
                                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                    alt="My Image"
                                />
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 ring-2 ring-white">
                                    <span className="text-xs font-medium uppercase leading-none text-white">
                                        1k+
                                    </span>
                                </span>
                            </div>
                            {/* End Avatar Group */}
                        </div>

                        <div className="mx-auto h-px w-32 border-t border-gray-200 dark:border-gray-700 sm:mx-0 sm:h-full sm:w-auto sm:border-s sm:border-t-0"></div>

                        <div className="pt-5 sm:ps-5 sm:pt-0">
                            <div className="text-lg font-semibold text-gray-800">1000+ Pets</div>
                            <div className="text-sm text-gray-500">Have found home</div>
                        </div>
                    </div>

                    <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
                        {/* Form */}
                        <form>
                            <div className="relative z-10 flex space-x-3 rounded-lg border bg-white p-3 shadow-lg shadow-gray-100/[.2]">
                                <div className="flex-[1_0_0%]">
                                    <label
                                        htmlFor="hs-search-article-1"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        <span className="sr-only">Search a pet</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="hs-search-article-1"
                                        id="hs-search-article-1"
                                        className="block w-full rounded-lg border-transparent px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Search a pet..."
                                    />
                                </div>
                                <div className="flex-[0_0_auto]">
                                    <a
                                        className="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </form>
                        {/* End Form */}

                        {/* SVG Element */}
                        <div className="absolute end-0 top-0 hidden -translate-y-12 translate-x-16 md:block">
                            <svg
                                className="h-auto w-16 text-orange-500"
                                width="121"
                                height="135"
                                viewBox="0 0 121 135"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </div>
                        {/* End SVG Element */}

                        {/* SVG Element */}
                        <div className="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
                            <svg
                                width="147"
                                height="147"
                                viewBox="0 0 147 147"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.4045 121.882C26.2257 119.587 24.7785 117.3 22.3273 115.441C17.9947 112.153 13.4164 111.49 11.1962 113.823C8.97909 116.155 10.0007 120.446 13.7384 124.497C15.7571 126.687 18.1932 127.898 20.5981 127.904C21.7499 127.908 22.8217 127.632 23.7238 127.111C24.1702 126.853 24.5753 126.538 24.9262 126.164C26.0051 125.031 26.5291 123.51 26.4045 121.882Z"
                                    fill="black"
                                    fillOpacity="0.56"
                                />
                                <path
                                    d="M21.685 109.986C23.3184 110.343 24.9138 110.119 26.2287 109.36C26.3694 109.279 26.5065 109.191 26.6371 109.1C28.0342 108.13 28.9354 106.619 29.1802 104.847C29.5204 102.371 28.539 99.619 26.4198 97.0997C22.6487 92.6229 18.0157 90.8904 15.1471 92.885C12.2908 94.8725 12.3621 99.6709 15.3224 104.82C16.9211 107.603 19.1778 109.435 21.685 109.986Z"
                                    fill="black"
                                    fillOpacity="0.56"
                                />
                                <path
                                    d="M52.866 89.7648C49.7349 90.5206 48.0201 94.8173 48.7015 100.213C49.0856 103.266 50.3432 105.663 52.2406 106.965C53.5883 107.887 55.1681 108.194 56.6884 107.826C57.1876 107.709 57.6633 107.516 58.1097 107.258C59.0118 106.737 59.787 105.947 60.3598 104.948C61.554 102.864 61.7263 100.147 60.839 97.3034C59.1991 92.0407 55.9941 89.0107 52.866 89.7648Z"
                                    fill="black"
                                    fillOpacity="0.56"
                                />
                                <path
                                    d="M41.055 100.775C41.1996 100.708 41.3438 100.633 41.4814 100.554C42.7994 99.7926 43.791 98.5229 44.2981 96.9295C45.0751 94.4831 44.6164 91.6125 43.0055 88.8364C40.0268 83.6983 35.9069 81.2374 32.7575 82.7173C29.5989 84.2025 28.7798 89.0828 30.7712 94.5871C31.8934 97.682 33.7862 99.9081 36.1002 100.851C37.7574 101.525 39.5166 101.5 41.055 100.775Z"
                                    fill="black"
                                    fillOpacity="0.56"
                                />
                                <path
                                    d="M52.9834 111.832C47.9264 111.286 44.177 108.146 44.1388 108.115L44.1221 108.1C39.3164 104.388 35.5676 106.292 34.8775 106.706C34.161 107.104 30.6381 109.399 31.4507 115.424C31.4601 115.476 32.21 120.723 30.2523 124.952C28.6612 128.382 28.3717 133.311 32.327 136.85C32.4527 136.969 33.7831 138.207 35.8744 138.708C39.4757 139.564 42.4086 137.561 44.2315 135.725L44.242 135.715C44.2599 135.697 45.9811 133.827 47.5719 132.288C48.4388 131.445 49.5091 130.827 50.6726 130.498C52.8002 129.89 55.2805 129.334 55.3024 129.33L55.3194 129.324C56.5325 129.003 57.5401 128.58 58.3749 128.098C60.6561 126.781 61.6525 125.011 62.0806 123.577C62.6924 121.516 62.2855 119.745 62.2454 119.576C60.9038 113.171 54.8176 112.029 52.9834 111.832Z"
                                    fill="black"
                                    fillOpacity="0.56"
                                />
                                <path
                                    d="M94.5897 78.1528C96.487 76.8508 97.7446 74.4538 98.1287 71.4015C98.8101 66.0053 97.0953 61.7087 93.9642 60.9529C90.8361 60.1988 87.6311 63.2288 85.9912 68.4915C85.1039 71.3348 85.2731 74.05 86.4704 76.1357C87.0432 77.1351 87.8184 77.9251 88.7205 78.4459C89.1669 78.7037 89.6426 78.8967 90.1418 79.0137C91.6621 79.3818 93.2419 79.0748 94.5897 78.1528Z"
                                    fill="#FFBD59"
                                />
                                <path
                                    d="M102.532 68.1176C103.039 69.7109 104.031 70.9806 105.346 71.7398C105.486 71.821 105.631 71.8961 105.775 71.9633C107.314 72.6884 109.073 72.7133 110.73 72.0392C113.044 71.0961 114.937 68.87 116.059 65.7751C118.05 60.2709 117.234 55.3923 114.073 53.9053C110.923 52.4254 106.803 54.8864 103.825 60.0245C102.214 62.8006 101.755 65.6711 102.532 68.1176Z"
                                    fill="#FFBD59"
                                />
                                <path
                                    d="M135.634 85.0108C133.414 82.6771 128.835 83.3404 124.503 86.6286C122.052 88.4874 120.604 90.775 120.426 93.0691C120.301 94.6974 120.825 96.219 121.904 97.3516C122.255 97.7254 122.66 98.0408 123.106 98.2985C124.008 98.8194 125.08 99.0957 126.232 99.092C128.634 99.0843 131.073 97.875 133.092 95.685C136.829 91.6334 137.851 87.3428 135.634 85.0108Z"
                                    fill="#FFBD59"
                                />
                                <path
                                    d="M120.193 80.2874C120.324 80.379 120.461 80.4664 120.598 80.5458C121.916 81.3067 123.512 81.5306 125.145 81.1731C127.652 80.6228 129.909 78.7903 131.508 76.0071C134.468 70.8585 134.539 66.06 131.683 64.0725C128.818 62.0797 124.181 63.8105 120.41 68.2872C118.291 70.8066 117.31 73.5588 117.65 76.0343C117.895 77.8066 118.796 79.3176 120.193 80.2874Z"
                                    fill="#FFBD59"
                                />
                                <path
                                    d="M116.582 96.1458C114.527 91.4934 115.371 86.6765 115.379 86.6279L115.383 86.606C116.195 80.5881 112.672 78.2932 111.968 77.9029C111.266 77.4811 107.517 75.5776 102.705 79.2942C102.665 79.3282 98.4959 82.601 93.8546 83.02C90.0884 83.3571 85.6748 85.5711 84.5879 90.7658C84.5477 90.9342 84.1408 92.7053 84.7527 94.7669C85.8116 98.3138 89.0129 99.8522 91.5138 100.513L91.5278 100.517C91.5527 100.524 94.0331 101.079 96.1606 101.688C97.3241 102.017 98.3944 102.635 99.2613 103.478C100.852 105.016 102.573 106.886 102.588 106.903L102.602 106.915C103.486 107.805 104.356 108.466 105.191 108.948C107.472 110.265 109.503 110.243 110.959 109.897C113.05 109.396 114.38 108.158 114.506 108.039C119.383 103.675 117.329 97.8327 116.582 96.1458Z"
                                    fill="#FFBD59"
                                />
                                <path
                                    d="M27.1721 40.7897C27.5932 38.5274 26.7874 35.9432 24.9008 33.5133C21.5669 29.2158 17.3162 27.3902 14.5677 29.0698C11.8226 30.7484 11.6989 35.1572 14.2606 40.0382C15.6437 42.676 17.6833 44.4764 20.0047 45.1045C21.1164 45.4062 22.2232 45.4167 23.2293 45.1471C23.7273 45.0136 24.2001 44.8138 24.6358 44.5435C25.9711 43.7288 26.8711 42.3947 27.1721 40.7897Z"
                                    fill="black"
                                    fillOpacity="0.79"
                                />
                                <path
                                    d="M25.6924 28.0777C27.1777 28.8459 28.7766 29.0425 30.2432 28.6496C30.4001 28.6075 30.5552 28.5587 30.705 28.5039C32.3055 27.9288 33.5671 26.7025 34.2622 25.054C35.2316 22.7508 34.9959 19.8384 33.601 16.8564C31.1171 11.5562 27.0903 8.68357 23.8033 9.86774C20.5299 11.0482 19.3568 15.7017 20.8837 21.4411C21.7076 24.5432 23.4131 26.8973 25.6924 28.0777Z"
                                    fill="black"
                                    fillOpacity="0.79"
                                />
                                <path
                                    d="M61.0443 16.6164C57.8242 16.5361 55.0558 20.2425 54.3173 25.6312C53.8984 28.6788 54.4927 31.3197 55.9884 33.0683C57.0516 34.3078 58.4981 35.0132 60.0619 35.0511C60.5744 35.0673 61.0838 35.004 61.5817 34.8705C62.5879 34.6009 63.5411 34.0385 64.353 33.2214C66.0459 31.5176 66.9156 28.9378 66.7944 25.9617C66.5724 20.4539 64.2609 16.6976 61.0443 16.6164Z"
                                    fill="black"
                                    fillOpacity="0.79"
                                />
                                <path
                                    d="M46.7861 24.1948C46.9432 24.1673 47.1019 24.1321 47.2554 24.091C48.7254 23.6971 50.0118 22.7273 50.914 21.3194C52.2977 19.1575 52.5977 16.266 51.7601 13.1676C50.2128 7.43362 46.8701 3.99019 43.445 4.60453C40.0097 5.22162 37.9553 9.72369 38.4543 15.5558C38.7373 18.8357 39.9894 21.4758 41.9804 22.9857C43.4067 24.0658 45.1124 24.497 46.7861 24.1948Z"
                                    fill="black"
                                    fillOpacity="0.79"
                                />
                                <path
                                    d="M55.4463 37.9616C50.7029 36.1254 47.8939 32.1222 47.865 32.0825L47.8527 32.0638C44.1716 27.2343 40.0578 28.1026 39.2839 28.3246C38.489 28.523 34.4922 29.8279 33.7174 35.8587C33.7132 35.911 33.0797 41.1729 30.0941 44.751C27.6694 47.6525 26.114 52.3389 29.0186 56.7807C29.1093 56.9282 30.0739 58.4682 31.9644 59.4934C35.2213 61.2527 38.5727 60.0768 40.8085 58.7759L40.8212 58.7688C40.8433 58.7556 42.9899 57.3945 44.9247 56.3204C45.9802 55.7305 47.174 55.4107 48.3831 55.3937C50.5956 55.3565 53.1352 55.462 53.1575 55.4633L53.1755 55.4622C54.4303 55.4659 55.513 55.3183 56.4441 55.0688C58.9885 54.3871 60.409 52.9354 61.1935 51.6614C62.3181 49.8285 62.3835 48.0124 62.3883 47.8393C62.7503 41.305 57.1671 38.6264 55.4463 37.9616Z"
                                    fill="black"
                                    fillOpacity="0.79"
                                />
                            </svg>
                        </div>
                        {/* End SVG Element */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
