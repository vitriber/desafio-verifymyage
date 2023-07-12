import Image from "next/image";

export default function HeaderForm(): JSX.Element {
    return (
        <>
            <section className="flex items-center justify-between">
                <Image
                    className="hidden md:block"
                    src="/logo.svg"
                    width={135}
                    height={25}
                    alt="logo"
                    priority
                />
                <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
                    <strong className="text-lg">5</strong>
                    <span className="text-sm">/5</span>
                </div>
            </section>
            <section className="hidden md:flex w-[44px] h-[44px] mt-[66px] rounded-full bg-grey items-center justify-center hover:bg-white-smoke cursor-pointer">
            <Image
                src="/back_icon.svg"
                width={14}
                height={14}
                alt="back icon"
                priority
                />
            </section>
            <section className="hidden md:block mt-5">
                <h1 className="text-4.5xl font-semibold">Join VerifyMyAge</h1>
                <p className="text-lg font-thin"> Let's start by setting up your login details.</p>
            </section>
        </>
    )
}