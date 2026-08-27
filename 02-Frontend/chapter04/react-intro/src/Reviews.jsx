import './Reviews.css';
const Reviews = ({ user, isActive, batchNumber }) => {
  return (
    <section className='content'>
      <h2 style={{ color: 'red' }}>{user.name}</h2>
      <p>dfd {user.isActive.toString()}</p>
      <p>{isActive.toString()}</p>
      {/*bool dont show directlly*/}
    </section>
  );
};
export default Reviews;
