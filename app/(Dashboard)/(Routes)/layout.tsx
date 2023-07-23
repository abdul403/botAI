import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div
        className="hidden h-full md:flex md:flex-col md:fixed md-inset-y-0 md:w-72
            bg-gray-900
            "
      >
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
