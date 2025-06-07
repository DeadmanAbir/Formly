import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Plus } from "lucide-react";

const EmptyState = ({ uuid }: { uuid: string }) => {
	return (
		<div className="text-center space-y-5 h-full">
			<div className="relative  mx-auto mb-2">
				<Image
					src="/empty-state.png"
					alt="empty-state"
					width={300}
					height={300}
				/>
			</div>

			<h2 className="text-xl font-semibold text-gray-900">No forms yet</h2>
			<div className="text-gray-500">
				Roll up your sleeves and let's get started.
				<br />
				It's as simple as one-two-three.
			</div>

			{/* New form button */}
			<Link href={`/forms/${uuid}/edit`} className="block">
				<Button
					variant="default"
					size="default"
					className="inline-flex items-center px-4  bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					<Plus />
					New form
				</Button>
			</Link>
		</div>
	);
};

export default EmptyState;
