"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button
          variant="contained"
          sx={{
            fontSize: 24,
            padding: "16px 48px",
            borderRadius: 32,
            backgroundColor: "#6b4f2a",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#4e3b1f",
            },
          }}
          onClick={() => router.push("/diary")}
        >
          日記を書く
        </Button>
      </main>
    </div>
  );
}
