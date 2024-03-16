import type { FC } from "react";

interface ITitle {
	value: string;
}

const Title: FC<ITitle> = ({ value }) => {
	return (
		<h1 className="text-main text-3xl font-medium leading-tight tracking-tight">
			{value}
		</h1>
	);
};

export default Title;
