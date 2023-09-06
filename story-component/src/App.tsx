import IconButton from "./components/IconButton";
import messageSvg from "./assets/message-white.svg";

export default function App() {
  return (
    <>
      <h2>Hello from App</h2>
      <IconButton iconSrc={messageSvg} />
    </>
  );
}
