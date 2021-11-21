import { useHistory, useParams } from "react-router";


const ApplicantDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const shortlistFunction = () => {

    localStorage.setItem(id+"s",true)
    history.push('/');
    


    }

    const rejectFunction = () => {

        localStorage.setItem(id+"s",false)
        history.push('/');
    
        }


    return ( 
        <div className="applicant-details">
            { (
                
                 <div className="applicant-preview" key={id}>
                 <div className="candidateCard">
                     <img className="profilePic" width="100px" height="100px" src={JSON.parse(localStorage.getItem(id))[2]}/>
                     <br/>
                     
                     <p>[{JSON.parse(localStorage.getItem(id))[0]}]</p>
                     <h2>{JSON.parse(localStorage.getItem(id))[1]}</h2>
                     
                     <button className="button-shortlist" onClick={shortlistFunction}>SHORTLIST</button>
                    <br/> <br/> 
                    <button  className="button-reject" onClick={rejectFunction}>REJECT</button>
                 </div>
                 </div>
            )}
        </div>
    );
}
 
export default ApplicantDetails;