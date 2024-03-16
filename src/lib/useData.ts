import { DataContext } from "@/DataProvider";
import { useContext } from "react";

function useData() {
	return useContext(DataContext);
}

export default useData;
