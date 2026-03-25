import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "./-sidebar";

export const Route = createFileRoute("/admin")({
	async beforeLoad(ctx) {
		const session = await ctx.context.orpc.users.session.get.call();
		if (session?.user.role !== "ADMIN") {
			throw notFound();
		}

		return {
			session,
		};
	},
	component: AdminLayout,
});

function AdminLayout() {
	return (
		<SidebarProvider className="max-w-screen bg-secondary overflow-hidden p-4">
			<AdminSidebar />
			<main className="overflow-hidden grow flex lg:p-0">
				<Outlet />
			</main>
		</SidebarProvider>
	);
}
