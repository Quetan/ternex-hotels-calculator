import { useState, type FC } from "react";
import StepWrapper from "./StepWrapper";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import HelperText from "../HelperText";
import useData from "@/lib/useData";
import { DataItemInput } from "@/App";

const helperText = [
	"Отлично! Подключим кабель напрямую к нашему роутеру.",
	"Предложим роутер или модем с возможностью установить SIM – карту от оператора связи.",
	"Предложим роутер или модем с возможностью установить SIM – карту от оператора связи и направленную, панельную антену для усиления сигнала. Порекомендуем партнерский тариф от оператора сотовой связи.",
	"Предложим роутер или модем с возможностью установить SIM – карту от оператора связи и направленную, сферическую антену (тарелку) для усиления сигнала. Порекомендуем партнерский тариф от оператора сотовой связи.",
	"Единственный вариант - использование спутникового интернета.",
];

const devices: DataItemInput[][] = [
	[],
	[
		{
			device:
				"Роутер или модем с возможностью установить SIM – карту от оператора",
			price: 5000,
			quantity: 1,
			type: "connector",
		},
	],
	[
		{
			device:
				"Роутер или модем с возможностью установить SIM – карту от оператора",
			price: 5000,
			quantity: 1,
			type: "connector",
		},
		{
			device: "Антенна направленная панельная",
			price: 2000,
			quantity: 1,
			type: "connector",
		},
		{
			device: " Комплект крепежа для антенны и кабелей",
			price: 900,
			quantity: 1,
			type: "connector",
		},
	],
	[
		{
			device:
				"Роутер или модем с возможностью установить SIM – карту от оператора",
			price: 5000,
			quantity: 1,
			type: "connector",
		},
		{
			device: "Антенна направленная сферическая",
			price: 7000,
			quantity: 1,
			type: "connector",
		},
		{
			device: " Комплект крепежа для антенны и кабелей",
			price: 2500,
			quantity: 1,
			type: "connector",
		},
	],
	[
		{
			device: "Абонентский терминал для подключения спутникового интернета",
			price: 70000,
			quantity: 1,
			type: "connector",
		},
	],
];

const Step1: FC = () => {
	// 0 - stable LAN
	// 1 - stable WAN
	// 2 - slow stable WAN
	// 3 - slow unstable WAN
	// 4 - no network
	const [value, setValue] = useState<number>(0);

	const { setData } = useData();

	const onValueChange = (val: string) => {
		const v = Number(val);
		setValue(v);
		setData(devices[v]);
	};

	return (
		<StepWrapper
			title="Шаг 1"
			subtitle="Есть ли на объекте доступ в сеть интернет?"
		>
			<RadioGroup
				value={String(value)}
				onValueChange={onValueChange}
				className="gap-4"
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="0" id="stable-LAN" />
					<Label htmlFor="stable-LAN">Есть кабельное подключение</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="1" id="stable-WAN" />
					<Label htmlFor="stable-WAN">
						Есть устойчивый интернет от сотового оператора
					</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="2" id="slow-stable-WAN" />
					<Label htmlFor="slow-stable-WAN">
						Сотовая связь без перебоев, но интернет медленный
					</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="3" id="slow-unstable-WAN" />
					<Label htmlFor="slow-unstable-WAN">
						Сотовая связь периодически пропадает / интернета практически нет
					</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="4" id="no-network" />
					<Label htmlFor="no-network">
						Связи нет, мобильная связь начинает ловить за несколько километров
						от объекта
					</Label>
				</div>
			</RadioGroup>
			<HelperText>{helperText[value]}</HelperText>
		</StepWrapper>
	);
};

export default Step1;
