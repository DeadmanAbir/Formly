"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
	const router = useRouter();

	return (
		<Button
			variant="ghost"
			className="w-full text-left flex items-start justify-start"
			onClick={async () => {
				await authClient.signOut({
					fetchOptions: {
						onSuccess: () => {
							router.push("/onboard");
						},
						onError: (ctx) => {
							// display the error message
							alert(ctx.error.message);
						},
					},
				});
			}}
		>
			Logout
		</Button>
	);
};

export default Logout;
