import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../page.module.css";

export default function Diary() {
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
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid #e0e0e0",
              padding: 24,
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              fontWeight: 500,
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          >
            {/* ここに情報表示欄の内容を追加できます */}
            情報表示欄
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
