import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Key, Link2 } from "lucide-react";

export default function SettingsPage() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full py-10">
				<h1 className="text-3xl font-bold mb-6">Settings</h1>

				<Tabs defaultValue="account" className="w-full">
					<TabsList className="grid w-full grid-cols-3 max-w-md border-b rounded-none bg-transparent p-0 mb-8">
						<TabsTrigger
							value="account"
							className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none pb-3 font-medium"
						>
							My account
						</TabsTrigger>
						<TabsTrigger
							value="notifications"
							className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none pb-3 font-medium text-gray-500"
						>
							Notifications
						</TabsTrigger>
						<TabsTrigger
							value="billing"
							className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none pb-3 font-medium text-gray-500"
						>
							Billing
						</TabsTrigger>
					</TabsList>

					<TabsContent value="account" className="space-y-10">
						<div>
							<h2 className="text-base font-medium mb-4">Photo</h2>
							<Avatar className="w-24 h-24">
								<AvatarImage
									src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bRiA1SngiibsOkLM7LeEiPxXpewduU.png"
									alt="Profile photo"
								/>
								<AvatarFallback>SD</AvatarFallback>
							</Avatar>
						</div>

						<div className="space-y-4">
							<div>
								<label
									htmlFor="firstName"
									className="block text-base font-medium mb-2"
								>
									First name
								</label>
								<Input
									id="firstName"
									defaultValue="SANJAY"
									className="max-w-md h-12"
								/>
							</div>

							<div>
								<label
									htmlFor="lastName"
									className="block text-base font-medium mb-2"
								>
									Last name
								</label>
								<Input
									id="lastName"
									defaultValue="DUTT"
									className="max-w-md h-12"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-base font-medium mb-2"
								>
									Email
								</label>
								<div className="flex max-w-md">
									<Input
										id="email"
										defaultValue="sanjayduttyoyohoney@gmail.com"
										className="rounded-r-none h-12"
									/>
									<Button
										variant="outline"
										className="rounded-l-none border-l-0 h-12"
									>
										Change email
									</Button>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-base font-medium mb-2"
								>
									Password
								</label>
								<div className="flex max-w-md">
									<Input
										id="password"
										type="password"
										value="••••••••"
										className="rounded-r-none h-12"
										readOnly
									/>
									<Button
										variant="outline"
										className="rounded-l-none border-l-0 h-12"
									>
										Set password
									</Button>
								</div>
							</div>

							<div className="pt-2">
								<Button className="bg-black text-white hover:bg-black/90 h-10 px-4 rounded">
									Update
								</Button>
							</div>
						</div>

						<div className="border-t pt-10">
							<div className="flex items-center gap-2 mb-2">
								<Key className="h-5 w-5" />
								<h2 className="text-lg font-medium">
									Two-factor authentication
								</h2>
								<span className="text-sm text-gray-500 ml-1">Disabled</span>
							</div>
							<p className="text-gray-600 mb-4">
								Secure your account with two-factor authentication which adds an
								additional layer of security during login.
							</p>
							<Button className="bg-black text-white hover:bg-black/90 h-10 px-4 rounded">
								Set up
							</Button>
						</div>

						<div className="border-t pt-10">
							<div className="flex items-center gap-2 mb-2">
								<Link2 className="h-5 w-5" />
								<h2 className="text-lg font-medium">Connected accounts</h2>
							</div>
							<p className="text-gray-600 mb-6">
								Connect your Tally account with Google or Apple to enable
								faster, secure and more convenient access.
							</p>

							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<svg viewBox="0 0 24 24" className="h-6 w-6">
											<path
												d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
												fill="#4285F4"
											/>
											<path
												d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
												fill="#34A853"
											/>
											<path
												d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
												fill="#FBBC05"
											/>
											<path
												d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
												fill="#EA4335"
											/>
										</svg>
										<span className="font-medium">Google</span>
										<div className="w-2 h-2 rounded-full bg-green-500"></div>
									</div>
									<Button variant="outline" className="h-9">
										Disconnect
									</Button>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<svg viewBox="0 0 24 24" className="h-6 w-6">
											<path
												d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.23 2.32-.94 3.7-.8 1.65.17 2.9.93 3.7 2.35-3.27 1.98-2.71 5.77.47 7.35-.5 1.34-1.17 2.67-2.95 4.28"
												fill="currentColor"
											/>
											<path
												d="M12.03 7.25c-.15-2.23 1.66-4.22 3.87-4.44.26 2.57-1.84 4.42-3.87 4.44"
												fill="currentColor"
											/>
										</svg>
										<span className="font-medium">Apple</span>
									</div>
									<Button variant="outline" className="h-9">
										Connect
									</Button>
								</div>
							</div>
						</div>

						<div className="border-t pt-10">
							<div className="flex items-center gap-2 mb-2">
								<AlertTriangle className="h-5 w-5 text-red-500" />
								<h2 className="text-lg font-medium">Danger zone</h2>
							</div>
							<p className="text-gray-600 mb-4">
								This will permanently delete your entire account. All your
								forms, submissions and workspaces will be deleted.
							</p>
							<Button
								variant="destructive"
								className="bg-red-600 hover:bg-red-700"
							>
								Delete account
							</Button>
						</div>
					</TabsContent>

					<TabsContent value="notifications">
						<div className="text-center py-10 text-gray-500">
							Notification settings will appear here
						</div>
					</TabsContent>

					<TabsContent value="billing">
						<div className="text-center py-10 text-gray-500">
							Billing information will appear here
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
