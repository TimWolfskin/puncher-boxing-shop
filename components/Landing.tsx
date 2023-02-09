import Image from "next/image";
import React from "react";
import Button from "./Button";


function Landing () {
    return (
        <section className="mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
            <div className="relative hidden h-[-450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
                <Image src="/gloves.jpg" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className="">
                <p className="tracking-wide uppercase text-2xl mb-10">NOW IN STOCK</p>
                <h2 className="tracking-wide font-semibold text-5xl uppercase font-logo max-w-2xl mb-12">Professional gloves EVERLAST MX Pro Fight</h2>
                <div className="">
                    <Button title="SHOP NOW" />
                </div>
            </div>
        </section>
    )
}

export default Landing