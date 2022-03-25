import "./HeaderLogo.sass";

export const HeaderLogo = () => {
	const logoURL = `${process.env.PUBLIC_URL}/img/coffee.svg`;

	return (
		<div className="header__logo logo">
			<div className="logo__pic">
				<img src={logoURL} alt="Task app" />
			</div>
			<div className="logo__text">Task/App</div>
		</div>
	);
};
