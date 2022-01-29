const Table = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.book.name}</td>
      <td>{props.book.author}</td>
      <td>Rs{props.book.price}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.handleRemove(props.index);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Table;
