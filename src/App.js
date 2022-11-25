

import style from "./App.module.css";
import { useEffect, useState } from "react";
import LeagueService from "./services/LeagueService";
import getDate from "./CommonFn";

function App() {
  const [matches, setMatches] = useState([1, 2])
  useEffect(async () => {
    const authService = new LeagueService();
    const data = await authService.getMatches() || {};
    setMatches(data.matches)
  }, []);


  return (

    <div class={style.mainContainer} >
      <div class={style.innerContainer}>
        <div class={style.titleContainer} >
          League Schedule
        </div>
        <div class={style.tableContainer}>
          <table class={style.tableStyle}>
            <tr class={style.headerTr}>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft} ${style.dateTime}`}>Date/Time</th>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft} ${style.stadim}`}>Stadim</th>
              <th class={style.thStyle}>Home Team</th>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft}`}>Away Team</th>
            </tr>
            {(matches).map((obj, index) => {
              return (<tr class={`${style.normalTr} ${(index + 1) % 2 == 0 ? style.normalTrEven : style.normalTrOdd}`}>

                <td class={`${style.tdStyle} ${style.tdStyleAlignLeft}  ${style.dateTime}`}>
                  <div class={style.date}>{getDate(obj.matchDate).date}</div>
                  <div class={style.lineBreak}></div>
                  <div class={style.time}>{getDate(obj.matchDate).time}</div>
                </td>
                <td class={`${style.tdStyle} ${style.tdStyleAlignLeft} ${style.stadim}`}>{obj.stadium}</td>
                <td class={`${style.tdStyleBold} ${style.tdStyleAlignRight}`}>
                  <div class={style.imageAndPoints}>
                    <span class={style.leftCountry}>{obj.homeTeam}</span>
                    <img class={style.leftCountryImg} width="53" height="37" src={`https://countryflagsapi.com/png/${obj.homeTeam}`}></img>
                    <span class={style.pointsOfMatch}>{obj.homeTeamScore} : {obj.awayTeamScore}</span>
                  </div>
                </td>
                <td class={`${style.tdStyleBold} ${style.tdStyleAlignLeft}`}>
                  <img class={style.rightCountryImg} width="53" height="37" src={`https://countryflagsapi.com/png/${obj.awayTeam}`}></img>
                  <span class={style.rightCountry}>{obj.awayTeam}</span>
                </td>
              </tr>)
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
