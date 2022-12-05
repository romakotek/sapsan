import CvImage from "../../../assets/Yerzhan.png";
import styles from './Cv.modules.css';

const Cv = (props) => {
  return (
    <div className={styles.cvheader}>
      <table>
        <tr>
          <td>
            <img src={CvImage} className={styles.cvheader} />
          </td>
          <td valign="top">
            <ul>
              <li>+7 777 999 6969</li>
              <li>buraby1@gmail.com</li>
              <li>Reside in: Astana</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cv;
