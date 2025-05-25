"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm({ onToggle }: { onToggle: () => void }) {
	const router = useRouter();
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		alert("sign in");
		const { data, error } = await authClient.signIn.email(
			{
				email: credentials.email,
				password: credentials.password,

				callbackURL: "/dashboard",

				rememberMe: true,
			},
			{
				onSuccess: (ctx) => {
					alert(ctx.data);
					router.push("/dashboard");
				},
				onError: (ctx) => {
					// display the error message
					alert(ctx.error.message);
				},
			}
		);
	};
	return (
		<div className="space-y-6">
			<div className="text-center">
				<h1 className="text-3xl font-semibold text-gray-900">Welcome back</h1>
			</div>

			<div className="space-y-4">
				{/* Google and Apple Sign In */}
				<Button
					variant="outline"
					className="w-full h-12 text-gray-600 border-gray-300 hover:bg-gray-50"
				>
					{/* Google Icon */}
					<svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
						<path
							fill="#4285F4"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="#34A853"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="#FBBC05"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="#EA4335"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
					Continue with Google
				</Button>

				<Button
					variant="outline"
					className="w-full h-12 text-gray-600 border-gray-300 hover:bg-gray-50"
				>
					{/* Apple Icon */}
					<svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12.017 0C5.396 0 .029 5.367.029 11.987..." />
					</svg>
					Continue with Apple
				</Button>
			</div>

			<div className="space-y-4">
				<form onSubmit={handleSignIn}>
					<div className="space-y-2 pb-2">
						<Label
							htmlFor="signin-email"
							className="text-sm font-medium text-gray-700"
						>
							Email
						</Label>
						<Input
							required
							onChange={(e) =>
								setCredentials({ ...credentials, email: e.target.value })
							}
							id="signin-email"
							type="email"
							className="h-12 border-gray-300 rounded-lg"
						/>
					</div>
					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-sm font-medium text-gray-700"
						>
							Password
						</Label>
						<Input
							required
							onChange={(e) =>
								setCredentials({ ...credentials, password: e.target.value })
							}
							id="password"
							type="password"
							className="h-12 border-gray-300 rounded-lg"
						/>
					</div>
					<Button
						type="submit"
						className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg"
					>
						Continue
					</Button>
				</form>
			</div>

			<div className="text-center text-sm text-gray-500 space-y-2">
				<p>
					{"Don't have an account yet?"}{" "}
					<button
						onClick={onToggle}
						className="text-gray-700 underline hover:text-gray-900"
					>
						Sign up
					</button>
				</p>
				<p>
					Forgot password?{" "}
					<button className="text-gray-700 underline hover:text-gray-900">
						Reset
					</button>
				</p>
			</div>
		</div>
	);
}
