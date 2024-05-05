const Page404 = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  };
  const textContainerStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    color: '#555',
  };
  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Page Not Found</h1>
      </div>
    </div>
  );
};

export default Page404;
