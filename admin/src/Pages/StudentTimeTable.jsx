import ScheduleTable from "../components/ScheduleTable";

const columns = [
  { header: 'Time', key: 'time_slot', editable: true },
  { header: 'Monday', key: 'mon', editable: true },
  { header: 'Tuesday', key: 'tue', editable: true },
  { header: 'Wednesday', key: 'wed', editable: true },
  { header: 'Thursday', key: 'thu', editable: true },
  { header: 'Friday', key: 'fri', editable: true },
  { header: 'Saturday', key: 'sat', editable: true },
  { header: 'Sunday', key: 'sun', editable: true },
];

const StudentTimeTable = () => {
  return (
    <div className="space-y-8">
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/commercexi"
        title="Commerce (XI) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/commercexii"
        title="Commerce (XII) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/engxi"
        title="ENG (XI) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/engxii"
        title="ENG (XII) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/medxi"
        title="MED (XI) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/medxii"
        title="MED (XII) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/genscixi"
        title="GENSCI (XI) Time Table"
        columns={columns}
      />
      <ScheduleTable
        apiEndpoint="http://localhost:3000/api/genscixii"
        title="GENSCI (XII) Time Table"
        columns={columns}
      />
    </div>
  );
};

export default StudentTimeTable;
