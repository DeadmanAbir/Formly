import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Integrations() {
	return (
		<div className="container mx-auto px-4 py-12 max-w-5xl">
			<div className="mb-10">
				<h1 className="text-2xl font-semibold text-gray-800 mb-2">
					Discover integrations
				</h1>
				<p className="text-gray-600">
					Make Tally even more powerful by using these tools. Check out our{" "}
					<Link href="#" className="text-gray-800 underline underline-offset-2">
						roadmap
					</Link>{" "}
					for upcoming integrations and to request new ones.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* Google Sheets */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Google Sheets icon"
								className="bg-emerald-100 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Google Sheets</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to a sheet
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Notion */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Notion icon"
								className="bg-gray-100 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Notion</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to Notion
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Airtable */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Airtable icon"
								className="bg-blue-50 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Airtable</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to Airtable
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Webhooks */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Webhooks icon"
								className="bg-red-50 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Webhooks</h3>
							<p className="text-gray-600 text-sm">
								Send events for new submissions to HTTP endpoints
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Slack */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Slack icon"
								className="bg-purple-50 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Slack</h3>
							<p className="text-gray-600 text-sm">
								Send Slack messages for new submissions
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Zapier */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Zapier icon"
								className="bg-orange-100 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Zapier</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to your favorite tools
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Make */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Make icon"
								className="bg-purple-100 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Make</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to your favorite tools
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Google Analytics */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Google Analytics icon"
								className="bg-orange-50 p-1 rounded"
							/>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<h3 className="font-semibold text-gray-800">
									Google Analytics
								</h3>
								<Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 text-xs font-medium">
									Pro
								</Badge>
							</div>
							<p className="text-gray-600 text-sm">
								Analyze traffic sources, visitor behavior and time spent
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Meta Pixel */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Meta Pixel icon"
								className="bg-blue-100 p-1 rounded"
							/>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<h3 className="font-semibold text-gray-800">Meta Pixel</h3>
								<Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 text-xs font-medium">
									Pro
								</Badge>
							</div>
							<p className="text-gray-600 text-sm">
								Measure and optimize your ad campaigns
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Coda */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Coda icon"
								className="bg-red-50 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Coda</h3>
							<p className="text-gray-600 text-sm">Send submissions to Coda</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Pipedream */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Pipedream icon"
								className="bg-green-100 p-1 rounded"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">Pipedream</h3>
							<p className="text-gray-600 text-sm">
								Send submissions to your favorite tools
							</p>
						</div>
					</div>
					<Link href="#" className="text-blue-500 font-medium text-sm mt-auto">
						Connect
					</Link>
				</div>

				{/* Excel */}
				<div className="flex flex-col">
					<div className="flex items-start gap-3 mb-2">
						<div className="w-8 h-8 mt-1">
							<Image
								src="/placeholder.svg?height=32&width=32"
								width={32}
								height={32}
								alt="Excel icon"
								className="bg-green-50 p-1 rounded"
							/>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<h3 className="font-semibold text-gray-800">Excel</h3>
								<Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 text-xs font-medium">
									External
								</Badge>
							</div>
							<p className="text-gray-600 text-sm">
								Export your submissions to an Excel spreadsheet
							</p>
						</div>
					</div>
					<div className="flex gap-3 mt-auto">
						<Link href="#" className="text-orange-500 font-medium text-sm">
							Zapier
						</Link>
						<Link href="#" className="text-purple-600 font-medium text-sm">
							Make
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
