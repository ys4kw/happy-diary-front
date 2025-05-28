import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../page.module.css";

export default function Diary() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
            sx={{
              width: "100%",
              maxWidth: 600,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{
              minWidth: 56,
              minHeight: 56,
              borderRadius: "50%",
              backgroundColor: "#6b4f2a",
              color: "#fff",
              ml: 2,
              "&:hover": {
                backgroundColor: "#4e3b1f",
              },
            }}
          >
            <EditIcon />
          </Button>
        </div>
      </main>
    </div>
  );
}
