import { useState } from "react";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { PostForm } from "../api/Hireusapi";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReserveTableObject from "../interfaces/ReserveTableObject";
import { Box, TextField } from "@mui/material";
import { useEffect } from "react";
import { Snackbar } from "@mui/material";

const ReserveTable = () => {
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs("2025-01-01T00:01")
  );
  const [numberofpeople, setNumberOfPeople] = useState(0);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const [errorDate, setErrorDate] = useState("");
  const [errorNumberOfPeople, setErrorNumberOfPeople] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhonenumber, setErrorPhonenumber] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [postError, setpostError] = useState("");
  const [hasError, setHasError] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [confirmMessage, setconfirmMessage] = useState("");
  const [data, setData] = useState<ReserveTableObject>({
    NumberOfPeople: numberofpeople,
    DateTime: dayjs("2025-01-01T00:01"),
    FirstName: firstname,
    LastName: lastname,
    PhoneNumber: phonenumber,
    Email: email,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    if (!hasError && !open) {
      setOpen(true);
      ClearForm();
      setHasError(false);
    }
  };

  const ClearForm = () => {
    setErrorNumberOfPeople("");
    setErrorDate("");
    setErrorFirstName("");
    setErrorLastName("");
    setErrorEmail("");
    setErrorPhonenumber("");
    setNumberOfPeople(0);
    setDate(dayjs("2025-01-01T00:01"));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhonenumber("");
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    var data: ReserveTableObject = {
      NumberOfPeople: numberofpeople,
      DateTime: dayjs("2025-01-01T00:01"),
      FirstName: firstname,
      LastName: lastname,
      PhoneNumber: phonenumber,
      Email: email,
    };
    setData(data);

    setHasError(false);

    if (date == null || !date.isValid()) {
      setErrorDate("Invalid date");
      setHasError(true);
    }
    if (numberofpeople == null || numberofpeople == 0) {
      setErrorNumberOfPeople("Invalid number of people");
      setHasError(true);
      setNumberOfPeople(0);
    }
    if (firstname == null || firstname == "") {
      setErrorFirstName("Invalid first name");
      setHasError(true);
    }
    if (lastname == null || lastname == "") {
      setErrorLastName("Invalid last name");
      setHasError(true);
    }
    if (email == null || email == "") {
      setErrorEmail("Invalid email");
      setHasError(true);
    }
    if (phonenumber == null || phonenumber == "") {
      setErrorPhonenumber("Invalid phonenumber");
      setHasError(true);
    }

    console.log(hasError);
    console.log(data);

    setconfirmMessage(
      "Your reservation has been received. A confirm mail has been send to " +
        email
    );
  };

  const handleNumberChange = (event: {
    target: { value: string };
    preventDefault: () => void;
  }) => {
    if (event.target.value.match(/[^0-9]/)) {
      return;
    }

    setNumberOfPeople(Number(event.target.value));
  };

  const post = async (data: ReserveTableObject) => {
    {
      let result = await PostForm(data);

      if (result != null) {
        setpostError(result);
      } else {
        handleOpen();
      }
    }
  };

  useEffect(() => {
    if (hasError == false) {
      post(data);
    }
  }, [confirmMessage]);

  useEffect(() => {
    if (open == false) {
      ClearForm();
    }
  }, [open]);

  return (
    <section className="mainsectionForm">
      <Box className="containerForm">
        <h1>Reserve a table at Little Lemon</h1>

        <form onSubmit={handleSubmit}>
          <Box className="flex-outer">
            <Box>
              <label>Date:</label>
            </Box>
            <Box className="formbox">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DateTimePicker
                    onChange={(newValue) => setDate(newValue)}
                    value={date}
                    name="date"
                    aria-label="Plan a date for your reservation."
                  />
                </DemoContainer>
              </LocalizationProvider>
              <Box className="invalidinput">
                <label>{errorDate}</label>
              </Box>
            </Box>

            <Box>
              <label>Number of people:</label>
            </Box>
            <Box className="formbox">
              <TextField
                id="numberOfPeople"
                variant="standard"
                required
                placeholder="Type a number…"
                onChange={handleNumberChange}
                aria-label="For how many peopel are you serserving?"
                value={numberofpeople}
                type="text"
              />
            </Box>
            <Box className="invalidinput">
              <label>{errorNumberOfPeople}</label>
            </Box>
            <Box>
              <label>First name:</label>
            </Box>
            <Box className="formbox">
              <TextField
                fullWidth
                type="text"
                variant="standard"
                aria-label="What is your first name?"
                onChange={(val) => setFirstName(val.target.value)}
                id="firstName"
                value={firstname}
              />
              <Box className="invalidinput">
                <label>{errorFirstName}</label>
              </Box>
            </Box>
            <Box>
              <label>Last name:</label>
            </Box>
            <Box className="formbox">
              <TextField
                fullWidth
                type="text"
                variant="standard"
                aria-label="What is your last name?"
                onChange={(val) => setLastName(val.target.value)}
                id="lastName"
                value={lastname}
              />
              <Box className="invalidinput">
                <label>{errorLastName}</label>
              </Box>
            </Box>

            <Box>
              <label>Email-address:</label>
            </Box>
            <Box className="formbox">
              <TextField
                fullWidth
                type="email"
                variant="standard"
                aria-label="What is your email address?"
                onChange={(val) => setEmail(val.target.value)}
                id="email"
                value={email}
              />
              <Box className="invalidinput">
                <label>{errorEmail}</label>
              </Box>
            </Box>
            <Box>
              <label>Phone number:</label>
            </Box>
            <Box className="formbox">
              <TextField
                fullWidth
                type="text"
                variant="standard"
                aria-label="What is your phone number?"
                onChange={(val) => setPhonenumber(val.target.value)}
                id="phonenumber"
                value={phonenumber}
              />
              <Box className="invalidinput">
                <label>{errorPhonenumber}</label>
              </Box>
            </Box>
            <Box>
              <button
                type="submit"
                role="submit button"
                className="btn btn-primary"
              >
                Submit
              </button>
            </Box>
          </Box>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={confirmMessage}
        />
        <Box className="invalidinput">
          <label>{postError.toString()}</label>
        </Box>
      </Box>
    </section>
  );
};

export default ReserveTable;
