import { Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";

import randomcolor from "randomcolor";
function FaqsAccordian({ ques, ans }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        className="ques"
        sx={{
          boxShadow: 5,
          mr: 3,
          p: 1,
          pl: 1,
          mb: 3,
          backgroundColor: randomcolor(),
          opacity: 0.8,
          color: "black",
          borderRadius: 15,
        }}
      >
        <Typography variant="h6" onClick={() => setShow(!show)} sx={{ pl: 1 }}>
          {show ? <RemoveIcon /> : <AddIcon />}
          {ques}
        </Typography>
        {show && (
          <Typography variant="p" sx={{ m: 2 }}>
            {ans}
          </Typography>
        )}
      </Box>
    </>
  );
}

export default FaqsAccordian;
