import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { PET_CATEGORIES } from '@/config';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1f0832]">
            <MaxWidthWrapper className="py-10">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-full lg:col-span-1">
                        <a
                            className="flex-none text-xl font-semibold text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            PetHub
                        </a>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Adopt or get Involved</h4>

                        <div className="mt-3 grid space-y-3">
                            {PET_CATEGORIES.map((category) => {
                                if (category.id !== 'reptiles' && category.id !== 'fishes') {
                                    return (
                                        <Link
                                            key={category.id}
                                            className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                                            href={`/category?category=${category.id}`}
                                        >
                                            {category.label}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Company</h4>

                        <div className="mt-3 grid space-y-3">
                            <a
                                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                                href="#"
                            >
                                About us
                            </a>
                            <a
                                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h4 className="font-semibold text-gray-100">PetHub Newsletter</h4>

                        <form>
                            <div className="mt-4 flex flex-col items-center gap-2 rounded-lg bg-white p-2 sm:flex-row sm:gap-3">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        id="hero-input"
                                        name="hero-input"
                                        className="block w-full rounded-lg border-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <a
                                    className="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-blue-600 p-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                                    href="#"
                                >
                                    Subscribe
                                </a>
                            </div>
                            <p className="mt-3 text-sm text-gray-400">
                                Get the latest news and updates.
                            </p>
                        </form>
                    </div>
                </div>
                <div className="mt-5 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">
                            © 2023 PetHub. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <a
                            className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                            href="https://github.com/rosu-catalin/petshop"
                        >
                            <Github />
                        </a>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
