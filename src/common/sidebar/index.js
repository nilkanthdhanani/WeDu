import styles from "./sidebar.module.scss";

export default function Sidebar({ isOpen, onClose }) {
  console.log("Sidebar isOpen:", isOpen);
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      
    </aside>
  );
}
