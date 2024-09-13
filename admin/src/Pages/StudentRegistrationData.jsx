import Excel from "../components/Excel";
import GoogleForm from "../components/GoogleForm";
// import GoogleSheetTable from '../components/GoogleSheetTable';


const StudentRegistrationData = () => {
  return (
    <div className="flex gap-2 items-center justify-center min-h-screen bg-gray-900 font-playfair">
      {/* <GoogleSheetTable /> */}
      <Excel />
      <GoogleForm />
    </div>
  )
};

export default StudentRegistrationData;

// gdbc-925@gdbc-434107.iam.gserviceaccount.com

//sheet id : 1Q8tiaBvq6Y-H_nm6zJ6fzLf0RsOczsnTG2IRMKQ_42U