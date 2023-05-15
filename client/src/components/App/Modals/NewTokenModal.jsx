import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function NewTokenModal() {
	return (
		<div className="rounded-md bg-green-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<CheckCircleIcon
						className="h-5 w-5 text-green-400"
						aria-hidden="true"
					/>
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-green-800">
						Order completed
					</h3>
					<div className="mt-2 text-sm text-green-700">
						<p>
							Thanks for supporiting CV-Gen, we wish you the best of luck on
							your job search!
						</p>
					</div>
					<div className="mt-4">
						<div className="-mx-2 -my-1.5 flex">
							<button
								type="button"
								href="https://billing.stripe.com/p/login/5kA03U9jh2iCh0c144"
								className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
							>
								Billing
							</button>
							<button
								type="button"
								className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
							>
								Dismiss
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
