require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const cors = require("cors");
const pool = require("./db/database");

// PORT
const PORT = process.env.PORT || 5000;

// Initialization
const app = express();
app.use(express.json());
// for handling CORS error on browser side
app.use(cors());

// Routes
app.get("/get-modules", async (req, res) => {
	try {
		const [modules] = await pool.query("SELECT * FROM modules");
		const [contents] = await pool.query("SELECT * FROM contents");

		const newModules = modules.map((m) => {
			return { ...m, contents: [] };
		});

		const data = newModules.map((m) => {
			let mod = m;
			contents.map((c) => {
				if (m.id == c.module_id) {
					mod["contents"].push(c);
				}
			});

			return mod;
		});

		res.send(data);
	} catch (error) {
		console.log(error);
	}
});

// Server running
const server = app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error: ${err}`);

	server.close(() => process.exit(1));
});
