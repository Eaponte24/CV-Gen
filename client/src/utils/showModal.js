import { useEffect, useState } from "react";

const showModal = (tokens, newSub) => {
	const [showNewTokenModal, setShowTokenUpgradeModal] = useState(false);
	const [showLowTokensModal, setShowLowTokensModal] = useState(false);
	const [showNoTokensModal, setShowNoTokensModal] = useState(false);

	useEffect(() => {
		if (newSub) {
			setShowTokenUpgradeModal(true);
		} else if (tokens <= 0) {
			setShowNoTokensModal(true);
		} else if (tokens < 4) {
			setShowLowTokensModal(true);
		}
	}, [tokens, newSub]);

	return { showNewTokenModal, showLowTokensModal, showNoTokensModal };
};

export default showModal;
