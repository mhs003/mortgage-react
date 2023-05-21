import React, { useState } from 'react';
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth='xl' sx={{ marginTop: 1, marginBottom: 6 }}>
        <Grid container spacing={7} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
      <Typography variant='overline' component='div' fontSize={17} textAlign='center' sx={{ marginBottom: 2 }}>
        &gt;_ Monzurul Hasan | Get source from <a target="_blank" rel="noopener noreferrer" href="https://github.com/mhs003/mortgage-react/">Github</a>
      </Typography>
    </div>
  );
}

export default App;
