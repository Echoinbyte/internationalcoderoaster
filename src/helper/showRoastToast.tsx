import { toast } from "sonner";

export const showRoastToast = (roast: string) => {
  toast.custom(
    () => (
      <div className="w-full p-4 text-blue-50 bg-blue-900 font-medium border-l-4 border-blue-600 shadow-md rounded-md">
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: roast }} />
        <button
          onClick={() => toast.dismiss()}
          className="mt-2 text-xs text-blue-200 underline hover:text-blue-50 cursor-pointer"
        >
          Close
        </button>
      </div>
    ),
    {
      duration: Infinity,
    }
  );
};
