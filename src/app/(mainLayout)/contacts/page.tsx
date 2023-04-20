import { Metadata } from 'next';
import styles from './page.module.scss'
import AdvantagesList from '@components/UI/AdvantagesList';

export const metadata : Metadata = {
  title: 'Контакти - PCstar',
}



export default async function Contacts() {
  
  
  return (
    <main className={`${styles.main}`}>
        <div className={`container ${styles.contactsContainer}`}>
          <section className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6975.516755517427!2d23.313669869351394!3d42.68585695098121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa850fb6af8ebb%3A0x87a301b7860955b9!2sNational%20Palace%20of%20Culture!5e0!3m2!1sen!2sbg!4v1680347359646!5m2!1sen!2sbg" width="100%" height="100%" style={{border: '0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <table className={styles.mapTextContainer}>
              <tbody>
                <tr>
                  <td className={styles.mapInfoLabel}>Адрес:</td>
                  <td>бул. &quot;България&quot;, 1463 Ндк, София</td>
                </tr>
                <tr>
                  <td className={styles.mapInfoLabel}>Телефон:</td>
                  <td>0876 000 000</td>
                </tr>
                <tr>
                  <td className={styles.mapInfoLabel}>Email:</td>
                  <td>contacts@example.com</td>
                </tr>
                <tr>
                  <td className={styles.mapInfoLabel}>Работно време:</td>
                  <td>Понеделник - Събота: 8:00 - 17:00</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className={styles.contactFormSection}>
            <div className={styles.contactFormHeading}>
              <h1>Имате въпрос към нас?</h1>
              <h2>Пишете ни!</h2>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.infoContainer}>
                <div className={styles.fieldContainer}>
                  <label>Имейл</label>
                  <input type='text'/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Име</label>
                  <input type='text'/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Телефон</label>
                  <input type='text'/>
                </div>
              </div>
              <div className={styles.fieldContainer}>
                  <label>Тема</label>
                  <input type='text'/>
              </div>
              <div className={styles.fieldContainer}>
                  <label>Съдържание</label>
                  <textarea className={styles.contentText}/>
              </div>
              <input className={styles.submitButton} type='submit' value='Изпрати'/>
            </form>
          </section>
          <AdvantagesList />
        </div>
    </main>
  )
}
