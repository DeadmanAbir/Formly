import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
			<Link href="/dashboard" className="text-blue-500 hover:underline">
				Go to Dashboard
			</Link>
		</div>
	);
}
