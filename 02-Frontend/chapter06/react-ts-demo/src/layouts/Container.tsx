type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ children, style }: ContainerProps) => (
  <div
    style={{
      padding: '2rem',
      marginTop: '2rem',
      borderRadius: '0.5rem',
      backgroundColor: 'gray',
      color: 'black',
      fontFamily: 'sans-serif',
      ...style,
    }}
  >
    {children}
  </div>
);

export default Container;
