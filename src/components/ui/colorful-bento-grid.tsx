"use client";

import { cn } from "@/lib/utils";
import { Gift, Shield, Monitor, Wrench, HardDrive, Headphones } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const ColorfulBentoGrid = () => {
    return (
        <section id='services-grid' className='bg-white rounded-3xl p-4 md:p-8 my-16 max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-end justify-between w-full'>
                <div className='flex flex-col my-8 md:my-12 w-full items-start justify-start gap-4'>
                    <div className='flex flex-col md:flex-row gap-4 items-end w-full justify-between'>
                        <h2 className="relative text-4xl md:text-5xl font-sans font-semibold max-w-xl text-left leading-[1.1em] text-base-content">
                            Premium IT Services, <br />
                            <span>
                                <Gift className="inline-flex text-accent fill-accent-light rotate-12" size={40} strokeWidth={2} />
                            </span>
                            now accessible for all.
                        </h2>
                        <p className='max-w-sm font-medium text-md text-muted'>
                            Working with us means having a complete IT team – security experts, hardware specialists, and support engineers – always ready when you need them.
                        </p>
                    </div>

                    <div className='flex flex-row text-accent gap-6 items-start justify-center'>
                        <p className='text-base whitespace-nowrap font-medium'>+500 Happy Clients</p>
                        <p className='text-base whitespace-nowrap font-medium'>100% Satisfaction Rate</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:items-start md:justify-start gap-4">

                {/* CCTV Solutions - Wide Card */}
                <Link
                    href="/services#cctv"
                    className="md:col-span-2 overflow-hidden hover:scale-[1.02] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-1 transition-all duration-200 ease-in-out h-[330px] relative bg-accent-light rounded-xl flex flex-row items-center gap-8 justify-between px-3 pt-3 pb-6"
                >
                    <div className='relative flex flex-col items-start justify-center ml-4 gap-2 z-10'>
                        <p className='-rotate-1 ml-4 mb-1 text-base-content font-medium'>Professional Installation</p>
                        <h3 className='-rotate-1 text-2xl whitespace-nowrap font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full flex items-center gap-2'>
                            <Shield className="w-5 h-5" />
                            CCTV & Security
                        </h3>
                    </div>
                    <div className="absolute right-4 bottom-4 w-48 h-48 opacity-20">
                        <Shield className="w-full h-full text-accent" />
                    </div>
                </Link>

                {/* Hardware Sales */}
                <Link
                    href="/services#hardware"
                    className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-3 transition-all duration-200 ease-in-out relative bg-highlight-light h-[330px] rounded-xl flex flex-col items-center justify-between px-3 py-6"
                >
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p className='rotate-6 mb-1 text-base-content font-medium'>Dell • HP • Lenovo</p>
                        <h3 className='rotate-6 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full flex items-center gap-2'>
                            <Monitor className="w-5 h-5" />
                            Hardware
                        </h3>
                    </div>
                    <div className="w-32 h-32 opacity-20">
                        <Monitor className="w-full h-full text-highlight" />
                    </div>
                </Link>

                {/* Repair & Maintenance */}
                <Link
                    href="/services#repair"
                    className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:-rotate-3 transition-all duration-200 ease-in-out relative bg-secondary-light h-[330px] rounded-xl flex flex-col items-center justify-between px-5 py-6"
                >
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p className='-rotate-3 mb-1 text-base-content font-medium'>Fast Turnaround</p>
                        <h3 className='-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full flex items-center gap-2'>
                            <Wrench className="w-5 h-5" />
                            Repairs
                        </h3>
                    </div>
                    <div className="w-32 h-32 opacity-20">
                        <Wrench className="w-full h-full text-warning" />
                    </div>
                </Link>

                {/* Data Recovery */}
                <Link
                    href="/services#data"
                    className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-between px-5 py-6"
                >
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p className='-rotate-3 mb-1 text-base-content font-medium'>Critical Recovery</p>
                        <h3 className='-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full flex items-center gap-2'>
                            <HardDrive className="w-5 h-5" />
                            Data Recovery
                        </h3>
                    </div>
                    <div className="w-32 h-32 opacity-20">
                        <HardDrive className="w-full h-full text-neutral" />
                    </div>
                </Link>

                {/* 24/7 Support - Wide Card */}
                <Link
                    href="/contact"
                    className="md:col-span-2 flex items-center justify-between overflow-hidden md:hover:scale-[1.02] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:-rotate-1 transition-all duration-200 ease-in-out relative bg-primary-light h-[330px] rounded-xl px-6 py-6"
                >
                    <div className='flex flex-col items-start justify-center gap-2'>
                        <p className='rotate-3 mb-1 text-base-content font-medium'>Always Here For You</p>
                        <h3 className='rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full flex items-center gap-2'>
                            <Headphones className="w-5 h-5" />
                            24/7 Support
                        </h3>
                        <p className='rotate-3 mt-2 text-sm text-muted max-w-xs'>Get in touch anytime. Our expert team is ready to solve your IT challenges.</p>
                    </div>
                    <div className="w-40 h-40 opacity-20">
                        <Headphones className="w-full h-full text-primary" />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ColorfulBentoGrid;
