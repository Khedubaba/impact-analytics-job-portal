const Reject = () => {
    const arr=JSON.parse(localStorage.getItem("keys"))
    console.log("temp",arr[0].substring(0,4))
    var shArr=[];

    function check(applicant){
        console.log("q",localStorage.getItem(applicant))
        if(localStorage.getItem(applicant) === "false"){
            shArr.push(applicant.substring(0,4))
     
        }

    }

    return(

        
        <div className="applicant-list">
  
  <h2>Rejected Applicants</h2>
        {arr.map((applicant)  => (
        
                check(applicant)
 
        ))}

{console.log("qq",shArr)}


{shArr.map((applicant)  => (
            
            <div className="applicant-preview" key={applicant}>
               {console.log("temp1",applicant)}
          
                    <div className="candidateCard">
                       {console.log("name",JSON.parse(localStorage.getItem(applicant))[1])}
                          
                        <img className="profilePic" width="100px" height="100px" src={JSON.parse(localStorage.getItem(applicant))[2]}/>
                        <p>[{JSON.parse(localStorage.getItem(applicant))[0]}]</p>
                        <h2>{JSON.parse(localStorage.getItem(applicant))[1]}</h2>
                    </div>
            
            </div>
        ))}

           
    </div>


    );
}
 
export default Reject;