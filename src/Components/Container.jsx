import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, {useState } from "react";
const axios = require("axios");

export default function Container() {
  const [city, setCity] = useState("");
  const [data, setdata] = useState("");
  const [temp, setTemp] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [press, setPress] = useState("");
  const [show, setShow] = useState(false);

  function showWeather() {
    axios({
      method: "get",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=9219e798f1d4e858aeded101f92194db&units=metric",
    })
      .then(function (response) {
        return response.data;
      })
      .then((data) => {
        setdata(data.weather[0].description.toUpperCase());
        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setPress(data.main.pressure);
        console.log(data);
        console.log(data.main.temp);
      });
  }

  return (
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showWeather();
          setShow(true);
        }}
      >
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required
        />
        <hr></hr>
        <Button variant="contained" type="submit">
          Show Weather
        </Button>
      </form>
      {show ? (
        <TableContainer className="data" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Temperature (in &#8451;)</TableCell>
                <TableCell>Description </TableCell>
                <TableCell>Humidity</TableCell>
                <TableCell>Pressure</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{temp}</TableCell>
                <TableCell>{data}</TableCell>
                <TableCell>{Humidity}</TableCell>
                <TableCell>{press}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
}
