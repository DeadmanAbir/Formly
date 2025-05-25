"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm({ onToggle }: { onToggle: () => void }) {
	const router = useRouter();
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
		name: "",
	});

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		alert("sign up");
		const { data, error } = await authClient.signUp.email(
			{
				email: credentials.email,
				password: credentials.password,
				name: credentials.name,
				callbackURL: "/dashboard",
			},
			{
				onRequest: (ctx) => {
					<h1>Signing up...</h1>;
				},
				onSuccess: (ctx) => {
					//redirect to the dashboard or sign in page
					console.log(data);
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
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-semibold text-gray-900">
					Create your Tally account
				</h1>
				<p className="text-gray-500">
					Get started with the simplest way to create forms.
				</p>
			</div>

			<div className="space-y-4">
				<Button
					variant="outline"
					className="w-full h-12 text-gray-600 border-gray-300 hover:bg-gray-50"
				>
					{/* Google Icon */}
					<svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
						<path fill="#4285F4" d="..." />
						{/* other paths omitted for brevity */}
					</svg>
					Continue with Google
				</Button>

				<Button
					variant="outline"
					className="w-full h-12 text-gray-600 border-gray-300 hover:bg-gray-50"
				>
					{/* Apple Icon */}
					<svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
						<path d="..." />
					</svg>
					Continue with Apple
				</Button>
			</div>

			<div className="space-y-4">
				<form onSubmit={handleSignUp}>
					<div className="space-y-2 pb-2">
						<Label
							htmlFor="email"
							className="text-sm font-medium text-gray-700"
						>
							Name
						</Label>
						<Input
							required
							onChange={(e) =>
								setCredentials({ ...credentials, name: e.target.value })
							}
							id="name"
							type="text"
							className="h-12 border-gray-300 rounded-lg"
						/>
						<Label
							htmlFor="email"
							className="text-sm font-medium text-gray-700"
						>
							Email
						</Label>
						<Input
							required
							onChange={(e) =>
								setCredentials({ ...credentials, email: e.target.value })
							}
							id="email"
							type="email"
							className="h-12 border-gray-300 rounded-lg"
						/>
						<Label
							htmlFor="email"
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
					By signing up, you agree to our{" "}
					<button className="text-gray-700 underline hover:text-gray-900">
						Terms & Privacy
					</button>
					.
				</p>
				<p>
					Already have an account?{" "}
					<button
						onClick={onToggle}
						className="text-gray-700 underline hover:text-gray-900"
					>
						Log in
					</button>
					.
				</p>
			</div>
		</div>
	);
}
