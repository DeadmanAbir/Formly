export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
			<div className="text-center space-y-6">
				{/* Illustration */}
				<div className="relative w-24 h-24 mx-auto mb-2">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						className="w-full h-full text-gray-400"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</div>

				{/* Text content */}
				<h2 className="text-xl font-semibold text-gray-900">No forms yet</h2>
				<p className="text-gray-500">
					Roll up your sleeves and let's get started.
					<br />
					It's as simple as one-two-three.
				</p>

				{/* New form button */}
				<button
					className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
					New form
				</button>
			</div>
		</div>
	);
}
