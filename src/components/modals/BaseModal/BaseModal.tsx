import { ReactElement } from "react";
import { Modal } from "@mui/material";
import "./BaseModal.sass";

interface IBaseModal {
	/*
	 * state of the modal window
	 */
	isOpen: boolean;
	/*
	 * modal close handler
	 */
	onClose: () => void;
	/*
	 * modal title
	 */

	title: string;
	/*
	 * modal content
	 */
	children: ReactElement;
}

const BaseModal = ({
	isOpen,
	title,
	onClose,
	children,
	...other
}: IBaseModal) => (
	<Modal open={isOpen} onClose={onClose} {...other}>
		<div className="body-modal">
			<div className="header-modal">{title}</div>
			<div className="content-modal">{children}</div>
		</div>
	</Modal>
);

export default BaseModal;
