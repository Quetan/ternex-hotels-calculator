import { DataItemInput, DataItemOutput } from "@/App";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import useData from "@/lib/useData";
import { FC } from "react";

const generateData = (items: DataItemInput[]): DataItemOutput[] => {
	const output: DataItemOutput[] = items.map((item) => {
		return {
			...item,
			totalAmount: item.quantity * item.price,
		};
	});
	return output;
};

const RoutersTable: FC = () => {
	const { data } = useData();
	const countedData = generateData(data);
	const totalAmount = countedData.reduce(
		(acc, item) => acc + item.totalAmount,
		0
	);

	return (
		<Table>
			<TableCaption>Таблица необходимого оборудования.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Устройство</TableHead>
					<TableHead className="w-[100px]">Кол-во</TableHead>
					<TableHead className="w-[100px]">Цена</TableHead>
					<TableHead className="text-right">Сумма</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{countedData.map((item, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{item.device}</TableCell>
						<TableCell>{item.quantity}</TableCell>
						<TableCell>{item.price}</TableCell>
						<TableCell className="text-right">{item.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Итого</TableCell>
					<TableCell className="text-right">{totalAmount}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default RoutersTable;
