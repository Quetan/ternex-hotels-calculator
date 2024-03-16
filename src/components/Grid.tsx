import type { FC, PropsWithChildren } from "react";

const Grid: FC<PropsWithChildren> = ({ children }) => {
	return <div className="grid grid-cols-[1fr_20px_1fr] gap-4">{children}</div>;
};

export default Grid;
