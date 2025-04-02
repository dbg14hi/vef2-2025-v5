// app/contact/page.tsx
import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1>Hafðu Samband</h1>
      <p>Sendu okkur skilaboð og við svörum eins fljótt og auðið er.</p>

      <form className={styles.form}>
        <label>
          Nafn:
          <input type="text" name="name" required />
        </label>

        <label>
          Netfang:
          <input type="email" name="email" required />
        </label>

        <label>
          Skilaboð:
          <textarea name="message" rows={5} required></textarea>
        </label>

        <button type="submit">Senda</button>
      </form>
    </div>
  );
}
