"use client";

export default function LoaderButton({
  title,
  loadingText,
  isPending,
  type = "submit", // default to submit
}) {
  return (
    <button
      type={type} // now acts as a submit button in forms
      disabled={isPending}
      className={`group relative w-full h-[54px] rounded-full overflow-hidden transition-all duration-300 
        ${
          isPending
            ? "bg-black/80 cursor-not-allowed"
            : "bg-black hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] cursor-pointer"
        } text-white active:scale-[0.98]`}
    >
      <div className="relative z-10 flex items-center justify-center gap-3">
        {!isPending ? (
          <span className="font-medium tracking-tight text-[14px] uppercase">
            {title}
          </span>
        ) : (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="font-medium tracking-tight text-[14px] uppercase">
              {loadingText}
            </span>
          </>
        )}
      </div>

      {!isPending && (
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
    </button>
  );
}