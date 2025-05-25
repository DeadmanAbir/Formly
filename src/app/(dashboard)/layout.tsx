import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(), // you need to pass the headers object.
	});

	if (!session) {
		return redirect("/onboard");
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				<DashboardHeader />
				{children}
			</main>
		</SidebarProvider>
	);
}
