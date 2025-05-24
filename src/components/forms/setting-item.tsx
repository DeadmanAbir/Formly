import type { ReactNode } from "react";
import { Switch } from "../ui/switch";

interface SettingItemProps {
	title: string;
	description: string;
	enabled: boolean;
	badge?: ReactNode;
}

export function SettingItem({
	title,
	description,
	enabled,
	badge,
}: SettingItemProps) {
	return (
		<div className="flex items-start justify-between gap-4">
			<div className="space-y-1 flex-1">
				<div className="flex items-center gap-2">
					<h3 className="text-base font-medium text-gray-800">{title}</h3>
					{badge && badge}
				</div>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
			<Switch checked={enabled} />
		</div>
	);
}
