// import CommerceTable from "../components/CommerceTable";
import Footer from "../components/Footer";
import ScheduleTable from "../components/ScheduleTable";

const StudentTimeTable = () => {
  return (
    <>
      <ScheduleTable apiEndpoint="/api/commercexi" title="Commerce (XI) Time Table" />
      <ScheduleTable apiEndpoint="/api/commercexii" title="Commerce (XII) Time Table" />
      <ScheduleTable apiEndpoint="/api/engxi" title="ENG (XI) Time Table" />
      <ScheduleTable apiEndpoint="/api/engxii" title="ENG (XII) Time Table" />
      <ScheduleTable apiEndpoint="/api/medxi" title="MED (XI) Time Table" />
      <ScheduleTable apiEndpoint="/api/medxii" title="MED (XII) Time Table" />
      <ScheduleTable apiEndpoint="/api/genscixi" title="GENSCI (XI) Time Table" />
      <ScheduleTable apiEndpoint="/api/genscixii" title="GENSCI (XII) Time Table" />
      <Footer />
    </>
  );
};

export default StudentTimeTable;
