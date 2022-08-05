import { useEffect, useState } from "react";
import Head from "next/head";
import * as XLSX from "xlsx";
import { Header } from "../components/ui/Header";

export default function Home() {
	const [file, setFile] = useState(null);
	const [processedData, setProcessedData] = useState([]);

	useEffect(() => {
		if (!file) return;
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = event => {
			const binaryString = new Uint8Array(event.target.result);
			const workbook = XLSX.read(binaryString, {
				type: "array",
				raw: true,
				cellFormula: false,
			});
			const worksheetName = workbook.SheetNames[0];
			const worksheetData = XLSX.utils.sheet_to_json(
				workbook.Sheets[worksheetName]
			);

			let processedDataArray = [];
			for (const dataObject of worksheetData) {
				const dataArray = Object.values(dataObject);
				if (isNaN(dataArray[0])) continue;
				const newObject = {
					coordinateNumber: dataArray[0],
					x: dataArray[1],
					y: dataArray[2],
				};
				processedDataArray.push(newObject);
			}
			setProcessedData(processedDataArray);
		};
	}, [file]);
	// console.log(processedData);

	return (
		<>
			<Head>
				<title>Rudra Developers</title>
				<meta
					name="description"
					content="Website for Rudra Developers"
				/>
			</Head>
			<Header />
			<input
				type="file"
				accept="xls"
				id="raised-button-file"
				onChange={event => {
					setFile(event.target.files[0]);
				}}
			/>
		</>
	);
}
