import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loding = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex flex-col gap-2 items-center justify-center z-50">
      <DotLottieReact src="/assets/loading.lottie" loop autoplay className="w-64 h-64" />
    </div>
  );
};
export default Loding;
