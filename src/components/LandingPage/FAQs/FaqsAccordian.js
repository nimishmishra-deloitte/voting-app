import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";

function FaqsAccordian({ ques, ans }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          boxShadow: 5,
          mr: 3,
          pt: 2,
          pb: 2,
          pr: 3,
          pl: 3,
          mb: 3,
          backgroundColor: "white",
          opacity: 0.8,
          color: "black",
          borderRadius: 5,
        }}
      >
        <Box>
          <Button onClick={() => setShow(!show)} sx={{ color: "#7851a9" }}>
            {show ? <RemoveIcon /> : <AddIcon />}
          </Button>
        </Box>
        <Box className="ques">
          <Typography
            variant="h6"
            style={{ color: "#000", textAlign: "left" }}
            sx={{ pl: 1 }}
          >
            {ques}
          </Typography>
          {show && <Typography variant="p">{ans}</Typography>}
        </Box>
      </Box>
    </>
  );
}

export default FaqsAccordian;
