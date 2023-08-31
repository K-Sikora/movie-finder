import { SpinnerRoundOutlined } from "spinners-react";
export default function Loader() {
  return (
    <SpinnerRoundOutlined
      size={50}
      thickness={100}
      speed={100}
      color="#1d36c3"
    />
  );
}
