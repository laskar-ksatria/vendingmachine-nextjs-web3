import Image from "next/image";

type LoaderType = {
  title?: string;
  subtitle?: string;
};

export default function Loader({
  title = "Transaction is in progress",
  subtitle = "Please wait...",
}: LoaderType) {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.9)] flex items-center justify-center flex-col">
      <Image
        src={"/img/loader.svg"}
        alt="loader"
        width={100}
        height={100}
        className="object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        {title} <br /> {subtitle}
      </p>
    </div>
  );
}
