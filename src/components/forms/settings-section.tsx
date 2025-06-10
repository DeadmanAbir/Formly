import { Badge } from "../ui/badge";
import { Select } from "../ui/select";
import { Separator } from "../ui/separator";
import { SettingItem } from "./setting-item";

export function SettingsSection() {
	return (
		<div className="space-y-8 px-4">
			{/* General Section */}
			<section className="space-y-6">
				<h2 className="text-xl font-semibold text-gray-900">General</h2>
				<div className="space-y-6">
					<div className="space-y-2">
						<h3 className="text-base font-medium text-gray-800">Language</h3>
						<p className="text-sm text-gray-600">
							Choose in what language the respondents will see your form. This
							applies to the text which is not customized by you e.g. default
							buttons, errors, etc.
						</p>
						<div className="mt-2">
							<Select defaultValue="English" />
						</div>
					</div>
					<Separator />
					<SettingItem
						title="Redirect on completion"
						description="Redirect to a custom URL when the form is submitted."
						enabled={true}
					/>
					<Separator />
					<SettingItem
						title="Progress bar"
						description="The progress bar provides a clear way for respondents to understand how much of the form they have completed, and encourages them to continue until the end."
						enabled={true}
					/>
					<Separator />
					<SettingItem
						title="Partial submissions"
						description="Collect answers from people who filled in a part of your form, but didn't click the submit button. You can't export partial submissions with integrations, nor enable email notifications."
						enabled={false}
						badge={<Badge variant="secondary">Pro</Badge>}
					/>
					<Separator />
					<SettingItem
						title="Tally branding"
						description='Show "Made with Tally" on your form.'
						enabled={true}
						badge={<Badge variant="secondary">Pro</Badge>}
					/>
					<Separator />
					<SettingItem
						title="Submissions data retention"
						description="Automatically delete form submissions after a set period. Enable this option to define how long submissions are stored before they're deleted. When disabled, submissions will be retained until manually deleted."
						enabled={false}
						badge={<Badge variant="secondary">Business</Badge>}
					/>
				</div>
			</section>

			{/* Access Section */}
			<section className="space-y-6">
				<h2 className="text-xl font-semibold text-gray-900">Access</h2>
				<div className="space-y-6">
					<SettingItem
						title="Password protect form"
						description="Enable this setting to require a password before respondents can access the form."
						enabled={false}
					/>
					<Separator />
					<SettingItem
						title="Close form"
						description="People won't be able to respond to this form anymore."
						enabled={false}
					/>
					<Separator />
					<SettingItem
						title="Close form on a scheduled date"
						description="Schedule a date on which the form will be closed for new submissions."
						enabled={false}
					/>
					<Separator />
					<SettingItem
						title="Limit number of submissions"
						description="Set how many submissions you want to receive in total."
						enabled={false}
					/>
					<Separator />
					<SettingItem
						title="Closed form message"
						description="This is what the recipients will see if you closed the form with one of the options above."
						enabled={false}
					/>
				</div>
			</section>

			{/* Email Section */}
			<section className="space-y-6">
				<h2 className="text-xl font-semibold text-gray-900">
					Email notifications
				</h2>
				<div className="space-y-6">
					<SettingItem
						title="Self email notifications"
						description="Get an email for new form submissions."
						enabled={false}
					/>
					<Separator />
					<SettingItem
						title="Respondent email notifications"
						description="Send a customized text email to respondents after form submission."
						enabled={false}
						badge={<Badge variant="secondary">Pro</Badge>}
					/>
				</div>
			</section>
		</div>
	);
}
