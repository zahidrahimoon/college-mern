const WorkingCommitteeTable = () => {
  const members = [
    { id: 1, name: 'Mr. Abdul Rauf Essa', designation: 'President' },
    { id: 2, name: 'Mr. Irfan Z. Bawany', designation: 'Vice-President' },
    { id: 3, name: 'Mr. Zakaria Ghaffar', designation: 'Vice-President' },
    { id: 4, name: 'Mr. Ahmed Chinoy', designation: 'Vice-President' },
    { id: 5, name: 'Mr. Amir Kothawala', designation: 'Vice-President' },
    { id: 6, name: 'Mr. Usman Batliwala', designation: 'Hon. General Secretary' },
    { id: 7, name: 'Mr. Altaf Hussain Vagher', designation: 'Hon. Joint Secretary' },
    { id: 8, name: 'Mr. Ismail Bawany', designation: 'Member' },
    { id: 9, name: 'Mr. Yacoob S. Tabani', designation: 'Member' },
    { id: 10, name: 'Ms. Farida Ghaffar', designation: 'Member' },
    { id: 11, name: 'Dr. Farooq Akbani', designation: 'Member' },
    { id: 12, name: 'Mr. Irfan Dalia', designation: 'Member' },
    { id: 13, name: 'Mr. Aslam Sharif', designation: 'Member' },
  ];

  return (
    <section className="bg-white py-16 border-black border-b font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Working Committee of PMEWS</h2>
        <div className="flex justify-center mb-4">
          <div className="border-t-2 border-gray-400 w-16"></div>
          <div className="border-t-2 border-red-500 w-8 mx-2"></div>
          <div className="border-t-2 border-gray-400 w-16"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b">S#</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-4 border-b">{member.id}</td>
                  <td className="py-2 px-4 border-b">{member.name}</td>
                  <td className="py-2 px-4 border-b">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorkingCommitteeTable;
