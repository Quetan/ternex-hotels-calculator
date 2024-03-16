import type { FC, PropsWithChildren } from "react";

const CalculatorWrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-col gap-6 w-full rounded-lg border border-accent py-6 px-4 bg-slate-50/10 shadow-xl">
			{children}
		</div>
	);
};

export default CalculatorWrapper;
