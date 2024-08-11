import "./JobItem.css";
import photosnap from "../../assets/images/photosnap.svg"
function JobItem({ eachJob }){
   const QualificationsArray = [...eachJob.languages, ...eachJob.tools]

    return(
     <div className="job-item" style={eachJob.new == true ? { borderLeft: "4px solid hsl(180, 29%, 50%)" } : null }>
        <div className="profile">
            <img className="profile-img" src={eachJob.logo} />
            <div className="profile-details">
                <div className="info">
                    <label className="companies">{eachJob.company}</label>

                    {eachJob.new == true ?(<label className="new-label">NEW!</label>)
                    :null }
                       {eachJob.featured == true ?(<label className="featured-label">FEATURED</label>)
                    :null }
                    
                </div>
                <p>{eachJob.position} </p>
                <ul className="timing">
                    <li>{eachJob.postedAt}</li>
                    <li>{eachJob.contract}</li>
                    <li>{eachJob.location}</li>
                </ul>
            </div>
        </div>
        <div className="Qualifications">
            {QualificationsArray.map((item, index) => {
                return(
                    <button className="btn" key={index}>{item}</button>
                );
            })}
            
           
        </div>
     </div>
    );
}

export default JobItem;