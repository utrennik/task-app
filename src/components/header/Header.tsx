import "./Header.sass";
import { Button } from "@mui/material";
import logo from "../../../public/coffee.svg";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<div className="header__logo logo">
						<div className="logo__pic">
							<img
								src={process.env.PUBLIC_URL + "/img/coffee.svg"}
								alt="Task app"
							/>
						</div>
						<div className="logo__text">Task/App</div>
					</div>
					<div className="header__buttons">
						<Button variant="contained">Login</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
