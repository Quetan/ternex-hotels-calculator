import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
	type FC,
} from "react";
import { DataItemInput } from "./App";

type DataContextType = {
	data: DataItemInput[];
	setData: Dispatch<SetStateAction<DataItemInput[]>>;
};

export const DataContext = createContext<DataContextType>({
	data: [],
	setData: () => {},
});

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
	const [data, setData] = useState<DataItemInput[]>([]);
	return (
		<DataContext.Provider
			value={{
				data: data,
				setData: setData,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
