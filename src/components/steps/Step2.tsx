import { useEffect, useState, type FC } from "react";
import StepWrapper from "./StepWrapper";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import HelperText from "../HelperText";
import useData from "@/lib/useData";
import { DataItemInput } from "@/App";

const helperText = [
	"Используем базовое решение стандарта Wi-Fi 5 AC2100.",
	"Используем продвинутое решение стандарта Wi-Fi 6 AX3200.",
];

const devices: DataItemInput[] = [
	{
		device: "Беспроводной маршрутизатор стандарта AC2100 с ПО Ternex",
		price: 3000,
		quantity: 1,
		type: "router",
	},
	{
		device: "Беспроводной маршрутизатор стандарта AX3200 с ПО Ternex",
		price: 9000,
		quantity: 1,
		type: "router",
	},
];

const Step2: FC = () => {
	// 0 - low
	// 1 - high
	const [value, setValue] = useState<number>(0);
	const { setData } = useData();

	useEffect(() => {
		setData((prev) => {
			const connectors = prev.filter((item) => item.type !== "router");
			return [...connectors, devices[value]];
		});
	}, [value, setData]);

	const onValueChange = (val: string) => {
		const v = Number(val);
		setValue(v);
	};

	return (
		<StepWrapper
			title="Шаг 2"
			subtitle="Ожидаемое количество одновременных подключений?"
		>
			<RadioGroup
				value={String(value)}
				onValueChange={onValueChange}
				className="gap-4"
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="0" id="low" />
					<Label htmlFor="low">До 20 пользователей</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="1" id="high" />
					<Label htmlFor="high">Более 20 пользователей</Label>
				</div>
			</RadioGroup>
			<HelperText>{helperText[value]}</HelperText>
		</StepWrapper>
	);
};

export default Step2;
