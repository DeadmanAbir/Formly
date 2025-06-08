"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Radiation } from "lucide-react";

const Logout = () => {
	const router = useRouter();

	return (
		<Button
			variant="ghost"
			className="w-full text-left flex items-start justify-start text-red-600 font-semibold pl-2 hover:text-red-700"
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
			<Radiation />
			Logout
		</Button>
	);
};

export default Logout;
