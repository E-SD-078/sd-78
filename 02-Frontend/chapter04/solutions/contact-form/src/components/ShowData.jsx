const ShowData = ({ formData }) => {
  const { name, email, phone, message } = formData;
  return (
    <section>
      <p>Form Data</p>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{message}</p>
    </section>
  );
};
export default ShowData;
