import CvImage from "../../../assets/Yerzhan.png";
import styles from './Cv.modules.css';

const Cv = (props) => {
  return (
    <div className={styles.cvheader}>
      <table>
        <tr>
          <td>
            <img src={CvImage} className={styles.cvheaderimg} alt="Yerzhan's Avatar" />
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
      <h2>Experince</h2>
    <table>
      <tr>
        <th scope="col" align="left" width="200">Time period</th>
        <th scope="col" align="left">Work place</th>
      </tr>
      <tr>
        <td scope="row">may 2022 - current time</td>
        <td>ATI, LLP</td>
      </tr>
      <tr>
        <td scope="row">october 2021 - may 2022</td>
        <td>ACCENTURE, JSC</td>
      </tr>
    </table>
    <hr noshade />
    <h2>Education</h2>
    <table>
      <tr>
        <th scope="col" align="left" width="200">Time period</th>
        <th scope="col" align="left">Study place</th>
      </tr>
      <tr>
        <td scope="row">2008 - 2011</td>
        <td>Banking institute, Prague</td>
      </tr>
      <tr>
        <td scope="row">2006 -  2008</td>
        <td>Czech technical university</td>
      </tr>
    </table>
    <hr noshade />
    <h2>Hobbies</h2>
    <ul>
        <li>swimming</li>
        <li>running</li>
    </ul>
    <hr noshade />
    <h2>Contacts</h2>
    <ol>
        <li><a target="_blank" href="https://github.com/romakotek/">Github</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/burabayev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRKM3DZCESSG4nxt1HgiFaw%3D%3D">LinkedIn</a></li>
    </ol>
    </div>
  );
};

export default Cv;
