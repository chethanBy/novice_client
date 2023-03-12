import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-screen">
			<h1>Header</h1>
			{children}
		</div>
	);
};

export default Header;
