import { useState, type FC } from "react";
import StepWrapper from "./StepWrapper";
import { Label } from "../ui/label";
import HelperText from "../HelperText";
import useData from "@/lib/useData";
import { Slider } from "../ui/slider";

const Step3: FC = () => {
	// 0 - low
	// 1 - high
	const [value, setValue] = useState<number>(0);
	const { setData } = useData();

	const onValueChange = (val: number[]) => {
		const v = val[0];

		setValue(v);

		const routersQuantity = Math.floor(v / 70);

		setData((prev) => {
			const connectors = prev.filter((item) => item.type !== "router");
			const routers = prev
				.filter((item) => item.type === "router")
				.map((item) => {
					return {
						...item,
						quantity: routersQuantity,
					};
				});
			return [...connectors, ...routers];
		});
	};

	return (
		<StepWrapper
			title="Шаг 3"
			subtitle="Какую площадь необходимо покрыть беспроводной сетью?"
		>
			{/* <div className="flex flex-row gap-4 items-center"> */}
			<Label htmlFor="area-slider">
				{value} м<sup>2</sup>
			</Label>
			<Slider
				id="area-slider"
				defaultValue={[70]}
				max={1000}
				step={10}
				min={70}
				onValueChange={onValueChange}
				className="w-full"
			/>
			{/* </div> */}
			<HelperText>
				В среднем, одного маршрутизатора достаточно, чтобы покрыть сетью 70 м
				<sup>2</sup>.
			</HelperText>
		</StepWrapper>
	);
};

export default Step3;
