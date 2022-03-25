import { useState } from "react";
import { Button } from "@mui/material";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import LoginModal from "../modals/LoginModal/LoginModal";
import "./Header.sass";

const Header = () => {
	const [isLoginModalOpen, setLoginModalOpen] = useState(false);

	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<HeaderLogo />
					<div className="header__buttons">
						<Button variant="contained" onClick={() => setLoginModalOpen(true)}>
							Login
						</Button>
					</div>
				</div>
			</div>
			<LoginModal
				isOpen={isLoginModalOpen}
				onClose={() => {
					setLoginModalOpen(false);
				}}
			/>
		</div>
	);
};

export default Header;
