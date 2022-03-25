import BaseModal from "../BaseModal/BaseModal";

interface ILoginModal {
	/*
	 * state of the modal window
	 */
	isOpen: boolean;
	/*
	 * modal close handler
	 */
	onClose: () => void;
}

const LOGIN_TITLE = `Login`;

const LoginModal = ({ ...props }: ILoginModal) => (
	<BaseModal title={LOGIN_TITLE} {...props}>
		<div>Login modal content</div>
	</BaseModal>
);

export default LoginModal;
