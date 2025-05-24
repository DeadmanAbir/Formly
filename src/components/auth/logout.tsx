"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
	const router = useRouter();
	return (
		<Button
			onClick={async () => {
				await authClient.signOut({
					fetchOptions: {
						onSuccess: () => {
							router.push("/onboard");
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
