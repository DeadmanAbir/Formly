"use client";

import SignInForm from "@/components/auth/signin-form";
import SignUpForm from "@/components/auth/signup-form";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function AuthPage() {
	const [isSignUp, setIsSignUp] = useState(true);

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="w-full max-w-md space-y-6">
				{isSignUp ? (
					<SignUpForm onToggle={() => setIsSignUp(false)} />
				) : (
					<SignInForm onToggle={() => setIsSignUp(true)} />
				)}
			</div>
		</div>
	);
}
