const Hello = () => {
  const message = import.meta.env.VITE_HELLO_MESSAGE ?? "Hello from lite-hello MFE! 🎉";
  return <div>{message}</div>;
};

export default Hello;
