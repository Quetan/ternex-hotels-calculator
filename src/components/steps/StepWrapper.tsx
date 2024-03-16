import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
	title: string;
	subtitle?: string;
}

const StepWrapper: FC<IProps> = ({ children, title, subtitle }) => {
	return (
		<div className="w-full flex flex-col gap-6 items-start">
			<div className="flex flex-row items-center gap-1 text-lg">
				<h2 className="font-medium">{title}</h2>
				<span> - </span>
				{subtitle && (
					<p className="text-base text-muted-foreground">{subtitle}</p>
				)}
			</div>
			{children}
		</div>
	);
};

export default StepWrapper;
