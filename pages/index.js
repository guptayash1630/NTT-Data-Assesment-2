import Head from "next/head";
import React from "react";
import RoomsComponent from "../components/RoomsComponent";

export default () => (
	<div>
		<Head>
			<title>Hilton - Book Room</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="stylesheet" href="/static/css/bootstrap.css" />
			<link rel="stylesheet" href="/static/css/style.css" />
		</Head>
		<div className="container mt-5">
			<RoomsComponent />
		</div>
	</div>
);
