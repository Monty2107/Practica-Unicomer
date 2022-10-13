const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>CellPhone</th>
            <th>Address Home</th>
            <th>Profession</th>
            <th>Incomes</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.birthday}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.profession}</td>
              <td>$ {item.incomes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;