

import style from "./App.module.css";
import { useEffect, useState } from "react";
import LeagueService from "./services/LeagueService";
import LeaderboardService from "./services/Leaderboard";

function Leaderboard() {
  const [matches, setMatches] = useState([1, 2])
  useEffect(async () => {
    const authService = new LeagueService();
    const data = await authService.getMatches() || {};
    setMatches(data.matches)
  }, []);
  /*
   Map method for unique countries team array 
 */
  const uniqueTeam = new Map()
  if (matches.length) {
    (matches).map((obj, index) => {
      /*
        LeaderboardService new Object with propert totalMatch , totalGoal,totalPoints 
      */
      const leaderboardProperty = new LeaderboardService();
      /*
        If any country already exist in Map so we will concatinate their totalMatch , totalGoal,totalPoints 
          total match +=1
          total goal +=current score
          total points +=current points {if both the tem sore same then 1 , Or if team wons then 3}
        else 
          total match =1
          total goal =current score
          total points =current points {if both the tem sore same then 1 , Or if team wons then 3}
      */
      if (uniqueTeam.get(obj.homeTeam)) {
        leaderboardProperty.totalMatches = uniqueTeam.get(obj.homeTeam).totalMatches + 1;
        leaderboardProperty.totalGoal = uniqueTeam.get(obj.homeTeam).totalGoal + obj.homeTeamScore;
        leaderboardProperty.totalPoints = uniqueTeam.get(obj.homeTeam).totalPoints + (obj.homeTeamScore == obj.awayTeamScore) ? 1 :
          obj.homeTeamScore > obj.awayTeamScore ? 3 : 0;
        uniqueTeam.set(obj.homeTeam, leaderboardProperty)

      } else {
        leaderboardProperty.totalMatches = 1;
        leaderboardProperty.totalGoal = obj.homeTeamScore;
        leaderboardProperty.totalPoints = (obj.homeTeamScore == obj.awayTeamScore) ? 1 :
          obj.homeTeamScore > obj.awayTeamScore ? 3 : 0;
        uniqueTeam.set(obj.homeTeam, leaderboardProperty)
      }
      if (uniqueTeam.get(obj.awayTeam)) {
        leaderboardProperty.totalMatches = uniqueTeam.get(obj.awayTeam).totalMatches + 1;
        leaderboardProperty.totalGoal = uniqueTeam.get(obj.awayTeam).totalGoal + obj.awayTeamScore;
        leaderboardProperty.totalPoints = uniqueTeam.get(obj.awayTeam).totalPoints + (obj.homeTeamScore == obj.awayTeamScore) ? 1 :
          obj.homeTeamScore < obj.awayTeamScore ? 3 : 0;
        uniqueTeam.set(obj.awayTeam, leaderboardProperty)

      } else {
        leaderboardProperty.totalMatches = 1;
        leaderboardProperty.totalGoal = obj.awayTeamScore;
        leaderboardProperty.totalPoints = (obj.homeTeamScore == obj.awayTeamScore) ? 1 :
          obj.homeTeamScore < obj.awayTeamScore ? 3 : 0;
        uniqueTeam.set(obj.awayTeam, leaderboardProperty)
      }
    })
  }

  let index = 0
  const result = []
  uniqueTeam.forEach(function (value, key) {
    result.push(<tr class={`${style.normalTr} ${(index + 1) % 2 == 0 ? style.normalTrEven : style.normalTrOdd}`}>
      <td class={`${style.tdStyleBoldL} ${style.tdStyleAlignLeft}`}>
        <img class={style.rightCountryImgL} width="53" height="37" src={`https://countryflagsapi.com/png/${key}`}></img>
        <span class={style.rightCountry}>{key}</span>
      </td>
      <td class={`${style.tdStyle} ${style.tdStyleAlignLeft} `}>{value.totalMatches}</td>
      <td class={`${style.tdStyle} ${style.tdStyleAlignLeft} `}>{value.totalGoal}</td>
      <td class={`${style.tdStyle} ${style.tdStyleAlignLeft} `}>{value.totalMatches}</td>
      <td class={`${style.tdStyle} ${style.tdStyleAlignLeft} ${style.tdStyleBold}`}>{value.totalPoints}</td>
    </tr>)
  })
  return (

    <div class={style.mainContainer} >
      <div class={style.innerContainer}>
        <div class={style.titleContainer} >
          League Standings
        </div>
        <div class={style.tableContainer}>
          <table class={style.tableStyle}>
            <tr class={style.headerTr}>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft}`}>Team Name</th>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft} `}>MP</th>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft} `}>GF</th>
              <th class={style.thStyle}>GA</th>
              <th class={`${style.thStyle} ${style.thStyleAlignLeft} `}>Points</th>
            </tr>
            {
              result
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
