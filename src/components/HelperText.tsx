import type { FC, PropsWithChildren } from "react";

const HelperText: FC<PropsWithChildren> = ({ children }) => {
	return <p className="text-muted-foreground text-sm">{children}</p>;
};

export default HelperText;
