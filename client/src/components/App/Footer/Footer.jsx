export default function Footer() {
	return (
		<footer className="m-4" id="footer">
			<div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-gray-200 dark:text-gray-200 sm:text-center">
					© {new Date().getFullYear()}{" "}
					<a href="https://cvgen.ai/" className="hover:underline">
						CV-Gen™
					</a>{" "}
					All Rights Reserved.
				</span>
				<ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-200 dark:text-gray-200 sm:mt-0">
					<li>
						<a href="/about" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="/privacy" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="/licensing" className="mr-4 hover:underline md:mr-6">
							Licensing
						</a>
					</li>
					<li>
						<a href="mailto:support@cvgen.ai" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
