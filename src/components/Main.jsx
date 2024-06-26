import { useEffect, useState } from 'react';
import Buttongroup from './Buttongroup';
import style from './Main.module.css';
const Main = () => {
    
    const [TotalRuns,setTotalRuns] = useState(0);
    const [TotalWickets,setTotalWickets] = useState(0);

    const [Overs,setOvers] = useState(0);
    const [Delivery, setDelivery] = useState(0);

    const [Team, setTeam] = useState(true);

    const [resultFlag, setResultFlag] = useState(false);
    const [result, setResult] = useState('');


    const [TeamA,setTeamA] = useState([0,0,'0.0']);
    const [TeamB,setTeamB] = useState([0,0,'0.0']);
    

    useEffect(()=>{
        if(Delivery > 5){
            setDelivery(0)
            setOvers(prev => prev + 1);
            
            
        }

        

        Team ? setTeamA([parseInt(TotalRuns),TotalWickets,`${Overs}.${Delivery}`]) : setTeamB([parseInt(TotalRuns),TotalWickets,`${Overs}.${Delivery}`]);

        if(Overs == 2 || TotalWickets === 10){
            setTeam(!Team);
        }
    },[Delivery,Overs]);

    useEffect(()=>{
        if(parseInt(TeamB[0])>parseInt(TeamA[0])){
            setResultFlag(!resultFlag);
        }
    },[TotalRuns])

    useEffect(()=>{
        Team ? setResultFlag(!resultFlag):''
        setTotalRuns(0);
        setTotalWickets(0);
        setDelivery(0);
        setOvers(0);
    },[Team])

    useEffect(()=>{
        if(TeamB[0]>TeamA[0]){
            setResult('Team B win the match');
        }
        else if(TeamA[0]>TeamB[0]){
            setResult('Team A win the match');
        }
        else if(TeamA[0]===TeamB[0] && TeamA[2] !='0.0'){
            setResult('Match Tied');
        }
    },[resultFlag])


  return (
    <>
        <div className={style.main}>
            <h1>Cricket Scoring App</h1>

            <h2>{`${result}`}</h2>
            <h2>Team {Team ? 'A' : 'B'}</h2>

            <h3>Total : {`${TotalRuns}/ ${TotalWickets}`}</h3>
            <h4>Overs : {`${Overs}.${Delivery}`}</h4>

            

            <h5>Team A : {`${TeamA[0]} - ${TeamA[1]} ( ${TeamA[2]} )`}</h5>
            <h5>Team B : {`${TeamB[0]} - ${TeamB[1]} ( ${TeamB[2]} )`}</h5>

            <Buttongroup 
                setTotalRuns={setTotalRuns}
                setTotalWickets={setTotalWickets}
                setDelivery={setDelivery}

            />
        </div>
    </>
  )
}

export default Main