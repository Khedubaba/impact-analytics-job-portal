import ApplicantList from './ApplicantList';
import useFetchRequest from './useFetchRequest';

const Home = () => {
    const {data:applicants, isLoading, error} = useFetchRequest('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { applicants && <ApplicantList applicants={applicants} title="All Applicants List"/> }
        </div>
    );
}

export default Home;