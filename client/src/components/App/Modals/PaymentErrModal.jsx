import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Example() {
	return (
		<div className="rounded-md bg-yellow-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<ExclamationTriangleIcon
						className="h-5 w-5 text-yellow-400"
						aria-hidden="true"
					/>
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-yellow-800">Head's up</h3>
					<p className="text-sm text-yellow-700">
						You have no credits left.{" "}
						<a
							href="/pricing"
							className="font-medium text-yellow-700 underline hover:text-yellow-600"
						>
							Upgrade your account to add more credits.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
