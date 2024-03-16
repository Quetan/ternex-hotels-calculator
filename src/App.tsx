import CalculatorWrapper from "./components/CalculatorWrapper";
import Grid from "./components/Grid";
import RoutersTable from "./components/RoutersTable";
import Stepper from "./components/Stepper";
import Title from "./components/Title";
import { Separator } from "./components/ui/separator";

export interface DataItemInput {
	device: string;
	quantity: number;
	price: number;
	type: "connector" | "router";
}

export interface DataItemOutput extends DataItemInput {
	totalAmount: number;
}

function App() {
	return (
		<CalculatorWrapper>
			<Title value="Рассчет стоимости услуг" />
			<Grid>
				<RoutersTable />
				<Separator className="mx-auto" orientation="vertical" />
				<Stepper />
			</Grid>
		</CalculatorWrapper>
	);
}

export default App;
