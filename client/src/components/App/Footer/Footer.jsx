export default function Footer() {
	return (
		<footer class="m-4" id="footer">
			<div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-200 dark:text-gray-200 sm:text-center">
					© {new Date().getFullYear()}{" "}
					<a href="https://cvgen.ai/" class="hover:underline">
						CV-Gen™
					</a>{" "}
					All Rights Reserved.
				</span>
				<ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-200 dark:text-gray-200 sm:mt-0">
					<li>
						<a href="/about" class="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="/privacy" class="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="/licensing" class="mr-4 hover:underline md:mr-6">
							Licensing
						</a>
					</li>
					<li>
						<a href="mailto:support@cvgen.ai" class="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
