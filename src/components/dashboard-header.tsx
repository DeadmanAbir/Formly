import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const DashboardHeader = () => {
	return (
		<div className="flex flex-row gap-4 items-center justify-between">
			<Input placeholder="Enter text here" className="border p-2" />
			<Button variant="default" size="default">
				Submit
			</Button>
		</div>
	);
};
