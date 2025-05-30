"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../page.module.css";

export default function Diary() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: 120,
              background: "transparent",
              // borderRadius: 16, // Removed
              // boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // Removed
              border: "none",
              padding: "12px 0", // Adjusted padding
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "inherit",
              boxSizing: "border-box",
              // Ensure text color contrasts with notebook background.
              // fontFamily: "inherit" should handle this.
              // If not, explicitly set color: "var(--foreground)" or similar from page.module.css
            }}
          >
            {info ? info : "情報表示欄"}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "absolute",
            left: 0,
            bottom: 40,
            gap: 16,
          }}
        >
          <TextField
            multiline
            minRows={8}
            maxRows={8}
            variant="outlined"
            placeholder="今日の出来事や気持ちを書きましょう…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              width: "100%",
              maxWidth: 600,
              background: "transparent", // Changed
              borderRadius: 0, // Changed
              // boxShadow: 1, // Removed
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.23)", // Subtle border
                },
                "&:hover fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.5)", // Darker on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: (theme) => theme.palette.primary.main, // Theme color on focus
                },
                "background": "transparent", // Ensure the input area itself is transparent
              },
              "& .MuiInputBase-input": {
                fontFamily: "inherit", // Match page font
                background: "transparent", // Ensure text input area is transparent
              },
            }}
          />
          <Button
            variant="outlined" // Changed variant
            sx={{
              minWidth: 56,
              minHeight: 56,
              borderRadius: "50%", // Kept for circular icon button
              color: "var(--foreground)", // Use theme variable for text/icon color
              borderColor: "var(--foreground)", // Use theme variable for border
              ml: 2,
              "&:hover": {
                backgroundColor: "var(--button-secondary-hover)", // Light background on hover
                borderColor: "var(--button-primary-hover)", // Darker border on hover
                // color: "var(--button-primary-hover)", // Optional: if text color needs to change on hover
              },
            }}
            onClick={() => {
              setInfo(text);
              setText("");
            }}
          >
            <EditIcon />
          </Button>
        </div>
      </main>
    </div>
  );
}
