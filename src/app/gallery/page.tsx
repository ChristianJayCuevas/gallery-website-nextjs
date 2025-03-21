"use client";
import BackgroundLayout from "../components/Background";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
export default function Gallery() {
    const router = useRouter();
    const pathname = usePathname(); // Get current route

    useEffect(() => {
        if (pathname === "/gallery") {
            router.refresh();
        }
    }, [pathname, router]);
    return (
        <BackgroundLayout>

            <div className="navbar fixed top-0 left-0 w-full z-50 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Jay & Meme</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-20"
            >
                <figure>
                    <Image
                        src="/images/Me & Meme.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Karaoke Date
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Me & My Baby Meme at SM North Karaoke Hub!</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Date</div>
                        <div className="badge badge-outline">Personal Life</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.5 }}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-10"
            >
                <figure>
                    <Image
                        src="/images/Me & Meme 2.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Just Chilling
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Selfie on some spots in SM North!</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Date</div>
                        <div className="badge badge-outline">Personal Life</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.5 }}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-10"
            >
                <figure>
                    <Image
                        src="/images/Me & Meme 3.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        At Hawker Chan
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Me & My Baby Meme trying Hawker Chan!</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Date</div>
                        <div className="badge badge-outline">Personal Life</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.5 }}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-10"
            >
                <figure>
                    <Image
                        src="/images/Foods 1.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Hawker Chan Food
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Me & My Baby Meme orders in Hawker Chan (Very Delicious Hehe)</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Food</div>
                        <div className="badge badge-outline">Restaurant</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.5}}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-10"
            >
                <figure>
                    <Image
                        src="/images/Me & meme 4.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Diamond Painting
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Me & My Baby Meme tries Diamond Painting!</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Art</div>
                        <div className="badge badge-outline">Recreational</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.5 }}
                className="card z-20 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg shadow-xl mt-10"
            >
                <figure>
                    <Image
                        src="/images/Foods 2.jpg"
                        width={400}   // Adjust based on your layout
  height={300} 
                        alt="Me & Meme" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        KimBob Foods
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Me & My Baby Meme orders in KimBob (So tasty)</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Food</div>
                        <div className="badge badge-outline">Restaurant</div>
                    </div>
                </div>
            </motion.div>
        </BackgroundLayout>
    )
}