import style from './Buttongroup.module.css'

import balls from '../JSONS/balls'
import { PropTypes } from 'prop-types'
const Buttongroup = ({setTotalRuns, setTotalWickets,setDelivery}) => {

    const handleChange = (values,wicket,legal,display) =>{
        setTotalRuns(prev => parseInt(prev) + parseInt(values));
        wicket ? setTotalWickets(prev => parseInt(prev) + 1) : '';
        legal ? setDelivery(prev => parseInt(prev) + 1) : '';
        console.log(display)
    }

  return (
    <>
        <div className={style.mainDiv}>
            {
                balls.map((items, index)=>(
                    <div key={index} className={style.btngroup}>
                        {items.map((val,index)=>(
                            <button key={index} onClick={() => handleChange(val.values,val.wicket,val.legal,val.display)}>{val.ball}</button>
                        ))}
                    </div>
                ))
            }
        </div>
    </>
  )
}


Buttongroup.propTypes= {
    setTotalRuns : PropTypes.func.isRequired,
    setTotalWickets : PropTypes.func.isRequired,
    setDelivery : PropTypes.func.isRequired,
}
export default Buttongroup

