import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
	{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
	{
		name: "Free",
		id: "tier-free",
		href: "/Questionnaire",
		price: { monthly: "Free" },
		description:
			"For the applicant that wants to stand out from the crowd. Always free.",
		features: ["7 cover letters per week"],
		featured: false,
		cta: "Generate",
	},
	{
		name: "Pro",
		id: "tier-pro",
		href: "#pro",
		price: { monthly: "$3", annually: "$12" },
		description:
			"For the competitive job-seeker. Generate a custom resume for every application.",
		features: [
			"Resume generator",
			"Pracically unlimited cover letters",
			"No ads",
		],
		featured: false,
		cta: "Subscribe",
	},
	{
		name: "Supporter",
		id: "tier-supporter",
		href: "https://www.buymeacoffee.com/fr5drjnkq7M",
		price: "Custom",
		description:
			"Donate what you think is fair to support the ongoing development of CVGen.",
		features: [
			"Beta access to new features",
			"Discord access to help direct CVGen development",
			"No ads",
		],
		featured: true,
		cta: "Donate",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [frequency, setFrequency] = useState(frequencies[0]);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">
						Plans
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Fair pricing for all job-seekers.
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
					quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
				</p>
				<div className="mt-16 flex justify-center">
					<RadioGroup
						value={frequency}
						onChange={setFrequency}
						className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
					>
						<RadioGroup.Label className="sr-only">
							Payment frequency
						</RadioGroup.Label>
						{frequencies.map((option) => (
							<RadioGroup.Option
								key={option.value}
								value={option}
								className={({ checked }) =>
									classNames(
										checked ? "bg-indigo-600 text-white" : "text-gray-500",
										"cursor-pointer rounded-full px-2.5 py-1"
									)
								}
							>
								<span>{option.label}</span>
							</RadioGroup.Option>
						))}
					</RadioGroup>
				</div>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								tier.featured ? "bg-gray-900 ring-gray-900" : "ring-gray-200",
								"rounded-3xl p-8 ring-1 xl:p-10"
							)}
						>
							<h3
								id={tier.id}
								className={classNames(
									tier.featured ? "text-white" : "text-gray-900",
									"text-lg font-semibold leading-8"
								)}
							>
								{tier.name}
							</h3>
							<p
								className={classNames(
									tier.featured ? "text-gray-300" : "text-gray-600",
									"mt-4 text-sm leading-6"
								)}
							>
								{tier.description}
							</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span
									className={classNames(
										tier.featured ? "text-white" : "text-gray-900",
										"text-4xl font-bold tracking-tight"
									)}
								>
									{typeof tier.price === "string"
										? tier.price
										: tier.price[frequency.value]}
								</span>
								{typeof tier.price !== "string" ? (
									<span
										className={classNames(
											tier.featured ? "text-gray-300" : "text-gray-600",
											"text-sm font-semibold leading-6"
										)}
									>
										{frequency.priceSuffix}
									</span>
								) : null}
							</p>
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.featured
										? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
										: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600",
									"mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								)}
							>
								{tier.cta}
							</a>
							<ul
								role="list"
								className={classNames(
									tier.featured ? "text-gray-300" : "text-gray-600",
									"mt-8 space-y-3 text-sm leading-6 xl:mt-10"
								)}
							>
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											className={classNames(
												tier.featured ? "text-white" : "text-indigo-600",
												"h-6 w-5 flex-none"
											)}
											aria-hidden="true"
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
