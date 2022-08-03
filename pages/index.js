import { useEffect, useState } from "react";
import Head from "next/head";
import * as XLSX from "xlsx";

export default function Home() {
	const [file, setFile] = useState(null);
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
			const firstObject = worksheetData[2];
			console.log(Object.values(firstObject));
		};
	}, [file]);

	return (
		<>
			<Head>
				<title>Rudra Developers</title>
				<meta
					name="description"
					content="Website for Rudra Developers"
				/>
			</Head>
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
