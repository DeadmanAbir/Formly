import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const FormsOptions = () => {
	return (
		<>
			{/* Quick Actions */}
			<div className="flex flex-col space-y-4">
				<Button variant="outline" className="justify-start text-gray-600">
					<span className="mr-2">⌘</span> Press Enter to start from scratch
				</Button>
				<Button variant="outline" className="justify-start text-gray-600">
					<span className="mr-2">📄</span> Use a template
				</Button>
			</div>
			{/* Help Text */}
			<div className="space-y-4">
				<p className="text-gray-600">
					Tally is a form builder that{" "}
					<span className="text-pink-500">works like a doc</span>.
				</p>
				<p className="text-gray-600">
					Just type <span className="font-mono">/</span> to insert form blocks
					and <span className="font-mono">@</span> to mention question answers.
				</p>
			</div>
			{/* Links Grid */}
			<div className="grid grid-cols-2 gap-6">
				{/* Get Started */}
				<Card>
					<CardContent className="pt-6">
						<h3 className="text-lg font-semibold mb-4">Get started</h3>
						<div className="space-y-3">
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">✏️</span> Create your first form
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">📄</span> Get started with templates
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">🔗</span> Embed your form
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">❓</span> Help center
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">⚡</span> Learn about Tally Pro
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* How-to Guides */}
				<Card>
					<CardContent className="pt-6">
						<h3 className="text-lg font-semibold mb-4">How-to guides</h3>
						<div className="space-y-3">
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">🔄</span> Conditional logic
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">🧮</span> Calculator
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">👁️</span> Hidden fields
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">@</span> Mentions
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<span className="mr-2">💰</span> Collect payments
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default FormsOptions;
